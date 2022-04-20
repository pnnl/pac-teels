
<style>
 .search-bar {
        margin: 0;
        box-sizing: border-box;
        height: 2.5rem;
        background-color: #ffffff;
        border: none;
        padding: 0 1rem;
        font-size: 1rem;
        width: 100%;
        color: black;
    }

    .search-icon {
        margin-left: 1rem;
        color: #dadada;
        background-color: var(--white);
        font-size: 1.25rem;
        user-select: none;
    }

    .search-bar::placeholder {
        color: #b7b7b7;
    }

    .search-bar:focus {
        outline: 0;
    }

    .search-bar-wrapper {
        width: 18.75rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border: 0.0625rem solid #bababa;
        background-color: var(--white);
        border-radius: 0.25rem;
        transition-property: box-shadow, border-color;
        transition-duration: 200ms;
        transition-timing-function: ease;
    }

    .search-bar-wrapper:focus-within {
        border: 0.0625rem solid var(--blue)
    }

</style>

<script lang="ts">
    export let placeholder;
    export let searchBarFilter:string;
    export let style;
    let searchDropDownVisible;
    export let items;

const handleFilterBySearch = () => {
 window.alert("Not yet implemented")
}

const handleSearchItemSelect = (key,item) => {

}

</script>

<div class="search-bar-wrapper" {style}>
    <i class="search-icon material-icons">search</i>
    <input class="search-bar" {placeholder} bind:value={searchBarFilter} on:input={handleFilterBySearch} />
</div>
{#if searchDropDownVisible}
    <div class="search-drop-down">
        {#each [...items] as [key,item]}
            <div class="search-item" on:click={() => handleSearchItemSelect(key,item)}>
                {item}
            </div>
        {/each}
    </div>
{/if}
