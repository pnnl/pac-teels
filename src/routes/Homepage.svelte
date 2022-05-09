<style>
  .content {
    margin: 1rem;
    display: flex;
    color: var(--font);
    flex-direction: column;
    text-align: left;
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

<script>
  import SearchDropdown from "components/SearchDropdown.svelte";
  import ItemSearches from "components/ItemSearches.svelte";
  import RightPanel from "components/RightPanel/RightPanel.svelte";
  import {STUBBED_HOMEPAGE_ITEMS} from "constants/constants"
</script>

<div class="content">
  <div class="title">
    <h1>PAC Database</h1>
    <div class="version">Rev. 29A, June 2018</div>
  </div>
  <SearchDropdown
    style={"width:75rem;"}
    items={STUBBED_HOMEPAGE_ITEMS}
    placeholder={"Search chemicals"}
  />
  <div class="label">
    Search by CAS number, chemical name, chemical formula, or UN number
  </div>

  <div>
    <h4>Suggestion</h4>
    <ItemSearches
      style={"width:75rem;"}
      caption={"Your Recently Viewed"}
      items={STUBBED_HOMEPAGE_ITEMS}
    />
  </div>
  <RightPanel />
</div>
