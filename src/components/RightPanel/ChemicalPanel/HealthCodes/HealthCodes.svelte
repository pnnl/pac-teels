<style>
  .health-code-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 2rem;
    height: 2.5rem;
  }
</style>

<script lang="ts">
  //stubbed Data
  let healthCodeNumbers = new Map([
    [
      "key1",
      {
        healthCode: 4.03,
        organ: "Eye",
        description: "acute effects other than irritation"
      }
    ],
    [
      "key2",
      {
        healthCode: 4.04,
        organ: "Nose",
        description: "acute effects other than irritation"
      }
    ],
    [
      "key3",
      {
        healthCode: 4.06,
        organ: "Brain",
        description: "acute effects other than irritation"
      }
    ],
    [
      "key4",
      {
        healthCode: 4.03,
        organ: "Heart, cardiovasular system",
        description: "acute effects"
      }
    ],
    [
      "key5",
      { healthCode: 4.02, organ: "Nervous system toxin", description: "acute effects" }
    ],
    [
      "key6",
      { healthCode: 4.08, organ: "Central nervous system", description: "acute effects" }
    ],
    [
      "key7",
      {
        healthCode: 4.01,
        organ: "Respiratory toxin",
        description: "acute effects other than severe or moderate irritation"
      }
    ],
    [
      "key8",
      {
        healthCode: 4.06,
        organ: "Respiratory irritant",
        description: "acute,severe or moderate but not mild irritant effects"
      }
    ],
    ["key9", { healthCode: 4.09, organ: "Eye irritant", description: "severe" }],
    ["key10", { healthCode: 4.09, organ: "Skin irritant", description: "severe" }]
  ]);
</script>

<div class="container">
  <h4>Health Code Numbers</h4>

  {#each [...healthCodeNumbers] as [key, { healthCode, organ, description }]}
    <div class="health-code-item">
      <div class="body-semibold">{healthCode}</div>

      <div class="body-caption">{organ} - {description}</div>
    </div>
  {/each}
</div>
