<script>
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Homepage from "./routes/Homepage.svelte";
  import ChangeLog from "./routes/ChangeLog.svelte";
  import ChemicalDatabase from "./routes/ChemicalDatabase.svelte";
  import UserManagement from "./routes/UserManagement.svelte";
  import AccountDetails from "./routes/AccountDetails.svelte";
  import ChangeEmail from "./routes/ChangeEmail.svelte";
  import ChangePassword from "./routes/ChangePassword.svelte";

  // import Administration from "./routes/Administration.svelte";
  export let onRouteLoaded;
  export let onConditionsFailed;

  const routes = {
    // Exact path
    "/": wrap({
      component: Homepage,
      userData: { route: "homepage" }
    }),
    "/admin": wrap({
      asyncComponent: () => import("./routes/Administration.svelte"),
      userData: { route: "admin" }
      // Add route pre conditions to ensure users are logged in https://github.com/ItalyPaleAle/svelte-spa-router/blob/master/Advanced%20Usage.md
      // conditions: []
    }),
    "/admin/chemicalDatabase": wrap({
      component: ChemicalDatabase,
      userData: { route: "chemicalDatabase" }
    }),
    "/admin/userManagement": wrap({
      component: UserManagement,
      userData: { route: "userManagement" }
    }),
    "/admin/changeLog": wrap({
      component: ChangeLog,
      userData: { route: "changeLog" }
    }),
    "/admin/accountDetails/changeEmail": wrap({
      component: ChangeEmail,
      userData: { route: "changeEmail" }
    }),
    "/admin/accountDetails/changePassword": wrap({
      component: ChangePassword,
      userData: { route: "changePassword" }
    }),
    "/admin/accountDetails": wrap({
      component: AccountDetails,
      userData: { route: "accountDetails" }
    })

    // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    // '*': NotFound,
  };
</script>

<Router
  on:routeLoaded={onRouteLoaded}
  on:onConditionsFailed={onConditionsFailed}
  {routes}
/>
