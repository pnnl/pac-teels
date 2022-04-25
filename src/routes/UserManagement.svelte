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

  type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  };
  let items: Todo[] = [];
  let sort: keyof Todo = "id";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";
  let rowsPerPage = 10;
  let currentPage = 0;
  let search = "";

  const columnEnum = {
    1: "id",
    2: "title",
    3: "completed",
    4: "userId"
  };

  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, items.length);
  $: slice = items.slice(start, end);
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }

  if (typeof fetch !== "undefined") {
    // Slice a few off the end to show how the
    // last page looks when it's not full.
    fetch(
      "https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/todos.json"
    )
      .then(response => response.json())
      .then(json => (items = json.slice(0, 197)));
  }

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
          <Paper
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
          </Button>
        </div>
      </Cell>
    </Row>
    <Row>
      <Cell numeric>
        <IconButton class="material-icons">arrow_upward</IconButton>
        <Label>ID</Label>
      </Cell>
      <Cell style="width: 100%;">
        <Label>Title</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell>
        <Label>Completed</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell numeric>
        <Label>User ID</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each slice as item (item.id)}
      <Row>
        <Cell numeric style="clip-path: inset(0rem 0rem 0rem 1rem);">
          {item.id}</Cell
        >
        <Cell>{item.title}</Cell>
        <Cell>{item.completed ? "Yes" : "No"}</Cell>
        <Cell numeric style="clip-path: inset(0rem 1rem 0rem 0rem);">{item.userId}</Cell>
      </Row>
    {/each}
  </Body>
  <Pagination slot="paginate" class="paginate-class">
    <div style="display: flex; flex: 1;">
      <div style="display: flex; flex: 1; align-items: center; margin-left: 2rem;">
        <Button
          variant="unelevated"
          defaultAction
          on:click={() => {}}
          style={"margin-bottom: 0;"}
        >
          <Icon class="material-icons">person_add</Icon>
          <Label>Add New Account</Label>
        </Button>
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
  </Pagination>
</DataTable>
