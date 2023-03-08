<style>
  .error-caption {
    color: red;
    font-size: 0.75rem;
  }
</style>

<script lang="ts">
  //@ts-ignore
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import Button, { Label, Icon } from "@smui/button";
  import Textfield, { Input } from "@smui/textfield";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field/src/FormField.svelte";
  import CircularProgress from "@smui/circular-progress";
  import { Auth } from "aws-amplify";
  import { push, pop, replace } from "svelte-spa-router";
  import { user, currPass } from "../stores/stores";
  import HelperText from "@smui/textfield/helper-text";

  export let open;
  export let closeHandler;
  export let setAdminPage;

  let loginLoading = false;

  let email = "";
  let emailInput: Input;
  let errorMessage = "";

  let password = "";
  let showPassChecked = false;

  const handleSubmit = async (e: any) => {
    loginLoading = true;

    try {
      const retrievedUser = await Auth.signIn(email, password);
      user.update(currUser => retrievedUser);
      currPass.update(currPassword => password);
      setAdminPage(true);
      // If a new password is required, first force them to reset their password.

      if (
        retrievedUser.challengeName &&
        retrievedUser.challengeName === "NEW_PASSWORD_REQUIRED"
      ) {
        Auth.completeNewPassword(
          retrievedUser, // the Cognito User Object
          password // the new password
        );
      }
      push("/admin/chemicalDatabase");
    } catch (error) {
      //@ts-ignore
      errorMessage = error?.message;
      console.log(error);
    }
    loginLoading = false;
    if (errorMessage.length === 0) {
      closeHandler(undefined);
    }
  };
</script>

<Dialog bind:open on:SMUIDialog:closed={closeHandler} style="z-index: 13;">
  <div style={"padding: 2rem; width: 30rem;"}>
    <IconButton
      action="close"
      class="material-icons"
      style={"display: flex; align-self: center; margin-left: auto; margin-bottom: 0px; "}
      size="button"
      on:click={() => closeHandler(undefined)}>close</IconButton
    >
    <Header style={"display: flex;"}>
      <Title id="fullscreen-title" style={"flex: 1; font-weight: 400; font-size: 32px;"}
        >Admin Login</Title
      >
    </Header>
    <Content id="fullscreen-content" style={"display: flex; flex-direction: column;"}>
      <div style={"margin-top: 2.2rem; color: var(--font);"}>
        <div
          style={"font-size: 14px; line-height: 21px; font-weight: 500;margin-bottom: 0.5rem;"}
        >
          Email
        </div>
        <Textfield
          bind:value={email}
          variant="outlined"
          style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
          invalid={true}
        >
          <HelperText id="helper-text-manual-a" slot="helper">Helper Text</HelperText>
        </Textfield>
      </div>
      <div style={"margin-top: 2.2rem;color: var(--font);"}>
        <div
          style={"font-size: 14px; line-height: 21px; font-weight: 500;margin-bottom: 0.5rem;"}
        >
          Password
        </div>
        <Textfield
          bind:value={password}
          variant="outlined"
          style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
          type={showPassChecked ? "text" : "password"}
        />
      </div>
      {#if errorMessage.length > 0}
        <div class="error-caption">
          {errorMessage}
        </div>
      {/if}
      <div style={"margin-top: 1.5rem;color: var(--font); margin-left: -11px;"}>
        <FormField>
          <Checkbox
            bind:showPassChecked
            on:click={() => (showPassChecked = !showPassChecked)}
          />
          <span slot="label">Show Password</span>
        </FormField>
      </div>
    </Content>

    <div style="padding: 24px 20px; display: flex;">
      <Button
        style={"margin-right: auto;"}
        on:click={() => {
          Auth.forgotPassword(email);
          closeHandler(undefined);
        }}
      >
        <Label>Forgot Password?</Label>
      </Button>
      <Button
        variant="unelevated"
        disabled={email && password && !loginLoading ? false : true}
        on:click={e => {
          handleSubmit(e);
        }}
      >
        <Label style="margin-right: 0.5rem;">Log In</Label>
        {#if !loginLoading}
          <Icon class="material-icons" style="margin-left: 0px;">arrow_forward</Icon>
        {:else}
          <CircularProgress style="height: 1rem; width: 1rem;" indeterminate />
        {/if}
      </Button>
    </div>
  </div>
</Dialog>
