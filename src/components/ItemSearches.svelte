<style>
  .search-item {
    display: flex;
    gap: 1rem;
    color: var(--blue);
    font-weight: 400;
    height: 2.7rem;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    cursor: pointer;
  }
  .search-item:hover {
    background-color: var(--hoverBlue);
    color: var(--darkBlue);
    cursor: pointer;
  }
  .searched-name {
    max-width: 69rem;
  }
</style>

<script>
  import { rightPanelOpened, selectedChemical } from "stores/stores";

  export let caption;
  export let items;
  export let style;
</script>

<div class="caption">{caption}</div>
{#each [...items].reverse() as [key, value]}
  <div
    class="search-item"
    {style}
    on:click={() => {
      selectedChemical.update(currSelectedChem => value);
      rightPanelOpened.update(currOpen => !currOpen);
    }}
  >
    <div>{key}</div>
    <div class="searched-name">{value.Chemical_Name}</div>
  </div>
{/each}
