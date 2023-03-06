<style>
  .search-bar {
    margin: 0;
    box-sizing: border-box;
    height: 2.5rem;
    background-color: var(--white);
    border: none;
    padding: 0 1rem;
    font-size: 1rem;
    width: 100%;
    color: var(--font);
  }

  .search-icon {
    margin-left: 1rem;
    color: var(--lightgrey);
    background-color: var(--white);
    font-size: 1.25rem;
    user-select: none;
  }

  .search-bar::placeholder {
    color: var(--placeholder);
  }

  .search-bar:focus {
    outline: 0;
  }

  .search-bar-wrapper {
    width: 18.75rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 0.0625rem solid #bababa;
    background-color: var(--white);
    border-radius: 0.25rem;
    transition-property: box-shadow, border-color;
    transition-duration: 200ms;
    transition-timing-function: ease;
  }

  .search-bar-wrapper:focus-within {
    border: 0.0625rem solid var(--blue);
  }

  .search-drop-down {
    position: absolute;
    border: 1px solid var(--blue);
    border-radius: 4px;
    padding: 8px 0px 8px 0px;
    background-color: var(--white);
    margin-top: 0.5rem;
  }

  .search-bar-full-wrapper {
    position: relative;
    z-index: 12;
  }

  .search-item {
    padding: 12px 20px;
    cursor: pointer;
  }

  .search-item:hover {
    background-color: rgba(69, 112, 225, 0.1);
  }

  .full-cover {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.7);
    top: 0;
    left: 0;
    z-index: 11;
  }

  .item-label {
    font-size: 12px;
    font-weight: 400;
    padding: 12px 16px;
    color: var(--caption);
  }
</style>

<script lang="ts">
  import CircularProgress from "@smui/circular-progress";
  import { Icon } from "@smui/button";
  import { selectedChemical, rightPanelOpened, recentlyViewed } from "stores/stores";

  export let placeholder;
  export let searchBarFilter = "";
  export let style;
  export let items;
  export let itemsLoading = false;

  let searchDropDownVisible;
  let filteredItems: any = new Map();

  const handleFilterBySearch = (e: any) => {
    if (searchBarFilter === "") {
      searchDropDownVisible = false;
    } else {
      searchDropDownVisible = true;
    }
    filteredItems = new Map();
    const foundCas = items.filter(
      currItem =>
        currItem.CAS_Number &&
        currItem.CAS_Number.toLowerCase()
          .trim()
          .includes(searchBarFilter.toLowerCase().trim())
    );
    const foundName = items.filter(
      currItem =>
        currItem.Chemical_Name &&
        currItem.Chemical_Name.toLowerCase().trim().includes(searchBarFilter.toLowerCase().trim())
    );
    const foundFormula = items.filter(
      currItem =>
        currItem.Chemical_Formula &&
        currItem.Chemical_Formula.toLowerCase()
          .trim()
          .includes(searchBarFilter.toLowerCase().trim())
    );

    const foundUN_Number = items.filter(
      currItem =>
        currItem.UN_Number &&
        currItem.UN_Number.toLowerCase()
          .trim()
          .includes(searchBarFilter.toLowerCase().trim())
    );

    const foundID = items.filter(
      currItem =>
        currItem.Chemical_ID &&
        currItem.Chemical_ID.toLowerCase()
          .trim()
          .includes(searchBarFilter.toLowerCase().trim())
    );

    if (foundCas.length > 0) {
      filteredItems.set("foundCas", { label: "Matching CAS Number", items: foundCas });
    }
    if (foundName.length > 0) {
      filteredItems.set("foundName", {
        label: "Matching Chemical Name",
        items: foundName
      });
    }
    if (foundFormula.length > 0) {
      filteredItems.set("foundFormula", {
        label: "Matching Chemical Formula",
        items: foundFormula
      });
    }
    if (foundUN_Number.length > 0) {
      filteredItems.set("foundUN_Number", {
        label: "Matching UN Number",
        items: foundUN_Number
      });
    }
    if (foundID.length > 0) {
      filteredItems.set("foundID", { label: "Matching ID", items: foundID });
    }
    if (filteredItems.size === 0) {
      filteredItems.set("noneFound", { label: "No Matches" });
    }
  };

  const handleSearchItemSelect = item => {
    //Here we need to save the selected item to state and open the right panel
    selectedChemical.update(currSelectedChem => item);
    rightPanelOpened.update(currOpened => true);

    //Save the selected item to recently viewed (this saves to local storage)
    recentlyViewed.update(currRecentlyViewed => {
      const currViewed: any =
        currRecentlyViewed && currRecentlyViewed.size > 0
          ? currRecentlyViewed
          : new Map();

      //Remove it if it exists, keep first in the list
      if (currViewed.has(item.Chemical_ID)) {
        currViewed.delete(item.Chemical_ID);
      }
      currViewed.set(item.Chemical_ID, item);
      //If there are more than 5 items in the recently viewed, remove the last one
      if (currViewed.size > 5) {
        const arr: any = Array.from(currViewed);
        const lastKeyInMap: any = arr[currViewed.size - 1][0];
        currViewed.delete(lastKeyInMap);
      }
      return currViewed;
    });
    searchDropDownVisible = false;
  };
</script>

{#if searchDropDownVisible}
  <div class="full-cover" />
{/if}
<div class="search-bar-full-wrapper">
  <div class="search-bar-wrapper" {style}>
    <i class="search-icon material-icons">search</i>
    <input
      class="search-bar"
      {placeholder}
      bind:value={searchBarFilter}
      on:input={handleFilterBySearch}
    />
    {#if itemsLoading}
      <CircularProgress
        style="height: 1rem; width: 1rem; margin-right: 16px;"
        indeterminate
      />
    {/if}
    {#if searchDropDownVisible}
      <Icon
        class="material-icons"
        style="cursor: pointer; color: var(--blue); width: 1rem;font-size: 1.5rem; margin-right: 1rem;"
        on:click={() => {
          searchDropDownVisible = false;
          searchBarFilter = "";
        }}>close</Icon
      >
    {/if}
  </div>
  {#if searchDropDownVisible}
    <div class="search-drop-down" {style}>
      {#each [...filteredItems] as [key, value]}
        {#if value.Chemical_Name}
          <div class="item-label">{value.Chemical_Name}</div>
        {/if}
        {#if value.items}
          {#each value.items as item}
            <div class="search-item" on:click={() => handleSearchItemSelect(item)}>
              {item.Chemical_Name}
            </div>
          {/each}
        {/if}
      {/each}
    </div>
  {/if}
</div>
