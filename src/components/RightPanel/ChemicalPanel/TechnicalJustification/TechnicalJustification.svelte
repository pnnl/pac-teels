<style>
  .technical-justification {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
    white-space: pre-line;
  }

  .justification-reference-label {
    color: var(--caption);
    font-size: 1rem;
    font-weight: 400, regular;
    align-self: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    text-align:start;
  }

  .justification-reference-data {
    color: var(--font);
    font-size: 1rem;
    font-weight: 600;
    align-self: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    text-align:start;
    white-space: pre-line;
}
</style>

<script lang="ts">
    import { selectedChemical } from "stores/stores";
    import {TECHNICAL_JUSTIFICATION_MAP} from "constants/constants"

    let currentChemical;
    let techJustification = new Map();
    selectedChemical.subscribe(currChemical => {
        if (currChemical) {
            currentChemical = currChemical
        }
    });

    $: {
        let localJustificationMap = new Map();
        for (const [key, property] of TECHNICAL_JUSTIFICATION_MAP) {
            if(currentChemical[key] !== "" && currentChemical[key] !== null) {
                let value = currentChemical[key];
                if(key === "references"){
                    value = value.split("\n");
                    for(let i = 0; i < value.length; i++)
                    {
                        if(value[i] === "" || value[i] == null){
                            value.splice(i, 1);
                        }
                        else{
                            value[i] = value[i].substring(3);
                        }
                    }
                }
                localJustificationMap.set(key, {property, value});
            }
        }
        techJustification = localJustificationMap;
    }

    //convert references value to array, so it can be printed as a list
    
    
    

</script>

<div class="technical-justification-container">
    <h4>Technical Justification</h4>
    {#each [...techJustification] as [key, {property, value}]}
        <div class="technical-justification">
            <div class="justification-reference-label">{property}</div>
            {#if property === "References"}
            <ol>
                {#each value as reference}
                    <div class="justification-reference-data"><li>{reference}</li></div>
                {/each}
            </ol>
            {:else}
            <div class="justification-reference-data">{value}</div>
            {/if}
        </div>
    {/each}
</div>