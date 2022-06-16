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

  selectedChemical.subscribe(currChemical => {
    if (currChemical) {
      currentChemical = currChemical;
    }
  });
</script>

<div class="physical-property-container">
  <h4>Physical Properties</h4>
  {#each [...PHYSICAL_PROPERTY_MAP] as [key, { property, value }]}
    <div class="physical-property">
      <div class="body-caption">{property}</div>
      <div class="body-semibold">{value}</div>
    </div>
  {/each}
</div>
