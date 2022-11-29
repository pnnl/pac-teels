<style>
  .analyst-home {
    width: 100vw;
    height: calc(100vh - 4em);
  }
  h2 {
    font-weight: 600;
    font-size: 2rem;
    color: var(--blackFont);
    font-family: "Open Sans", sans-serif;
  }
  .page-title-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    margin: 2rem;
    width: 15rem;
  }
</style>

<script lang="ts">
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import AccordianTable from "components/AccordianTable/AccordianTable.svelte";
  let active = `Assigned to me`;
  let number = 0; /**This is a placeholder to be replaced by brought in user data*/
</script>

<div class="analyst-home">
  <div class="page-title-container">
    <h2>Analyst Home</h2>
    <TabBar tabs={["Assigned to me", `Drafts(${number})`]} let:tab bind:active>
      <!-- Note: the `tab` property is required! -->
      <Tab style={"padding:0;margin-right:1rem"} {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>
  {#if active === `Assigned to me` }
  <AccordianTable />
  {/if}
</div>
