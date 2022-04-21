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

  let logo = "assets/logo.svg";
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

<Header {logo} hasLogo={true} title={"EMI SIG"} />
<main>
  <div style="width: 80rem">
    <Router />
  </div>
</main>
