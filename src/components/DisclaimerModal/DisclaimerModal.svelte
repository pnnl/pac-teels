<style>
  .red {
    color: red;
  }
  .message-container {
    min-height: 8rem;
    margin-bottom: 2rem;
  }
  .button-container {
    height: 8rem;
    gap: 1rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    flex-wrap: nowrap;
  }
  pre {
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }
</style>

<script lang="ts">
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { mainComponentHTMLSelector } from "constants/constants";
  import Dropbox from "components/Dropbox/Dropbox.svelte";
  import IconButton from "@smui/icon-button";
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import {
    AEGL_STANDING_OPERATING_PROCEDURE,
    AIHA_ERP_COMMITTEE_PROCEDURES_RESPONSIBILITIES,
    DOE_HANDBOOK
  } from "constants/constants";

  export let open;
  export let close;

  let email: string = "";
  let message: string = "";
  let inputsFilled = false;
  let invalid = false;

  $: {
    if (email.length > 0 && invalid === false && message.length > 0) {
      inputsFilled = true;
    } else {
      inputsFilled = false;
    }
  }

  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch("close");
  };
</script>

<Dialog
  bind:open
  on:SMUIDialog:closed={close}
  surface$style="width: 850px;
  max-width: calc(100vw - 2rem);
  top: 5rem;
  bottom: 2rem;
  position: absolute;"
>
  <Content>
    <Header
      style={`
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          flex-wrap: nowrap;
          align-items: center;
          `}
    >
      <IconButton
        action="close"
        class="material-icons"
        size="button"
        style={"color:var(--blue); "}
        on:click={() => dispatch("close")}>close</IconButton
      >
      <Title style={`padding:0;`}>About</Title>
    </Header>
    <p>
      Emergency exposure limits are essential components of planning for the uncontrolled
      release of hazardous chemicals. These limits, combined with estimates of exposure,
      provide the information necessary to identify and evaluate accidents for the purpose
      of taking appropriate protective actions. During an emergency response to an
      uncontrolled release, these limits may be used to evaluate the severity of the
      event, to identify potential outcomes, and to decide what protective actions should
      be taken. In anticipation of an uncontrolled release, these limits may also be used
      to estimate the consequences of an uncontrolled release and to plan emergency
      responses.
    </p>
    <p>
      DOE O 151.1, Comprehensive Emergency Management System, requires the use of Acute
      Exposure Guideline Levels (AEGLs) and Emergency Response Planning Guidelines (ERPGs)
      as the emergency exposure limits of choice, in order of preference. Because AEGLs
      and ERPGs exist only for a limited number of chemicals, DOE also commissions the
      development of Temporary Emergency Exposure Limits (TEELs) so that DOE facilities
      may conduct Emergency Planning Hazard Assessments (EPHAs) and consequence
      assessments for chemicals lacking AEGLs or ERPGs. TEELs are temporary limits for
      chemicals until AEGLs or ERPGs are developed. Together, AEGLs, ERPGs, and TEELs are
      referred to as chemical Protective Action Criteria - PACs.
    </p>
    <p>
      TEEL values are always subject to change, being replaced by AEGLs or ERPGs when new
      values are published or updated when different exposure limits or new toxicity data
      are published.
    </p>
    <p>
      PACs for emergency planning of chemical release events are based on the chemical
      exposure limit values provided in:
    </p>

    <p>
      <b>Final and interim Acute Exposure Guideline Levels (AEGLs)</b>. AEGLs
      <a href={AEGL_STANDING_OPERATING_PROCEDURE}
        >(see AEGL Standing Operating Procedures)</a
      > are developed by the U.S. Environmental Protection Agency (EPA). AEGLs are defined
      for five time periods: 10 minutes, 30 minutes, 60 minutes, 4 hours, and 8 hours. The
      60-minute AEGL values have been selected for use in the PAC database.
    </p>

    <p>
      <b>Emergency Response Planning Guidelines (ERPGs)</b>. ERPGs are produced by the
      American Industrial Hygiene Association (AIHA) Emergency Response Planning Committee
      (see
      <a href={AIHA_ERP_COMMITTEE_PROCEDURES_RESPONSIBILITIES}
        >AIHA ERP Committee Procedures and Responsibilities</a
      >).
    </p>

    <p>
      <b>Temporary Emergency Exposure Limit (TEEL) data sets.</b>TEELs are developed by
      the DOE Office of Emergency Management Policy (NA-41) following the guidelines
      described in <a href={DOE_HANDBOOK}>DOE-HDBK-1046-2016</a>, Temporary Emergency
      Exposure Limits: Methods and Practice.
    </p>

    <div class="button-container">
      <Button on:click={() => dispatch("close")} variant="raised">Accept</Button>
    </div>
  </Content>
</Dialog>
