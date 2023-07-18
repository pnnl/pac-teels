<style>
  main {
    text-align: center;
    margin: 0 auto;
    width: -webkit-fill-available;
    display: flex;
  }

  .style-wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
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
  import Footer from "./components/Footer.svelte";
  import Router from "./Router.svelte";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import "./theme.scss";

  // Import all smui component css here
  // import "@smui/tab/bare.css";
  // import "@smui/tab-bar/bare.css";
  // import "@smui/button/bare.css";
  // import "@smui/dialog/bare.css";
  // import "@smui/icon-button/bare.css";
  import "../public/global.scss";

  const store = writable([]);
  $store.length; // incorrect no-unsafe-member-access error

  let logo = "assets/logo.svg";
  let tabs = [
    { id: "home", name: "Home", path: `${process.env.SVELTE_APP_BASEURL}` },
    {
      id: "pacDefinitions",
      name: "PAC Definitions",
      path: `${process.env.SVELTE_APP_BASEURL}/definitions`
    },
    {
      id: "search",
      name: "Search PAC Database",
      path: `${process.env.SVELTE_APP_BASEURL}/#/search`
    }
  ];

  let active = tabs[0];
  let location = window.location.href;
</script>

<div class=style-wrapper>
  <Header
    {logo}
    hasLogo={true}
    title={"EMI SIG"}
    adminPage={location.includes("admin")}
    {location}
  />
  <main>
    <div style="display: flex; width: -webkit-fill-available;">
      <Router
        onRouteLoaded={event => {
          location = window.location.href;
        }}
        onConditionsFailed={event => {}}
      />
    </div>
  </main>
  <Footer />
</div>