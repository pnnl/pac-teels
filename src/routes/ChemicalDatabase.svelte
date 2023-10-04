<style>
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
    border: 1px solid var(--caption);
    box-shadow: unset !important;
  }
  * :global(.solo-paper):focus-within {
    border: 1px solid var(--blue);
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    font-weight: 400;
    color: var(--placeholder);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
  .button-wrapper {
    padding-top: 0.5rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
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
  import IconButton from "@smui/icon-button";
  import { Label } from "@smui/common";
  import Select, { Option } from "@smui/select";
  import { Input } from "@smui/textfield";
  import Paper from "@smui/paper";
  import Button, { Icon } from "@smui/button";
  import { Icon as CommonIcon } from "@smui/common";
  import { chemicals } from "stores/stores";
  import MediaQuery from "components/MediaQuery.svelte";
  import themeStyle from "../theme.scss";
  import { downloadChemicalsToCSV } from "utilities/utilities";

  type ChemDatabase = {
    Chemical_ID: string;
    CAS_Number: string;
    Chemical_Name: string;
    Chemical_Formula: string;
    UN_Number: string;
    Date: string;
    pac1: string;
    pac2: string;
    pac3: string;
    pac1_ppm: string;
    pac2_ppm: string;
    pac3_ppm: string;
    originalUnit: string;
  };
  let items: ChemDatabase[] = [];
  let sort: keyof ChemDatabase = "CAS_Number";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";
  let rowsPerPage = 10;
  let currentPage = 0;
  let search = "";
  let columns: any[] = [];

  chemicals.subscribe(currChemicals => {
    if (currChemicals) {
      items = currChemicals;
    }
  });
  const columnEnum = {
    1: "CAS_Number",
    2: "Chemical_Name",
    3: "Chemical_Formula",
    4: "UN_Number",
    5: "Date",
    6: "pac1",
    7: "pac2",
    8: "pac3"
  };

  const downloadColumnEnum = {
    1: "CAS_Number",
    2: "Chemical_Name",
    3: "Chemical_Formula",
    4: "UN_Number",
    5: "Date",
    6: "pac1",
    7: "pac2",
    8: "pac3",
    9: "originalUnit",
    10: "pac1Source",
    11: "pac2Source",
    12: "pac3Source",
    13: "molecularWeight",
    14: "state"
  };

  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, items.length);
  $: slice = items.slice(start, end);
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }
  for (const item of Object.values(downloadColumnEnum)) {
    let newItem = item.replace("_", " ");
    columns.push(newItem);
  }

  const handleDownloadClick = () => {
    let filteredSlice: any[] = [];
    for (const value of items) {
      let newItem: any = {};
      for (const item of Object.values(downloadColumnEnum)) {
        if (
          item === downloadColumnEnum[6] ||
          item === downloadColumnEnum[7] ||
          item === downloadColumnEnum[8]
        ) {
          if (item === downloadColumnEnum[6] && value[item] === null) {
            newItem[item] = value["pac1_ppm"];
          } else if (item === downloadColumnEnum[7] && value[item] === null) {
            newItem[item] = value["pac2_ppm"];
          } else if (item === downloadColumnEnum[8] && value[item] === null) {
            newItem[item] = value["pac3_ppm"];
          } else {
            newItem[item] = value[item];
          }
        } else if (
          item === downloadColumnEnum[9] ||
          item === downloadColumnEnum[10] ||
          item === downloadColumnEnum[11]
        ) {
          if (value[item].includes(",")) newItem[item] === `"${value[item]}"`;
          else {
            newItem[item] = value[item];
          }
        } else if (item === downloadColumnEnum[4]) {
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
    downloadChemicalsToCSV({
      chemicals: filteredSlice,
      columns,
      type: "Chemical_Database"
    });
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

<div class="content">
  <Button on:click={() => push("/")}
    ><Icon class="material-icons">arrow_back</Icon><Label>Back</Label></Button
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
          <div style={"display: flex; align-items: center; "}>
            <!-- <Paper
              class="solo-paper"
              style={"width: -webkit-fill-available; margin: 1rem; height: var(--mdc-outlined-button-container-height, 36px);"}
            >
              <Icon class="material-icons" style="font-size: 1.3rem; color: var(--caption)"
                >search</Icon
              >
              <Input
                bind:search
                on:keydown={() => {}}
                placeholder="Search chemicals by CAS number, chemical name, chemical formula, or UN number"
                class="solo-input"
              />
            </Paper>
            <Button
              variant="outlined"
              defaultAction
              on:click={() => {}}
              style={"margin-bottom: 0;"}
            >
              <Icon class="material-icons">filter_list</Icon>
              <Label>Filters</Label>
            </Button> -->
          </div>
        </Cell>
      </Row>
      <Row>
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
        <Cell>
          <Label>Last Updated</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell style="width: 100%;">
          <Label>PAC-1</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell>
          <Label>PAC-2</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
        <Cell>
          <Label>PAC-3</Label>
          <IconButton class="material-icons" size="button">sort</IconButton>
        </Cell>
      </Row>
    </Head>
    <Body style={"overflow-x: auto"}>
      {#each slice as item (item.Chemical_ID)}
        <Row>
          <Cell style="clip-path: inset(0rem 0rem 0rem 1rem);">
            {item.CAS_Number}</Cell
          >
          <Cell>{item.Chemical_Name}</Cell>
          <Cell>{item.Chemical_Formula}</Cell>
          <Cell>{item.UN_Number != "<BR>" ?  + item.UN_Number : ""}</Cell>
          <Cell>{new Date(item.Date).toDateString()}</Cell>
          <Cell>{item.originalUnit === "mg/m3" ? item.pac1 + item.originalUnit : item.pac1_ppm + item.originalUnit}</Cell>
          <Cell>{item.originalUnit === "mg/m3" ? item.pac2 + item.originalUnit : item.pac2_ppm + item.originalUnit}</Cell>
          <Cell style="clip-path: inset(0rem 1rem 0rem 0rem);">{item.originalUnit === "mg/m3" ? item.pac3 + item.originalUnit : item.pac3_ppm + item.originalUnit}</Cell>
        </Row>
      {/each}
    </Body>
    <Pagination slot="paginate" class="paginate-class">
      <div style="display: flex; flex: 1;">
        <div style="display: flex; flex: 1; align-items: center; margin-left: 2rem;">
          <!-- <MediaQuery query={`(min-width: ${themeStyle.smallest})`} let:matches>
            {#if matches}
              <Button
                variant="unelevated"
                defaultAction
                on:click={() => {}}
                style={"margin-bottom: 0;"}
              >
                <Icon class="material-icons">add</Icon>
                <Label>Add New Chemical</Label>
              </Button>
            {:else}
              <Button
                variant="unelevated"
                defaultAction
                on:click={() => {}}
                style={"margin-bottom: 0;"}
              >
                <Icon class="material-icons">add</Icon>
                <Label>Add</Label>
              </Button>
            {/if}
          </MediaQuery> -->
        </div>
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
