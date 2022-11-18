<style>
  .red {
    color: red;
  }
  .message-container {
    min-height: 8rem;
    margin-bottom: 2rem;
  }
  .button-container {
    height: 8rem;
    gap: 1rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    flex-wrap: nowrap;
  }
  pre {
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }
</style>

<script lang="ts">
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { mainComponentHTMLSelector } from "constants/constants";
  import Dropbox from "components/Dropbox/Dropbox.svelte";
  import IconButton from "@smui/icon-button";
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";

  export let open;
  export let feedbackClose;

  let email: string = "";
  let message: string = "";
  let inputsFilled = false;
  let invalid = false;

  $: {
    if (email.length > 0 && invalid === false && message.length > 0) {
      inputsFilled = true;
    } else {
      inputsFilled = false;
    }
  }

  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch("close");
  };
</script>

<Dialog
  style={`
//   height: 45rem;
//     width: 43rem;
    padding: 1.5rem;
    z-index:13;`}
  bind:open
  on:SMUIDialog:closed={feedbackClose}
>
  <Content>
    <Header
      style={`
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
        `}
    >
      <IconButton
        action="close"
        class="material-icons"
        size="button"
        style={"color:var(--blue); "}
        on:click={() => dispatch("close")}>close</IconButton
      >
      <Title style={`padding:0;`}>Send Feedback</Title>
    </Header>
    <p>
      Found a bug we should fix? Have ideas of how we can improve your experience? We'd
      love to hear your feedback!
    </p>

    <div class="required-label"><span class="red">*</span> required field</div>
    <div>
      <pre class="email">Email<span class="red">*</span></pre>
      <Textfield
        variant="outlined"
        type="email"
        bind:invalid
        updateInvalid
        style="width: 100%;height:2.5rem;"
        bind:value={email}
        required
      />
    </div>
    <div class="message-container">
      <pre class="message">Message<span class="red">*</span></pre>
      <Textfield
        variant="outlined"
        input$rows={3}
        input$cols={80}
        textarea
        bind:value={message}
        input$resizable={false}
      />
    </div>
    <div>
      <pre class="message">Attachments<span class="grey">(optional)</span></pre>

      <Dropbox />
    </div>

    <div class="button-container">
      <Button
        disabled={inputsFilled === false}
        on:click={() => window.alert("Not yet implemented")}
        variant="raised"
      >
        Submit
      </Button>
      <Button on:click={() => handleClose()}>Cancel</Button>
    </div>
  </Content>
</Dialog>
