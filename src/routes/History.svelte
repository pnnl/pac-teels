<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
  }
  .button-wrapper {
    padding-top: 0.5rem;
  }
</style>

<script lang="ts">
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Pagination,
    SortValue
  } from "@smui/data-table";
  import RightPanel from "components/RightPanel/RightPanel.svelte";
  import Button, { Icon, Label as ButtonLabel } from "@smui/button";
  import { push } from "svelte-spa-router";
  import IconButton from "@smui/icon-button";
  import { Label } from "@smui/common";
  import Select, { Option } from "@smui/select";
  import { chemicals, rightPanelOpened, selectedChemical } from "stores/stores";
  import { downloadChemicalsToCSV } from "utilities/utilities";

  let rightPanelOpenedLocal = false;
  rightPanelOpened.subscribe(currRightPanelOpened => {
    rightPanelOpenedLocal = currRightPanelOpened;
  });

  type ChemDatabase = {
    Approval_Date: string;
    Chemical_ID: string;
    CAS_Number: string;
    Chemical_Name: string;
    Chemical_Formula: string;
    UN_Number: string;
    Date: string;
    Last_Reviewed: string;
  };
  let items: ChemDatabase[] = [];
  let sort: keyof ChemDatabase = "Approval_Date";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";
  let rowsPerPage = 10;
  let currentPage = 0;
  let columns: any[] = [];

  chemicals.subscribe(currChemicals => {
    if (currChemicals) {
      items = currChemicals
        .filter(chemical => {
          return chemical.Approval_Date !== null;
        })
        .sort((a, b) => {
          return (
            a["Approval_Date"].localeCompare(b["Approval_Date"]) ||
            a["Chemical_Name"].localeCompare(b["Chemical_Name"])
          );
        });
    }
  });

  const columnEnum = {
    1: "Approval_Date",
    2: "CAS_Number",
    3: "Chemical_Name",
    4: "Chemical_Formula",
    5: "UN_Number",
    6: "Date",
    7: "Last_Reviewed"
  };

  for (const item of Object.values(columnEnum)) {
    let newItem = item.replace("_", " ");
    columns.push(newItem);
  }

  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, items.length);
  $: slice = items.slice(start, end);
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }

  const handleDownloadClick = () => {
    let filteredSlice: any[] = [];
    for (const value of slice) {
      let newItem: any = {};
      for (const item of Object.values(columnEnum)) {
        if (item === columnEnum[3]) {
          if (value[item].includes(",")) {
            newItem[item] = `"${value[item]}"`;
          } else {
            newItem[item] = value[item];
          }
        } else if (item === columnEnum[5] || item === columnEnum[4]) {
          if (
            value[item] === "" ||
            value[item] === null ||
            value[item] === undefined ||
            value[item] === "<BR>"
          ) {
            newItem[item] = "-";
          } else {
            newItem[item] = value[item];
          }
        } else {
          newItem[item] = value[item];
        }
      }
      filteredSlice.push(newItem);
    }

    downloadChemicalsToCSV({ chemicals: filteredSlice, columns, type: "History" });
  };

  function handleSort(e: any) {
    items.sort((a, b) => {
      const [aVal, bVal] = [
        a[columnEnum[e.detail.columnIndex]],
        b[columnEnum[e.detail.columnIndex]]
      ][sortDirection === "ascending" ? "slice" : "reverse"]();
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    items = items;
  }
</script>

{#if rightPanelOpenedLocal}
  <RightPanel
    on:close={() => {
      rightPanelOpened.update(currOpen => !currOpen);
    }}
  />
{/if}

<div class="content">
  <Button on:click={() => push("/")}
    ><Icon class="material-icons">arrow_back</Icon><ButtonLabel>Back</ButtonLabel></Button
  >
  <DataTable
    stickyHeader
    sortable
    bind:sort
    bind:sortDirection
    on:SMUIDataTable:sorted={handleSort}
    table$aria-label="Chemical Database"
    style="width: 100%;"
  >
    <Head
      style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 1px 10px rgba(0, 0, 0, 0.1);"
    >
      <Row style="width: -webkit-fill-available;">
        <Cell colspan={100} style="border-bottom: unset;">
          <div style={"display: flex; align-items: center; "} />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Label>Approval Date</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell>
          <Label>CAS Number</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell style="width: 100%;">
          <Label>Chemical Name</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell>
          <Label>Chemical Formula</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell numeric>
          <Label>UN Number</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell style="width: 100%;">
          <Label>Last Updated</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell style="width: 100%;">
          <Label>Last Reviewed</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell>
          <Label>Link</Label>
        </Cell>
      </Row>
    </Head>
    <Body style={"overflow-x: auto"}>
      {#each slice as item (item.Chemical_ID)}
        <Row>
          <Cell style="clip-path: inset(0rem 0rem 0rem 1rem);"
            >{new Date(item.Approval_Date).toDateString()}</Cell
          >
          <Cell>{item.CAS_Number}</Cell>
          <Cell>{item.Chemical_Name}</Cell>
          <Cell>{item.Chemical_Formula}</Cell>
          <Cell>{item.UN_Number === "<BR>" ? "" : item.UN_Number}</Cell>
          <Cell>{new Date(item.Date).toDateString()}</Cell>
          <Cell>{new Date(item.Last_Reviewed).toDateString()}</Cell>
          <Cell style="clip-path: inset(0rem 1rem 0rem 0rem);"
            ><Button
              on:click={() => {
                selectedChemical.update(currSelectedChem => item);
                rightPanelOpened.update(currOpen => !currOpen);
              }}>View</Button
            ></Cell
          >
        </Row>
      {/each}
    </Body>
    <Pagination slot="paginate" class="paginate-class">
      <div style="display: flex; flex: 1;">
        <div style="display: flex; align-items: center;">
          <Label>Rows Per Page</Label>
          <Select variant="outlined" bind:value={rowsPerPage} noLabel>
            <Option value={10}>10</Option>
            <Option value={25}>25</Option>
            <Option value={100}>100</Option>
          </Select>
          {start + 1}-{end} of {items.length}
          <IconButton
            class="material-icons"
            action="first-page"
            title="First page"
            style="margin: unset;"
            on:click={() => (currentPage = 0)}
            disabled={currentPage === 0}>first_page</IconButton
          >
          <IconButton
            class="material-icons"
            action="prev-page"
            title="Prev page"
            style="margin: unset;"
            on:click={() => currentPage--}
            disabled={currentPage === 0}>chevron_left</IconButton
          >
          <IconButton
            class="material-icons"
            action="next-page"
            title="Next page"
            style="margin: unset;"
            on:click={() => currentPage++}
            disabled={currentPage === lastPage}>chevron_right</IconButton
          >
          <IconButton
            class="material-icons"
            action="last-page"
            title="Last page"
            style="margin: unset;"
            on:click={() => (currentPage = lastPage)}
            disabled={currentPage === lastPage}>last_page</IconButton
          >
        </div>
      </div>
      <div class="button-wrapper">
        <Button variant="raised" on:click={handleDownloadClick}>Download</Button>
      </div>
    </Pagination>
  </DataTable>
</div>
