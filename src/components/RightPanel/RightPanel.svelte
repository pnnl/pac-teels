<style>
  .background-blur {
    z-index: 99;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
  .background-blur::after {
    content: "";
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 99;
  }
  .right-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: -webkit-fill-available;
    max-width: 42.5rem;
    overflow: hidden;
    background: var(--white);
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--blue);
  }
</style>

<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import ChemicalPanel from "./ChemicalPanel/ChemicalPanel.svelte";

  const dispatch = createEventDispatcher();
  let rightPanelRef;
  const clickOutsideComponentHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (rightPanelRef.contains(target) || target === rightPanelRef) {
      return;
    }
    dispatch("close", {});
  };

  onMount(() => {
    setTimeout(
      () => window.document.body.addEventListener("click", clickOutsideComponentHandler),
      0
    );
  });
  onDestroy(() => {
    window.document.body.removeEventListener("click", clickOutsideComponentHandler);
  });
</script>

<div class="background-blur">
  <div class="right-panel" bind:this={rightPanelRef}>
    <span class="close material-icons" on:click={() => dispatch("close", {})}>close</span>
    <ChemicalPanel />
  </div>
</div>
