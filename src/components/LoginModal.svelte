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
  import { push, pop, replace } from "svelte-spa-router";

  export let open;
  export let closeHandler;
  export let setAdminPage;

  let email = "";
  let password = "";
  let showPassChecked = false;
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
      <Title id="fullscreen-title" style={"flex: 1;"}>Admin Login</Title>
    </Header>
    <Content id="fullscreen-content" style={"display: flex; flex-direction: column;"}>
      <div style={"margin-top: 1rem; color: var(--font);"}>
        <div style={"font-size: 14px; line-height: 21px; font-weight: 500;"}>Email</div>
        <Textfield
          bind:value={email}
          variant="outlined"
          style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
        />
      </div>
      <div style={"margin-top: 1rem;color: var(--font);"}>
        <div style={"font-size: 14px; line-height: 21px; font-weight: 500;"}>
          Password
        </div>
        <Textfield
          bind:value={password}
          variant="outlined"
          style={"width: -webkit-fill-available; height: var(--mdc-outlined-button-container-height, 36px);"}
          type={showPassChecked ? "text" : "password"}
        />
      </div>
      <div style={"margin-top: 1rem;color: var(--font);"}>
        <FormField>
          <Checkbox
            bind:showPassChecked
            on:click={() => (showPassChecked = !showPassChecked)}
          />
          <span slot="label">Show Password</span>
        </FormField>
      </div>
    </Content>
    <Actions>
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
          push("/admin/chemicalDatabase");
          setAdminPage(true);
        }}
      >
        <Label>Log In</Label>
        <Icon class="material-icons">arrow_forward</Icon>
      </Button>
    </Actions>
  </div>
</Dialog>
