/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    title: "PACTEELS"
  }
});

export default app;
