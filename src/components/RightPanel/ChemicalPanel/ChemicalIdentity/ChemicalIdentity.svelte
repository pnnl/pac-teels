<style>
  .chemical-identity-container {
    min-height: 10rem;
  }
  .chemical-identity-container.expanded {
    height: max-content;
  }
  .chemical-identity-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
  .synonym-body {
    width: 28rem;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-indent: -2rem;
    padding-left: 2rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .synonym-body.expanded {
    height: fit-content;
    width: 28rem;
    overflow: visible;
    text-overflow: inherit;
    display: flex;
    text-indent: 0;
    padding-left: 0;
  }
  .synonym-button-container {
    display: flex;
    flex-direction: row-reverse;
    margin: 1rem;
    margin-right: 0;
  }
</style>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import Button, { Icon, Label } from "@smui/button";
  import { CHEMICAL_IDENTITY } from "constants/constants";
  import { selectedChemical } from "stores/stores";
  import { featureFlags } from "constants/featureFlags";

  let currentChemical;
  let unNumber;
  let expanded = false;

  selectedChemical.subscribe(currChemical => {
    if (currChemical) {
      currentChemical = currChemical;
    }
  });

  $: {
    if (currentChemical.UN_Number === "<BR>") {
      unNumber = "N/A";
    } else {
      unNumber = currentChemical.UN_Number;
    }
  }
</script>

<div class="chemical-identity-container" class:expanded>
  <h4>Chemical Identity</h4>

  <div class="chemical-identity-item">
    <div class="body-caption">CAS Number</div>
    <div class="body-semibold">{currentChemical.CAS_Number || "N/A"}</div>
  </div>

  <div class="chemical-identity-item">
    <div class="body-caption">Chemical Formula</div>
    <div class="body-semibold">{currentChemical.Chemical_Formula || "N/A"}</div>
  </div>

  <div class="chemical-identity-item">
    <div class="body-caption">UN Number</div>
    <div class="body-semibold">{unNumber || "N/A"}</div>
  </div>
  {#if featureFlags.synonyms}
    <div class="chemical-identity-item">
      <div class="body-caption">Synonyms</div>
      <div class="body-semibold synonym-body" class:expanded>
        {CHEMICAL_IDENTITY.Synonyms}
      </div>
    </div>
  {/if}
</div>
{#if featureFlags.synonyms}
  <div class="synonym-button-container">
    <Button on:click={() => (expanded = !expanded)}
      >{expanded === false ? "View All Synonyms" : "Collapse Synonyms"}</Button
    >
  </div>
{/if}
