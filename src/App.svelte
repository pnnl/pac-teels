<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
    width: -webkit-fill-available;
    display: flex;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .icon{
    color:var(--blue)
  }

  .email-notification{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap:1rem;
    margin: 0 1rem;
}

.snackbar-button-container{
    height:2.5rem;
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
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import Snackbar, {Actions, SnackbarComponentDev} from "@smui/snackbar"
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
      path: `${process.env.SVELTE_APP_BASEURL}/#/definitions`
    },
    {
      id: "search",
      name: "Search PAC Database",
      path: `${process.env.SVELTE_APP_BASEURL}/#/search`
    }
  ];

  let active = tabs[0];
  let location = window.location.href;
  let snackbar: SnackbarComponentDev;
  let snackBarIcon;
  let reason = 'nothing yet';
  let action = 'nothing yet';
  let snackBarUser:string ="first.lastname@email.gov";
  let snackbarChemical:string ="Chemical";
//   let snackButtonText="";

  const handleEmailNotification = (e) =>{
    /**TODO add check for if email fails to update*/
    console.log("potato")
    snackBarUser = e.detail?.email
    action = e.detail?.action
    snackBarIcon = "check_circle";
    snackbar.open()
  }
</script>

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
<Snackbar leading bind:this={snackbar} on:SMUISnackbar:closed={(e)=> {reason = e.detail.reason ?? 'undefined'}}>
    <div class="email-notification">
    <span class="icon material-icons">{snackBarIcon}</span>
    <b>{snackBarUser}</b> will receive email updates for <b>{snackbarChemical}</b>
    <div class="snackbar-button-container">
        <!-- {#if snackButtonText.length > 0}
       <Button>{snackButtonText}</Button>
       {/if} -->
    </div>
    </div>
</Snackbar>