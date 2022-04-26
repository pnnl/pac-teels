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
  // stubbed data

  let physicalPropertyMap = new Map([
    ["key1", { property: "Molecular Weight", value: 70.906 }],
    ["key2", { property: "State", value: "Gas" }],
    ["key3", { property: "Melting Point (°C)", value: "-101.5 °C" }],
    ["key4", { property: "Boiling Point (°C)", value: "-34.04 °C" }],
    ["key5", { property: "VP (°C)", value: "25 °C" }]
  ]);
</script>

<div class="physical-property-container">
  <h4>Physical Properties</h4>
  {#each [...physicalPropertyMap] as [key, { property, value }]}
    <div class="physical-property">
      <div class="body-caption">{property}</div>
      <div class="body-semibold">{value}</div>
    </div>
  {/each}
</div>
