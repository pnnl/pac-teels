<style>
</style>

<script>
  import IconButton from "@smui/icon-button";
  import Button, { Label, Icon } from "@smui/button";
  import { push, pop, replace } from "svelte-spa-router";
  import Textfield from "@smui/textfield";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field/src/FormField.svelte";
  import { currPass } from "../stores/stores";

  let newPassword = "";
  let password = "";
  let showPassChecked = false;
  let showNewPassChecked = false;

  currPass.subscribe(currPassword => {
    if (currPassword) {
      password = currPassword;
    }
  });

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
      await Auth.changePassword(
        user, // the Cognito User Object
        password,
        newPassword // the new password
      );
      currPass.update(currentPassword => newPassword);
      push("/admin/accountDetails");
    } catch (error) {
      console.log("Change password failed");
      console.log(error);
    }
  };
</script>

<div
  style="padding: 3rem 5rem;display: flex;flex-direction: column;width: -webkit-fill-available;align-items: start;"
>
  <Button
    on:click={() => {
      push("/admin/accountDetails");
    }}
  >
    <Icon class="material-icons">arrow_backward</Icon>
    <Label>Back</Label>
  </Button>
  <div
    style="font-weight: 400; font-size: 32px; color: var(--blackFont); padding: 1.2rem 0rem; display: flex; flex-direction: column;align-items: start;"
  >
    <div>Change Password</div>
  </div>
  <div
    style={"margin-top: 1.2rem;color: var(--font);display: flex; flex-direction: column;align-items: start;width: 400px;"}
  >
    <div style={"font-size: 14px; line-height: 21px; font-weight: 500;"}>
      Current Password
    </div>
    {#if showPassChecked}
      <Textfield
        bind:value={password}
        variant="outlined"
        style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
      />
    {:else}
      <Textfield
        bind:value={password}
        variant="outlined"
        type="password"
        style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
      />
    {/if}
  </div>
  <div
    style={"margin-top: 1.2rem;color: var(--font);display: flex; flex-direction: column;align-items: start;width: 400px;"}
  >
    <FormField>
      <Checkbox
        bind:showPassChecked
        on:click={() => (showPassChecked = !showPassChecked)}
      />
      <span slot="label">Show Current Password</span>
    </FormField>
  </div>
  <div
    style={"margin-top: 1.2rem;color: var(--font);display: flex; flex-direction: column;align-items: start;width: 400px;"}
  >
    <div style={"font-size: 14px; line-height: 21px; font-weight: 500;"}>
      New Password
    </div>
    {#if showNewPassChecked}
      <Textfield
        bind:value={newPassword}
        variant="outlined"
        style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
      />
    {:else}
      <Textfield
        bind:value={newPassword}
        variant="outlined"
        style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
        type="password"
      />
    {/if}
  </div>
  <div
    style={"margin-top: 1.2rem;color: var(--font);display: flex; flex-direction: column;align-items: start;width: 400px;"}
  >
    <FormField>
      <Checkbox
        bind:showNewPassChecked
        on:click={() => (showNewPassChecked = !showNewPassChecked)}
      />
      <span slot="label">Show New Password</span>
    </FormField>
  </div>

  <Button
    variant="unelevated"
    on:click={() => {
      handleSubmit();
    }}
    style="margin-top: 1.2rem;"
  >
    <Icon class="material-icons">check</Icon>
    <Label>Save New Password</Label>
  </Button>
</div>
