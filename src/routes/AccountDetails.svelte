<style>
</style>

<script>
  import IconButton from "@smui/icon-button";
  import Button, { Label, Icon } from "@smui/button";
  import { push, pop, replace } from "svelte-spa-router";
  import Textfield from "@smui/textfield";
  import { currPass, user } from "../stores/stores";

  let email = "";
  let password = "";

  user.subscribe(currUser => {
    if (currUser && currUser.attributes) {
      email = currUser.attributes.email;
    }
  });
  currPass.subscribe(currPassword => {
    if (currPassword) {
      password = currPassword;
    }
  });
</script>

<div
  style="padding: 3rem 5rem;display: flex;flex-direction: column;width: -webkit-fill-available;align-items: start;"
>
  <Button
    on:click={() => {
      push("/admin/chemicalDatabase");
    }}
  >
    <Icon class="material-icons">arrow_backward</Icon>
    <Label>Back</Label>
  </Button>
  <div
    style="font-weight: 400; font-size: 32px; color: var(--blackFont); padding: 1.2rem 0rem;"
  >
    Account Details
  </div>
  <div style="display: flex; padding: 1.2rem 0rem;">
    <Textfield
      bind:value={email}
      variant="outlined"
      style={"width: 400px; height: var(--mdc-outlined-button-container-height, 36px); margin-right: 1rem;"}
      disabled
    />
    <Button
      on:click={() => {
        push("/admin/accountDetails/changeEmail");
      }}
    >
      <Label>Change Email</Label>
    </Button>
  </div>
  <div style="display: flex; padding: 1.2rem 0rem;">
    <Textfield
      bind:value={password}
      variant="outlined"
      style={"width: 400px; height: var(--mdc-outlined-button-container-height, 36px); margin-right: 1rem;"}
      disabled
      type="password"
    />
    <Button
      on:click={() => {
        push("/admin/accountDetails/changePassword");
      }}
    >
      <Label>Change Password</Label>
    </Button>
  </div>
</div>
