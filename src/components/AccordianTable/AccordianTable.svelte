<style>
  .accordian-container {
    width: 100%;
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
        dateAssigned: "11/12/13",
        review: "",
        dueDate: "12/31/23"
      }
    ],
    [
      "key2",
      {
        data: [
          {
            chemicalName: "Bismuth iodide",
            formula: "Bi.I3",
            status: "Not Started",
            assignedBy: "admin.user@pnnl.gov"
          }
        ],
        dateAssigned: "11/12/13",
        review: "",
        dueDate: "12/31/23"
      }
    ]
  ]);
  let panelOpen = false;
</script>

<div class="accordian-container">
  <DataTable
  style={`
    display:grid;
      border:none;
  grid-template-columns: auto 10rem 10rem 10rem;
    `}
  >
    <Head

    >
      <Row>
       <Cell style={"grid-column:1;"}>Chemical Name</Cell>
       <Cell style={"grid-column:2;"}>Chemical Formula</Cell>
       <Cell style={"grid-column:3;"}>Status</Cell>
       <Cell style={"grid-column:4;"}>Assigned By</Cell>
      </Row>
    </Head>
  </DataTable>
  <Accordion>
    {#each [...assignedChemicals] as [key, item]}
      <Panel bind:open={panelOpen} style={""}>
        <Header>
          <IconButton
            slot="icon"
            toggle
            pressed={panelOpen}
            style={"margin:0;padding:0;background:transparent;"}
          >
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>
          Due {item?.dueDate}
        </Header>
        <Content>
          <DataTable
            style={`
          display:grid;
            border:none;
        grid-template-columns: auto 10rem 10rem 10rem;
          `}
          >
            {#each [...item.data] as rowItem}
              <Row style={"width:100%;"}>
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
