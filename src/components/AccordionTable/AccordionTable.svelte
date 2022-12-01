<style>
  .accordion-container {
    width: 100%;
    text-align: left;
  }
  .panel-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .panel-status{
    margin-left:1rem;
    color:var(--caption);
  }
</style>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import IconButton, { Icon } from "@smui/icon-button";

  let assignedChemicals = new Map([
    [
      "key1",
      {
        data: [
          {
            chemicalName: "Bismuth iodide",
            formula: "Bi.I3",
            status: "Not Started",
            assignedBy: "admin.user@pnnl.gov"
          }
        ],
        dateAssigned: "Jan 31, 2022",
        review: "",
        dueDate: "Jan 31, 2023",
        reportStatus:"Not Started"
      }
    ]

  ]);
  let panelOpen = false;
</script>

<div class="accordion-container">
  <DataTable
    style={`
    width:100vw;
    border:none;`}
  >
    <Head>
      <Row
        style={`
        display: grid;
        grid-template-columns: 50% 20% 10% 20%;
        `}
      >
        <Cell style={"grid-column:1;"}>Chemical Name</Cell>
        <Cell style={"grid-column:2;"}>Chemical Formula</Cell>
        <Cell style={"grid-column:3;"}>Status</Cell>
        <Cell style={"grid-column:4;"}>Assigned By</Cell>
      </Row>
    </Head>
  </DataTable>
  <Accordion style={"padding:0;"}>
    {#each [...assignedChemicals] as [key, item]}
      <Panel bind:open={panelOpen} style={"padding:0;"}>
        <Header style={"padding:0;"}>
          <div class="panel-title">
            <IconButton
              toggle
              pressed={panelOpen}
              style={"margin:0;padding:0;"}
            >
              <Icon class="material-icons" on>expand_less</Icon>
              <Icon class="material-icons">expand_more</Icon>
            </IconButton>
           <b>Due {item?.dueDate}</b>
           <div class="panel-status"
           class:red={"someItem"}
           class:green={"someItemToo"}>
<!-- TODO Add states for completion flags, -->
            {item.reportStatus}
           </div>
           <!--TODO Add logic for due date passed//approaching -->
           <!-- {#if item.dueDate}
           <div class="due-flag"></div>
           {/if} -->
          </div>
        </Header>
        <Content style={"padding-left:0;"}>
          <DataTable
            style={`
            width:100vw;
            border:none;
          `}
          >
            {#each [...item.data] as rowItem}
              <Row
                style={`
                display:grid;
                  border:none;
                  grid-template-columns: 50% 20% 10% 20%;
                `}
              >
                <Cell style={"grid-column:1;"}>{rowItem.chemicalName}</Cell>
                <Cell style={"grid-column:2;"}>{rowItem.formula}</Cell>
                <Cell style={"grid-column:3;"}>{rowItem.status}</Cell>
                <Cell style={"grid-column:4;"}>{rowItem.assignedBy}</Cell>
              </Row>
            {/each}
          </DataTable></Content
        >
      </Panel>
    {/each}
  </Accordion>
</div>
