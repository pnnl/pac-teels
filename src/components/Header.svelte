<style>
  .header {
    width: 100%;
    height: 4rem;
    box-shadow: none;
    display: flex;
    align-items: center;
    z-index: 10;
    top: 0;
    left: 0;
    color: var(--blue);
    background-color: var(--white);
  }

  .header.account-details {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.06), 0px 3px 14px rgba(0, 0, 0, 0.06),
      0px 4px 5px rgba(0, 0, 0, 0.08);
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-left: 2rem;
  }

  .nav-left-logo {
    height: 2rem;
    margin-right: 0.5rem;
    color: var(--blue);
  }
  .title {
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 2rem;
    color: var(--blue);
  }
  .title.with-logo {
    margin: 0;
  }

  .nav-menu-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .right {
    position: absolute;
    right: 2rem;
    height: 4rem;
    display: inline-flex;
    margin-top: 0.25rem;
    align-items: center;
  }

  .button {
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    width: auto;
    line-height: 1.2;
    border: transparent;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: uppercase;
    height: 2.5rem;
    letter-spacing: 0.05em;
    transition-property: background-color, color, fill, stroke, opacity, box-shadow,
      transform;
    transition-duration: 200ms;
    transition-timing-function: ease;
    margin: 0;
    padding: 0 1rem;
    font-weight: 600;
    font-size: 1rem;
  }

  .primary {
    color: var(--blue);
    background: var(--white);
  }
</style>

<script lang="ts">
  import Button, { Icon, Label } from "@smui/button";
  export let title = "";
  export let hasLogo = false;
  export let logo: any = undefined;
  export let logoLabel: any = undefined;

  let name = "";
  $: {
    name = "user.name";
  }
</script>

<div class="header">
  {#if hasLogo}
    <div class="logo-wrapper">
      <img src={logo} class="nav-left-logo" alt={logoLabel} />
    </div>
  {/if}
  <h1 class="title " class:with-logo={hasLogo === true}>{title}</h1>
  <span class="nav-menu-wrapper ">
    <slot />
  </span>
  <div class="right">
    <Button on:click={() => window.alert("Not Implemented")}>
      <Icon class="material-icons">feedback</Icon>
      <Label>send feedback</Label>
    </Button>
    <Button on:click={() => window.alert("Not Implemented")}>
      <Icon class="material-icons">login</Icon>
      <Label>Admin Login</Label>
    </Button>
  </div>
</div>
