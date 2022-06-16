<style>
  .content {
    margin: 1rem;
    width: -webkit-fill-available;
    display: flex;
    color: var(--font);
    flex-direction: column;
    text-align: left;
    justify-self: center;
    align-self: center;
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
    margin: 5rem 1rem 10rem 1rem;
    letter-spacing: -0.02em;
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
</style>

<script lang="ts">
  import SearchDropdown from "components/SearchDropdown.svelte";
  import ItemSearches from "components/ItemSearches.svelte";
  import RightPanel from "components/RightPanel/RightPanel.svelte";
  import { STUBBED_HOMEPAGE_ITEMS } from "constants/constants";
  import { listChemicals } from "graphql/queries";
  import { chemicals, rightPanelOpened, recentlyViewed } from "stores/stores";
  import { CircularProgressComponentDev } from "@smui/circular-progress";

  let rightPanelOpenedLocal = false;
  let recentlyViewedLocal;
  const fetchChemicals = (async () => {
    const httpOptions: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Api-Key": process.env.APPSYNC_APIKEY
      },
      body: JSON.stringify({
        query: listChemicals
      })
    };
    const response = await fetch(`${process.env.GRAPHQL_ENDPOINT}`, httpOptions);
    const data = await response.json();
    if (data && data.data && data.data.listChemicals && data.data.listChemicals.items) {
      chemicals.update(currData => data.data.listChemicals.items);
      return data.data.listChemicals.items;
    } else {
      return [];
    }
  })();

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
    on:close={() => {
      rightPanelOpened.update(currOpen => !currOpen);
    }}
  />
{/if}

<div class="content">
  <div class="title">
    <h1>PAC Database</h1>
    <div class="version">Rev. 29A, June 2018</div>
  </div>
  <div>
    {#await fetchChemicals}
      <SearchDropdown
        style={"width:75rem;"}
        items={[]}
        placeholder={"Search chemicals"}
        itemsLoading={true}
      />
    {:then data}
      <SearchDropdown
        style={"width:75rem;"}
        items={data}
        placeholder={"Search chemicals"}
      />
    {/await}

    <div class="label">
      Search by CAS number, chemical name, chemical formula, or UN number
    </div>
  </div>

  {#if recentlyViewedLocal}
    <div>
      <h4>Suggestion</h4>
      <ItemSearches
        style={"width:75rem;cursor: pointer;"}
        caption={"Your Recently Viewed"}
        items={recentlyViewedLocal}
      />
    </div>
  {/if}
</div>
