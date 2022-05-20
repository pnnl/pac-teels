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
  import { chemicals } from "stores/stores";

  let rightPanelOpened = false;
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
    chemicals.update(currData => data);
    return data;
  })();
</script>

{#if rightPanelOpened}
  <RightPanel on:close={() => (rightPanelOpened = !rightPanelOpened)} />
{/if}

<div class="content">
  <div class="title">
    <h1>PAC Database</h1>
    <div class="version">Rev. 29A, June 2018</div>
  </div>
  {#await fetchChemicals}
    <SearchDropdown
      style={"width:75rem;"}
      items={STUBBED_HOMEPAGE_ITEMS}
      placeholder={"Search chemicals"}
      itemsLoading={true}
    />
  {:then}
    <SearchDropdown
      style={"width:75rem;"}
      items={STUBBED_HOMEPAGE_ITEMS}
      placeholder={"Search chemicals"}
    />
  {/await}

  <div class="label">
    Search by CAS number, chemical name, chemical formula, or UN number
  </div>

  <div on:click={() => (rightPanelOpened = !rightPanelOpened)}>
    <h4>Suggestion</h4>
    <ItemSearches
      style={"width:75rem;"}
      caption={"Your Recently Viewed"}
      items={STUBBED_HOMEPAGE_ITEMS}
    />
  </div>
</div>
