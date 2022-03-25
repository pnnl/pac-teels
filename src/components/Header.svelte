<style>
  .header {
    width: 100%;
    height: 4rem;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.06), 0px 3px 14px rgba(0, 0, 0, 0.06),
      0px 4px 5px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    z-index: 10;
    top: 0;
    left: 0;
    color: #ffffff;
    background-color: #1d70f3;
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
    color: #fff;
  }
  .title {
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    margin-left: 1rem;
    font-size: 2rem;
    color: #fff;
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
    color: #1d70f3;
    background: white;
  }
</style>

<script lang="ts">
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
    <button class="button primary" on:click={() => window.alert("Not Implemented")}>
      Log in
    </button>
  </div>
</div>
