<style lang="scss">
  @import "../theme";
  .content {
    margin: 1rem;
    width: -webkit-fill-available;
    display: flex;
    color: var(--font);
    flex-direction: column;
    text-align: left;
    justify-self: top;
    align-self: top;
    align-items: center;
    align-content: center;
  }
  .title {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-end;
    margin: 8vh 1rem 1vh 1rem;
    letter-spacing: -0.02em;
  }

  .siteDescription{
    margin: 0vh 1rem 12vh 1rem;
    max-width: 75rem; margin-right: auto; margin-left: auto; width: -webkit-fill-available;
    text-align:center;
    color: dark-gray;
    font-size: 1rem;
  }

  h1 {
    font-weight: 300;
    font-size: 4rem;
    margin: 0;
    color: var(--blue);
  }
  .version {
    font-weight: 400;
    font-size: 1.25rem;
    color: var(--caption);
    margin-bottom: 0.7rem;
  }
  .label {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  h4 {
    margin-top: 5rem;
  }
  @media screen and (max-width: $smallest) {
    .title {
      display: flex;
      flex-direction: column;
      margin: 4vh 1rem 8vh 1rem;
    }
    .siteTitle {
      font-size: 2.5rem;
    }
  }
  .icon {
    color: var(--blue);
  }
  .icon.cancel {
    color: var(--red);
  }

  .email-notification {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;
  }

  .snackbar-button-container {
    height: 2.5rem;
  }
</style>

<script lang="ts">
  import SearchDropdown from "components/SearchDropdown.svelte";
  import ItemSearches from "components/ItemSearches.svelte";
  import RightPanel from "components/RightPanel/RightPanel.svelte";
  import { STUBBED_HOMEPAGE_ITEMS } from "constants/constants";
  import { listPACTEELDatabases } from "graphql/queries";
  import { chemicals, rightPanelOpened, recentlyViewed } from "stores/stores";
  import { CircularProgressComponentDev } from "@smui/circular-progress";
  import Snackbar, { Actions, SnackbarComponentDev } from "@smui/snackbar";
  import { dataset_dev } from "svelte/internal";

  let rightPanelOpenedLocal = false;
  let recentlyViewedLocal;

  let snackbar: SnackbarComponentDev;
  let snackBarIcon;
  let reason = "nothing yet";
  let action = "nothing yet";
  let snackbarUser = "first.lastname@email.gov";
  let snackbarChemical = "Chemical";
  let snackbarText;
  //   let snackButtonText="";

  const handleEmailNotification = e => {
    /**TODO add check for if email fails to update, hook to backend when ready*/
    action = e.detail?.action;
    snackbarChemical = e.detail?.chemical;
    if (action === "Submitted") {
      /**logic*/
      snackbarText = "will receive email updates for";
      snackBarIcon = "check_circle";
      snackbarUser = e.detail?.email;
    }
    if (action === "Unsubscribe") {
      snackbarText = "will no longer receive email updates for";
      snackBarIcon = "cancel";
    }

    snackbar.open();
  };

  const fetchChemicals = (async () => {
    var nextToken = null;
    var dataFull = [];
    do {
      const httpOptions: any = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Api-Key": process.env.APPSYNC_APIKEY
        },
        body: JSON.stringify({
          query: listPACTEELDatabases,
          variables: {
            filter: {version: {eq: 0}},
            limit: 4000,
            nextToken: nextToken
          }
        })
      };
      const response = await fetch(`${process.env.GRAPHQL_ENDPOINT}`, httpOptions);
      const data = await response.json();
      console.log(data);
      if (
        data &&
        data.data &&
        data.data.listPACTEELDatabases &&
        data.data.listPACTEELDatabases.items
      ) {
        dataFull = dataFull.concat(data.data.listPACTEELDatabases.items);
      }
      nextToken = data.data.listPACTEELDatabases.nextToken;
    } while (nextToken != null);
    if (dataFull) {
      chemicals.update(currData => dataFull);
    }
    return dataFull;
  })();

  let localChemicals = [];
  let mostRecentUpdateDate = new Date("2000-01-01");
  let date = "Thu September 28, 2023";
  $: {
    chemicals.subscribe(currChemicals => {
      if (currChemicals) {
        localChemicals = currChemicals;
      }
    });

    localChemicals.forEach(item => {
      let localDate = new Date(item["Date"]);
      if (localDate > mostRecentUpdateDate) {
        mostRecentUpdateDate = localDate;
      }
    });

    //date = mostRecentUpdateDate.toDateString();
  }

  rightPanelOpened.subscribe(currRightPanelOpened => {
    rightPanelOpenedLocal = currRightPanelOpened;
  });
  recentlyViewed.subscribe(currRecentlyViewed => {
    if (currRecentlyViewed && currRecentlyViewed.size > 0) {
      recentlyViewedLocal = currRecentlyViewed;
    }
  });
</script>

{#if rightPanelOpenedLocal}
  <RightPanel
    on:submitEmail={handleEmailNotification}
    on:unsubscribe={handleEmailNotification}
    on:close={() => {
      rightPanelOpened.update(currOpen => !currOpen);
    }}
  />
{/if}

<div class="content">
  <div class="title">
    <h1 class="siteTitle">PAC Database</h1>
    {#await fetchChemicals then result}
      <div class="version">Last Revised: {date}</div>
    {/await}
  </div>
  <div class="siteDescription">Protective Action Criteria (PACs) are levels of chemical materials above which could threaten or endanger the health and safety of workers or the public. As used throughout this website, “PAC” is a collective term for the various chemical limits, including AEGL, ERPG, and TEEL values. A majority of the chemicals in this database will have TEEL values. As we update the chemical TEEL values, we are adding a field for ‘Technical Justification’ that will provide the technical basis for determining the TEEL values or state if the PAC values are based on 60-min. AEGLs or ERPGs. In the interim, unless the values specifically state that they are AEGLs or ERPGs, they should be considered TEELs. </div>
  <div
    style="max-width: 75rem; margin-right: auto; margin-left: auto; width: -webkit-fill-available;"
  >
    {#await fetchChemicals}
      <SearchDropdown items={[]} placeholder={"Search chemicals"} itemsLoading={true} />
    {:then data}
      <SearchDropdown items={data} placeholder={"Search chemicals"} />
    {/await}

    <div class="label">
      Search by CAS number, chemical name, chemical formula, or UN number
    </div>
    {#if recentlyViewedLocal}
      <div style="width: -webkit-fill-available;">
        <h4>Your Recently Viewed</h4>
        <ItemSearches
          style={"width:75rem;cursor: pointer;"}
          caption={""}
          items={recentlyViewedLocal}
        />
      </div>
    {/if}
  </div>
</div>

<Snackbar
  leading
  bind:this={snackbar}
  on:SMUISnackbar:closed={e => {
    reason = e.detail.reason ?? "undefined";
  }}
>
  <div class="email-notification">
    <span class="icon material-icons" class:cancel={action === "Unsubscribe"}
      >{snackBarIcon}</span
    >
    <b>{snackbarUser}</b>
    {snackbarText} <b>{snackbarChemical}</b>
    <div class="snackbar-button-container">
      <!-- {#if snackButtonText.length > 0}
       <Button>{snackButtonText}</Button>
       {/if} -->
    </div>
  </div>
</Snackbar>
