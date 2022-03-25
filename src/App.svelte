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
  import Definitions from "./components/Definitions.svelte";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import "@smui/tab/bare.css";
  import "@smui/tab-bar/bare.css";
  import "@smui/button/bare.css";
  let active = "Home";
  const store = writable([]);
  $store.length; // incorrect no-unsafe-member-access error
  export let title: string;
</script>

<Header title={"PACTEEL"} hasLogo={false} />
<main>
  <div>
    <!--
      Note: tabs must be unique. (They cannot === each other.)
    -->
    <TabBar tabs={["Home", "PAC Definitions", "Search PAC Database"]} let:tab bind:active>
      <!-- Note: the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>

    <h1>Welcome to {title}</h1>
  </div>
</main>
