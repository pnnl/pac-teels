<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- App.svelte -->
<script lang="ts">
  import { writable } from "svelte/store";
  const store = writable([]);
  $store.length; // incorrect no-unsafe-member-access error
  console.log("Test");
  export let title: string;
</script>

<main>
  <h1>Welcome to {title}!</h1>
</main>
