<style>
  .physical-property {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
</style>

<script lang="ts">
  import { PHYSICAL_PROPERTY_MAP } from "constants/constants";
  import { selectedChemical } from "stores/stores";
  let currentChemical;
  let physicalProperties = new Map();
  selectedChemical.subscribe(currChemical => {
    if (currChemical) {
      currentChemical = currChemical;
    }
  });

  $: {
    let localPropertyMap = new Map();
    for (const [key, property] of PHYSICAL_PROPERTY_MAP) {
      if (currentChemical[key] !== "" && currentChemical[key] !== null) {
        let value = currentChemical[key];
        localPropertyMap.set(key, { property, value });
      }
    }
    physicalProperties = localPropertyMap;
  }
</script>

<div class="physical-property-container">
  <h4>Physical Properties</h4>
  {#each [...physicalProperties] as [key, { property, value }]}
    <div class="physical-property">
      <div class="body-caption">{property}</div>
      <div class="body-semibold">{value}</div>
    </div>
  {/each}
</div>
