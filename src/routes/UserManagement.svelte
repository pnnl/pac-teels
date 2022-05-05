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
  //@ts-ignore
  import Switch from "@smui/switch";

  type UserManagement = {
    guid: string;
    email: string;
    chemicalDatabase: boolean;
    userManagement: boolean;
    created: string;
    lastLogin: string;
  };
  let items: UserManagement[] = [];
  let sort: keyof UserManagement = "email";
  let sortDirection: Lowercase<keyof typeof SortValue> = "ascending";
  let rowsPerPage = 10;
  let currentPage = 0;
  let search = "";

  const columnEnum = {
    1: "email",
    2: "chemicalDatabase",
    3: "userManagement",
    4: "created",
    5: "lastLogin"
  };

  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, items.length);
  $: slice = items.slice(start, end);
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }

  for (let i = 0; i < 197; i++) {
    items.push({
      guid: i.toString(),
      email: "first.last@pnnl.gov",
      chemicalDatabase: true,
      userManagement: true,
      created: "Apr 4, 2022 23:00",
      lastLogin: "Apr 6, 2022 12:50"
    });
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
              placeholder="Search by account email"
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
      <Cell>
        <Label style="width: 100%;">Email</Label>
        <IconButton class="material-icons" size="button">sort</IconButton>
      </Cell>
      <Cell>
        <Label>Chemical Database</Label>
        <IconButton class="material-icons" size="button">sort</IconButton>
      </Cell>
      <Cell>
        <Label>User Management</Label>
        <IconButton class="material-icons" size="button">sort</IconButton>
      </Cell>
      <Cell>
        <Label>Created</Label>
        <IconButton class="material-icons" size="button">sort</IconButton>
      </Cell>
      <Cell>
        <Label>Last Login</Label>
        <IconButton class="material-icons" size="button">sort</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each slice as item (item.guid)}
      <Row>
        <Cell style="clip-path: inset(0rem 0rem 0rem 1rem);">
          {item.email}</Cell
        >
        <Cell><Switch bind:checked={item.chemicalDatabase} icons={false} /></Cell>
        <Cell><Switch bind:checked={item.userManagement} icons={false} /></Cell>
        <Cell>{item.created}</Cell>
        <Cell style="clip-path: inset(0rem 1rem 0rem 0rem);">{item.lastLogin}</Cell>
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
