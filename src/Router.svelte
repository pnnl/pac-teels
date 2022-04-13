<script>
  import Router from "svelte-spa-router";
  import Homepage from "./routes/Homepage.svelte";
  import Definitions from "./routes/Definitions.svelte";

  const routes = {
    // Exact path
    "/": Homepage,
    "/definitions": Definitions

    // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    // '*': NotFound,
  };
</script>

<Router {routes} />
