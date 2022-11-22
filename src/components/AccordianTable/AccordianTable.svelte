<style>
</style>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import IconButton, { Icon } from "@smui/icon-button";

  let assignedChemicals = new Map([
    [
      "key1",
      {
        chemicalName: "Bismuth iodide",
        formula: "Bi.I3",
        dateAssigned: "11/12/13",
        review: "",
        status: "Not Started",
        dueDate: "12/31/23",
        assignedBy: "admin.user@pnnl.gov"
      }
    ]

  ]);
  let panelOpen = false;
</script>

<div class="accordian-container">
  <Accordion>
    {#each [...assignedChemicals] as [key, item]}
      <Panel bind:open={panelOpen}>
        <Header>
          <IconButton  toggle pressed={panelOpen}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>

          Due {item?.dueDate}

        </Header>
        <Content> table elements here</Content>
      </Panel>
    {/each}
  </Accordion>
</div>
