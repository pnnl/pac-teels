<style>
  .scrollable-area {
    overflow-y: auto;
    padding: 0 2rem;
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
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    align-items: flex-start;
  }

  .panel-header {
    padding-bottom: 1rem;
    padding: 2rem 2rem;
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
  .center {
    text-align: center;
  }
</style>

<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import Button, { Icon, Label } from "@smui/button";
  import FormField from "@smui/form-field";
  import Radio from "@smui/radio";
  import HealthCodes from "./HealthCodes/HealthCodes.svelte";
  import ChemicalIdentity from "./ChemicalIdentity/ChemicalIdentity.svelte";
  import PhysicalProperties from "./PhysicalProperties/PhysicalProperties.svelte";
  import { UNIT_OPTIONS } from "constants/constants";
  import EmailNotification from "./EmailNotification/EmailNotification.svelte";
  import UnsubscribeModal from "./UnsubscribeModal/UnsubscribeModal.svelte";
  import { selectedChemical } from "stores/stores";
  import { featureFlags } from "constants/featureFlags";

  let calculation = 1.232;
  let showEmailNotification = false;
  let componentReference: HTMLElement;
  let currentChemical;
  let currentUnit: string = "";
  let mostRecentUpdateDate;
  let showUnsubscribe = false;
  let calculatedPACValues: any = {
    PAC1: null,
    PAC2: null,
    PAC3: null
  };
  //   TODO: update with endpoint
  let subscribed = false;
  let asterikCaption =
    "PAC values marked by * are >= 10% lower explosive limit (LEL) but < 50% LEL";

  selectedChemical.subscribe(currChemical => {
    if (currChemical) {
      currentChemical = currChemical;
    }
  });

  $: {
    mostRecentUpdateDate = new Date(currentChemical["Date"]).toDateString();
  }

  const ppmToMgm = localPACValues => {
    let molecularWeight = parseFloat(currentChemical.molecularWeight);
    for (const [key, value] of Object.entries(localPACValues)) {
      let newItem = parseFloat(value as any);
      let newValue = (newItem * molecularWeight) / 24.45;
      localPACValues[key] = newValue.toFixed(2);
    }
    return localPACValues;
    // Y mg/m3 = (X)(molecularWeight)/24.45
  };
  //   X ppm = (Y mg/m3)(24.45)/(molecular weight)
  const mgmToPpm = localPACValues => {
    let molecularWeight = parseFloat(currentChemical.molecularWeight);
    for (const [key, value] of Object.entries(localPACValues)) {
      let newItem = parseFloat(value as any);
      let newValue = (newItem * 24.45) / molecularWeight;
      localPACValues[key] = newValue.toFixed(2);
    }
    return localPACValues;
  };

  const convertUnit = () => {
    let convertCase;
    /** Get type of case*/
    if (currentChemical?.originalUnit === currentUnit) {
      convertCase = 1;
    } else if (currentChemical?.originalUnit !== currentUnit) {
      if (currentUnit === UNIT_OPTIONS[0]) {
        convertCase = 2;
      } else if (currentUnit === UNIT_OPTIONS[1]) {
        convertCase = 3;
      }
    }
    let localPACValues = calculatedPACValues;
    /**Convert based on case type*/
    switch (convertCase) {
      case 1: {
        localPACValues = {
          PAC1: currentChemical.pac1,
          PAC2: currentChemical.pac2,
          PAC3: currentChemical.pac3
        };
        localPACValues;
      }
      case 2: {
        ppmToMgm(localPACValues);
      }
      case 3: {
        mgmToPpm(localPACValues);
      }
    }
    calculatedPACValues = localPACValues;
  };

  $: {
    if (currentUnit) {
      convertUnit();
    }
  }
  onMount(() => {
    for (const value of UNIT_OPTIONS) {
      if (currentChemical?.originalUnit === value) {
        currentUnit = value;
        calculatedPACValues = {
          PAC1: currentChemical.pac1,
          PAC2: currentChemical.pac2,
          PAC3: currentChemical.pac3
        };
      }
    }
  });
</script>

<div class="panel-header">
  <h2>{currentChemical?.Chemical_Name || "No Name in Database"}</h2>
  <h5>Last Updated: {mostRecentUpdateDate || ""}</h5>
  <div bind:this={componentReference} class="button-container">
    <!-- <Button on:click={() => window.alert("Not Implemented")}>
      <Icon class="material-icons">open_in_new</Icon>
      <Label>open in new tab</Label>
    </Button> -->
    <!-- <Button on:click={() => window.alert("Not Implemented")}>
      <Icon class="material-icons">history</Icon>
      <Label>view in history</Label>
    </Button> -->
    {#if featureFlags.emailUpdates === true}
      {#if subscribed}
        <Button on:click={() => (showUnsubscribe = !showUnsubscribe)}>
          <Icon class="material-icons">notifications_off</Icon>
          <Label>Stop Email Updates</Label>
        </Button>
      {:else}
        <Button on:click={() => (showEmailNotification = !showEmailNotification)}>
          <Icon class="material-icons">notifications</Icon>
          <Label>email updates</Label>
        </Button>
      {/if}
    {/if}
  </div>
  {#if showEmailNotification}
    <EmailNotification
      {currentChemical}
      parentReference={componentReference}
      on:close={() => (showEmailNotification = false)}
      on:submitEmail
    />
  {/if}
  {#if showUnsubscribe}
    <UnsubscribeModal
      {currentChemical}
      parentReference={componentReference}
      on:close={() => (showUnsubscribe = false)}
      on:unsubscribe
    />
  {/if}
</div>
<div class="scrollable-area">
  <div class="container">
    <h4>Protective Action Criteria Values</h4>
    <div class="body-caption">Unit</div>
    <FormField>
      <!-- TODO: Reconnect when added calculation -->
      {#each UNIT_OPTIONS as option}
        <div class="radio-item">
          <Radio bind:group={currentUnit} value={option} />
          <span class="label">{option}</span>
        </div>
      {/each}
    </FormField>

    <div class="body-caption">
      {#if currentChemical.aegl1 != ""}
        AEGL-1
      {:else if currentChemical.erpg1 != ""}
        ERPG-1
      {:else}
        TEEL-1
      {/if}
    </div>

    <div class="pac-item">
      <h3>
        {calculatedPACValues?.PAC1 ? calculatedPACValues.PAC1 : "N/A"}
        <span class="unit">{currentUnit}</span>
      </h3>
      {#if featureFlags.pacLabel === true}
        <div class="caption">Corresponds to 60-minute AEGL values</div>
      {/if}
    </div>

    <div class="body-caption">
      {#if currentChemical.aegl2 != ""}
        AEGL-2
      {:else if currentChemical.erpg2 != ""}
        ERPG-2
      {:else}
        TEEL-2
      {/if}
    </div>

    <div class="pac-item">
      <h3>
        {calculatedPACValues?.PAC2 !== null ? calculatedPACValues.PAC2 : "N/A"}
        {currentUnit}
      </h3>
      {#if featureFlags.pacLabel === true}
        <div class="caption">Corresponds to 60-minute AEGL values</div>
      {/if}
    </div>

    <div class="body-caption">
      {#if currentChemical.aegl3 != ""}
        AEGL-3
      {:else if currentChemical.erpg3 != ""}
        ERPG-3
      {:else}
        TEEL-3
      {/if}
    </div>

    <div class="pac-item">
      <h3>
        {calculatedPACValues?.PAC3 ? calculatedPACValues.PAC3 : "N/A"}
        {currentUnit}
      </h3>
      {#if featureFlags.pacLabel === true}
        <div class="caption">Corresponds to 60-minute AEGL values</div>
      {/if}
    </div>
  </div>
  <div class="caption center">{asterikCaption}</div>
  <FormField />

  <div class="divider" />
  <ChemicalIdentity />
  {#if featureFlags.healthCodes === true}
    <div class="divider" />
    <HealthCodes />
  {/if}
  <div class="divider" />
  <PhysicalProperties />
</div>
