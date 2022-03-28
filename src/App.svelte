<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- App.svelte -->
<script lang="ts">
  import { writable } from "svelte/store";
  import Header from "./components/Header.svelte";
  import Router from "./Router.svelte";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import "./theme.scss";
  import "@smui/tab/bare.css";
  import "@smui/tab-bar/bare.css";
  import "@smui/button/bare.css";
  const store = writable([]);
  $store.length; // incorrect no-unsafe-member-access error

  let tabs = [
    { id: "home", name: "Home", path: `${process.env.SVELTE_APP_BASEURL}` },
    {
      id: "pacDefinitions",
      name: "PAC Definitions",
      path: `${process.env.SVELTE_APP_BASEURL}/#/definitions`
    },
    {
      id: "search",
      name: "Search PAC Database",
      path: `${process.env.SVELTE_APP_BASEURL}/#/search`
    }
  ];

  let active = tabs[0];
</script>

<Header title={"PACTEEL"} hasLogo={false} />
<main>
  <div style="width: 80rem">
    <!--
      Note: tabs must be unique. (They cannot === each other.)
    -->
    <TabBar {tabs} let:tab bind:active>
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
    <Router />
  </div>
</main>
