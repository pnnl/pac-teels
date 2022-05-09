<style>
</style>

<script lang="ts">
  //@ts-ignore
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import Button, { Label, Icon } from "@smui/button";
  import Textfield from "@smui/textfield";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field/src/FormField.svelte";
  import { Auth } from "aws-amplify";
  import { push, pop, replace } from "svelte-spa-router";
  import { user } from "../stores/stores";

  export let open;
  export let closeHandler;
  export let setAdminPage;

  let loginLoading = false;
  let email = "";
  let password = "";
  let showPassChecked = false;

  const handleSubmit = async () => {
    // e.preventDefault();
    loginLoading = true;

    try {
      const retrievedUser = await Auth.signIn(email, password);
      user.update(currUser => retrievedUser);
      setAdminPage(true);
      push("/admin/chemicalDatabase");
    } catch (error) {
      console.log("Login failed");
      console.log(error);
    }
    loginLoading = false;
  };
</script>

<Dialog bind:open on:SMUIDialog:closed={closeHandler}>
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
        />
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
    <Actions style="padding: 24px 20px;">
      <Button
        action="reject"
        style={"margin-right: auto;"}
        on:click={() => window.alert("Not Implemented")}
      >
        <Label>Forgot Password?</Label>
      </Button>
      <Button
        action="accept"
        variant="unelevated"
        defaultAction
        disabled={email && password ? false : true}
        on:click={() => {
          handleSubmit();
        }}
      >
        <Label>Log In</Label>
        <Icon class="material-icons">arrow_forward</Icon>
      </Button>
    </Actions>
  </div>
</Dialog>
