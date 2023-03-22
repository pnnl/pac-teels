<style lang="scss">
  @import "../theme";
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
    white-space: nowrap;
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

  @media screen and (max-width: $smallest) {
    .title {
      font-size: 1.5rem !important;
    }
    .right {
      margin-right: 0.5vw;
    }
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
  import FeedbackModal from "./FeedbackModal/FeedbackModal.svelte";
  import MediaQuery from "components/MediaQuery.svelte";
  import themeStyle from "../theme.scss";
  import { featureFlags } from "constants/featureFlags";

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

  let feedbackOpen = false;
  let feedbackClose = (e: CustomEvent<{ action: string }>) => {
    feedbackOpen = false;
  };

  let responsiveActionMenuOpen = false;

  let menu: MenuComponentDev;
  let anchor: HTMLDivElement;
  let anchorClasses: { [k: string]: boolean } = { right: true };

  let responsiveMenu: MenuComponentDev;
  let responsiveAnchor: HTMLDivElement;
  let responsiveAnchorClasses: { [k: string]: boolean } = { right: true };

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
  <span class="nav-menu-wrapper ">
    <slot />
  </span>
  {#if adminPage}
    <h1
      style={"margin-left: 3rem; font-weight: 400; font-size: 32px; color: var(--lightBlue); white-space: nowrap;"}
    >
      PAC Database
    </h1>
    <MediaQuery query={`(min-width: ${themeStyle.smallest})`} let:matches>
      {#if matches}
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
    </MediaQuery>
  {/if}
  {#if !adminPage}
    <MediaQuery query={`(max-width: ${themeStyle.smallest})`} let:matches>
      {#if matches}
        <div class="right">
          <!-- <Button on:click={() => window.alert("Not Implemented")}>
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
          </Button> -->
          <div
            class={Object.keys(responsiveAnchorClasses).join(" ")}
            use:Anchor={{
              addClass: className => {
                if (!responsiveAnchorClasses[className]) {
                  responsiveAnchorClasses[className] = true;
                }
              },
              removeClass: className => {
                if (responsiveAnchorClasses[className]) {
                  delete responsiveAnchorClasses[className];
                  responsiveAnchorClasses = responsiveAnchorClasses;
                }
              }
            }}
            bind:this={responsiveAnchor}
          >
            <Button
              on:click={() => {
                responsiveMenu.setOpen(!responsiveActionMenuOpen);
              }}
            >
              <Icon class="material-icons">menu</Icon>
            </Button>
            <Menu
              bind:this={responsiveMenu}
              anchor={false}
              bind:anchorElement={responsiveAnchor}
              anchorCorner="BOTTOM_LEFT"
            >
              <List>
                {#if featureFlags.feedback === true}
                  <Item on:click={() => window.alert("Not Implemented")}>
                    <Text>Send Feedback</Text>
                  </Item>
                {/if}
                <Item
                  on:click={() => {
                    loginOpen = !loginOpen;
                  }}
                >
                  <Text>Admin Login</Text>
                </Item>
              </List>
            </Menu>
          </div>
        </div>
      {/if}
    </MediaQuery>
    <MediaQuery query={`(min-width: ${themeStyle.smallest})`} let:matches>
      {#if matches}
        <div class="right">
          {#if featureFlags.feedback === true}
            <Button on:click={() => window.alert("Not Implemented")}>
              <Icon class="material-icons">feedback</Icon>
              <Label>send feedback</Label>
            </Button>
          {/if}

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
    </MediaQuery>
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
<MediaQuery query={`(max-width: ${themeStyle.smallest})`} let:matches>
  {#if matches}
    <div class="tabbar">
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
    </div>
  {/if}
</MediaQuery>
<LoginModal open={loginOpen} {closeHandler} setAdminPage={val => (adminPage = val)} />
{#if feedbackOpen}
  <FeedbackModal
    open={feedbackOpen}
    {feedbackClose}
    on:close={() => (feedbackOpen = false)}
  />
{/if}
