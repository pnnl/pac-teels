<style>
  .global-popup {
    position: absolute;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    z-index: 100;
  }

  .global-popup.dark {
    background-color: #3d434f;
  }

  .global-popup-background {
    z-index: 99;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  .global-popup-background.blur-background:after {
    content: "";
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  .global-popup-background:after {
    content: "";
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
</style>

<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";

  export let blurBackground = true;
  export let style = "";
  export let theme: "light" | "dark" = "light";

  const dispatch = createEventDispatcher();

  let popupReference;

  const clickOutsideComponentHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (popupReference.contains(target) || target === popupReference) {
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

<div class="global-popup-container">
  <div class={`global-popup-background ${blurBackground ? "blur-background" : ""}`}>
    <div class={`global-popup ${theme}`} {style} bind:this={popupReference}>
      <slot />
    </div>
  </div>
</div>
