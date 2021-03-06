<style>
  .header {
    width: 100%;
    height: 4rem;
    box-shadow: none;
    display: flex;
    align-items: center;
    z-index: 11;
    top: 0;
    left: 0;
    color: var(--blue);
    background-color: var(--white);
  }

  .header.account-details {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07), 0px 4px 5px rgba(0, 0, 0, 0.06),
      0px 1px 10px rgba(0, 0, 0, 0.1);
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-left: 2rem;
    cursor: pointer;
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
    height: 4rem;
    display: inline-flex;
    margin-top: 0.25rem;
    align-items: center;
    margin-left: auto;
    margin-right: 2rem;
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
  import type { MenuComponentDev } from "@smui/menu";
  import Menu from "@smui/menu";
  import { Anchor } from "@smui/menu-surface";
  import List, { Item, Separator, Text } from "@smui/list";
  import Button, { Icon, Label } from "@smui/button";
  import LoginModal from "./LoginModal.svelte";
  import Tab from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import { push, pop, replace } from "svelte-spa-router";
  import { user } from "stores/stores";

  export let title = "";
  export let hasLogo = false;
  export let logo: any = undefined;
  export let logoLabel: any = undefined;
  export let adminPage;
  export let location;

  let tabs = [
    {
      id: "chemicalDatabase",
      name: "Chemical Database",
      path: `${process.env.SVELTE_APP_BASEURL}/#/admin/chemicalDatabase`
    },
    {
      id: "userManagement",
      name: "User Management",
      path: `${process.env.SVELTE_APP_BASEURL}/#/admin/userManagement`
    },
    {
      id: "changeLog",
      name: "Change Log",
      path: `${process.env.SVELTE_APP_BASEURL}/#/admin/changeLog`
    }
  ];

  let active = tabs[0];

  let userName = "";

  let loginOpen = false;
  let closeHandler = (e: CustomEvent<{ action: string }>) => {
    loginOpen = false;
  };

  let userMenuOpen = false;
  let closeUserHandler = (e: CustomEvent<{ action: string }>) => {
    userMenuOpen = false;
  };
  let menu: MenuComponentDev;
  let anchor: HTMLDivElement;
  let anchorClasses: { [k: string]: boolean } = { right: true };

  user.subscribe(currUser => {
    if (currUser && currUser.challengeParam) {
      userName = currUser.challengeParam.userAttributes.email;
    } else if (currUser && currUser.attributes) {
      // Fully logged in user
      userName = currUser.attributes.email;
    }
  });
</script>

<div class={location.includes("accountDetails") ? "header account-details" : "header"}>
  {#if hasLogo}
    <div class="logo-wrapper" on:click={() => push("/")}>
      <img src={logo} class="nav-left-logo" alt={logoLabel} />
      <h1 class="title " class:with-logo={hasLogo === true}>{title}</h1>
    </div>
  {/if}
  <span class="nav-menu-wrapper ">
    <slot />
  </span>
  {#if adminPage}
    <h1
      style={"margin-left: 3rem; font-weight: 400; font-size: 32px; color: var(--lightBlue)"}
    >
      PAC Database
    </h1>
    <TabBar {tabs} let:tab bind:active style={"width: unset; margin-left: auto;"}>
      <!-- Note: the `tab` property is required! -->
      <Tab
        {tab}
        on:click={() => {
          return (active = tab);
        }}
        href={tab.path}
      >
        <Label>{tab.name}</Label>
      </Tab>
    </TabBar>
  {/if}
  {#if !adminPage}
    <div class="right">
      <Button on:click={() => window.alert("Not Implemented")}>
        <Icon class="material-icons">feedback</Icon>
        <Label>send feedback</Label>
      </Button>
      <Button
        on:click={() => {
          loginOpen = !loginOpen;
        }}
      >
        <Icon class="material-icons">login</Icon>
        <Label>Admin Login</Label>
      </Button>
    </div>
  {/if}
  {#if adminPage}
    <div
      class={Object.keys(anchorClasses).join(" ")}
      use:Anchor={{
        addClass: className => {
          if (!anchorClasses[className]) {
            anchorClasses[className] = true;
          }
        },
        removeClass: className => {
          if (anchorClasses[className]) {
            delete anchorClasses[className];
            anchorClasses = anchorClasses;
          }
        }
      }}
      bind:this={anchor}
    >
      <Button on:click={() => menu.setOpen(!userMenuOpen)}>
        <Icon class="material-icons">account_circle</Icon>
        <Label>{userName}</Label>
      </Button>
      <Menu
        bind:this={menu}
        anchor={false}
        bind:anchorElement={anchor}
        anchorCorner="BOTTOM_LEFT"
      >
        <List>
          <Item on:click={() => push("/admin/accountDetails")}>
            <Text>Account Details</Text>
          </Item>
          <Item
            on:click={() => {
              //We want to delete the entirety of the user session when we "Log Out", so set the stored user to undefined
              user.update(currUser => undefined);
              push("/");
            }}
          >
            <Text>Log Out</Text>
          </Item>
        </List>
      </Menu>
    </div>
  {/if}
</div>
<LoginModal open={loginOpen} {closeHandler} setAdminPage={val => (adminPage = val)} />
