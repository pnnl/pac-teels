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
 import {HEALTH_CODE_NUMBERS} from "constants/constants"
</script>

<div class="container">
  <h4>Health Code Numbers</h4>

  {#each [...HEALTH_CODE_NUMBERS] as [key, { healthCode, organ, description }]}
    <div class="health-code-item">
      <div class="body-semibold">{healthCode}</div>

      <div class="body-caption">{organ} - {description}</div>
    </div>
  {/each}
</div>
