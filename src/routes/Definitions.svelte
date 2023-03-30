<style>
  section {
    display: grid;
    justify-items: start;
    grid-template-columns: 70% auto;
    gap: 1rem;
    overflow-y: auto;
  }
  hr {
    border-top: 0.125rem solid var(--border);
    width: 100%;
  }
  .body {
    padding: 1rem;
    grid-column: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .right-panel {
    grid-column: 2;
  }
</style>

<script>
  import Button, { Icon, Label } from "@smui/button";
  import { push } from "svelte-spa-router";

  const ANCHOR_POINTS = {
    AEGL: "#aegls",
    ERPG: "#erpgs",
    TEEL: "#teels"
  };
</script>

<section>
  <div class="body">
    <Button on:click={() => push("/")}
      ><Icon class="material-icons">arrow_back</Icon><Label>Back</Label></Button
    >
    <h2>Definition of PACs</h2>
    <h3>Acute Exposure Guideline Levels (AEGLs)</h3>
    <p>
      Acute Exposure Guideline Levels (AEGLs) represent threshold exposure limits for the
      general public and are applicable to emergency exposures ranging from 10 minutes to
      8 hours. Three levels—AEGL-1, AEGL-2, AEGL-3—are developed for each of five exposure
      periods (10 minutes, 30 minutes, 1 hour, 4 hours, and 8 hours) and are distinguished
      by varying degrees of severity of toxic effects. DOE guidance is to use the 1 hour
      AEGL values, which appear in this database. The three AEGLs are defined as follows:
    </p>
    <p>
      <b>AEGL-1</b> is the airborne concentration (expressed as ppm [parts per million] or
      mg/m3 [milligrams per cubic meter]) of a substance above which it is predicted that the
      general population, including susceptible individuals, could experience notable discomfort,
      irritation, or certain asymptomatic, nonsensory effects. However, these effects are not
      disabling and are transient and reversible upon cessation of exposure.
    </p>
    <p>
      <b>AEGL-2</b> is the airborne concentration (expressed as ppm or mg/m3) of a substance
      above which it is predicted that the general population, including susceptible individuals,
      could experience irreversible or other serious, long-lasting, adverse health effects
      or an impaired ability to escape.
    </p>
    <p>
      <b>AEGL-3</b> is the airborne concentration (expressed as ppm or mg/m3) of a substance
      above which it is predicted that the general population, including susceptible individuals,
      could experience life-threatening adverse health effects or death.
    </p>
    <hr />
    <h3>Emergency Response Planning Guidelines (ERPGs)</h3>
    <p>
      <b>ERPG-1</b> is the maximum concentration in air below which nearly all individuals
      could be exposed for up to one hour without experiencing other than mild transient adverse
      health effects or perceiving a clearly defined objectionable odor.
    </p>
    <p>
      <b>ERPG-2</b> is the maximum concentration in air below which nearly all individuals
      could be exposed for up to one hour without experiencing or developing irreversible or
      other serious health effects or symptoms that could impair their abilities to take protective
      action.
    </p>
    <p>
      <b>ERPG-3</b> is the maximum concentration in air below which nearly all individuals
      could be exposed for up to one hour without experiencing or developing life-threatening
      health effects.
    </p>
    <hr />
    <h3>Temporary Emergency Exposure Limits (TEELs)</h3>
    <p>
      <b>TEEL-1</b> is the airborne concentration (expressed as ppm [parts per million] or
      mg/m3 [milligrams per cubic meter]) of a substance above which it is predicted that the
      general population, including susceptible individuals, when exposed for more than one
      hour, could experience notable discomfort, irritation, or certain asymptomatic, nonsensory
      effects. However, these effects are not disabling and are transient and reversible upon
      cessation of exposure.
    </p>
    <p>
      <b>TEEL-2</b> is the airborne concentration (expressed as ppm or mg/m3) of a substance
      above which it is predicted that the general population, including susceptible individuals,
      when exposed for more than one hour, could experience irreversible or other serious,
      long-lasting, adverse health effects or an impaired ability to escape.
    </p>
    <p>
      <b>TEEL-3</b> is the airborne concentration (expressed as ppm or mg/m3) of a substance
      above which it is predicted that the general population, including susceptible individuals,
      when exposed for more than one hour, could experience life-threatening adverse health
      effects or death.
    </p>
    <p>TEELs are intended for use until AEGLs or ERPGs are adopted for chemicals.</p>
  </div>
  <!--
    TODO: Add in second release
  <div class="right-panel" /> -->
</section>
