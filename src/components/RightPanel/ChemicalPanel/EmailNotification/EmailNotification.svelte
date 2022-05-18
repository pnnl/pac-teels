<style>
  label {
    font-weight: 500;
    margin-bottom:.5rem;
    display:flex;
    text-transform:capitalize;
  }
  .email-modal-container {
    position: absolute;
    z-index: 99;
    background: #fff;
    width:32rem;
    height:13.5rem;
  }
  .button-container{
      display:flex;
      justify-content:flex-end;
      gap:1rem;
      margin-top:1.5rem;
  }
  .bottom-label{
      display:flex;
  }
  .email-input{
      height:2.5rem;
      border-radius:.25rem;
      width:-webkit-fill-available;
  }

</style>

<script lang="ts">
  import Button, { Icon, Label } from "@smui/button";
  import FormField from "@smui/form-field";
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { mainComponentHTMLSelector } from "constants/constants";
  import Paper, {Content} from "@smui/paper"
  export let parentReference: HTMLElement;

  const dispatch = createEventDispatcher();

  let componentReference;

  $: position = parentReference.getBoundingClientRect();

  const clickOutsideComponentHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (componentReference.contains(target) || target === componentReference) {
      return;
    }
    dispatch("close");
  };
  onMount(() => {
    /* portal to main element */
    document.querySelector(mainComponentHTMLSelector)?.appendChild(componentReference);
    /* add to the callback queue so it runs after the element has been added.
            Not doing this fires the click event when parent is clicked. */
    setTimeout(
      () => window.document.body.addEventListener("click", clickOutsideComponentHandler),
      0
    );
  });
  onDestroy(() => {
    window.document.body.removeEventListener("click", clickOutsideComponentHandler);
    // make a copy of the component reference so it doesn't get nulled out.
    const component = componentReference;
    // set a timeout to check to make sure the component was unmounted properly.
    // if a grandparent unmounts the parent component this can be lost
    setTimeout(() => {
      const mainComponent = document.querySelector(mainComponentHTMLSelector);
      if (mainComponent && component && mainComponent.contains(component)) {
        mainComponent.removeChild(component);
      }
    }, 0);
  });
</script>

<div
style="--top:{position.bottom}px; --left:{position.left + position.height}px"
bind:this={componentReference}
class="email-modal-container"
>
<Paper
>
<Content>
  <label for="email-input" >email</label>
  <input class="email-input" id="email-input"/>
  <div class="caption bottom-label">You will be notified if this chemical gets updated in the future</div>
  <div class="button-container">
    <Button variant="outlined" on:click={() => dispatch("close", {})}>
      <Label>cancel</Label>
    </Button>
    <Button variant="unelevated" on:click={() => window.alert("Not Implemented")}>
      <Icon class="material-icons">check</Icon>
      <Label>sign up for email updates</Label>
    </Button>
  </div>
</Content>
</Paper>
</div>