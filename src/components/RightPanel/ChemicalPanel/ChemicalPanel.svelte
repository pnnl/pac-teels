<style>
  .scrollable-area {
    overflow-y: auto;
    padding: 0 2rem;
    height: calc(100% - 10rem);
  }
  .scrollable-area::-webkit-scrollbar {
    width: 0.38rem;
    border-radius: 5rem;
    display: block;
  }

  .scrollable-area::-webkit-scrollbar-thumb {
    background: #70768e;
    border-radius: 5rem;
  }

  .panel-header {
    padding-bottom: 1rem;
    padding: 0 2rem;
  }
  .pac-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    margin: 0.5rem 0;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
  .unit {
    margin-left: 0.5rem;
  }
  .radio-item {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0.5rem;
  }
  h2 {
    font-weight: 400;
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
</style>

<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import Button, { Icon, Label } from "@smui/button";
  import FormField from "@smui/form-field";
  import App from "../../../App.svelte";
  import Radio from "@smui/radio";
  import HealthCodes from "./HealthCodes/HealthCodes.svelte";
  import ChemicalIdentity from "./ChemicalIdentity/ChemicalIdentity.svelte";
  import PhysicalProperties from "./PhysicalProperties/PhysicalProperties.svelte";
  import { UNIT_OPTIONS } from "constants/constants";

  let currentUnit = "mgm3";
  let calculation = 1.232;
</script>

<div class="panel-header">
  <h2>Stubbed Name</h2>
  <Button on:click={() => window.alert("Not Implemented")}>
    <Icon class="material-icons">open_in_new</Icon>
    <Label>open in new tab</Label>
  </Button>
  <Button on:click={() => window.alert("Not Implemented")}>
    <Icon class="material-icons">history</Icon>
    <Label>view in history</Label>
  </Button>
</div>
<div class="scrollable-area">
  <h4>Protective Action Criteria Values</h4>
  <div class="body-caption">Unit</div>
  <FormField>
    {#each UNIT_OPTIONS as option}
      <div class="radio-item">
        <Radio bind:group={currentUnit} value={option} />
        <span class="label">{option}</span>
      </div>
    {/each}
  </FormField>
  <div class="body-caption">PAC-1</div>
  <div class="pac-item">
    <h3>{calculation}<span class="unit">{currentUnit}</span></h3>
    <div class="caption">Corresponds to 60-minute AEGL values</div>
  </div>

  <div class="body-caption">PAC-2</div>

  <div class="pac-item">
    <h3>{calculation} {currentUnit}</h3>
    <div class="caption">Corresponds to 60-minute AEGL values</div>
  </div>

  <div class="body-caption">PAC-3</div>

  <div class="pac-item">
    <h3>{calculation} {currentUnit}</h3>
    <div class="caption">Corresponds to 60-minute AEGL values</div>
  </div>

  <FormField />

  <div class="divider" />
  <ChemicalIdentity />
  <div class="divider" />

  <HealthCodes />
  <div class="divider" />
  <PhysicalProperties />
</div>