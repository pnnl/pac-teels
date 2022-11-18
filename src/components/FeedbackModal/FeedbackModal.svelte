<style>
  .feedback-modal {
    height:45rem;
    width: 42.5rem;
    right: 2rem;
    top:5rem;
    position:absolute;
    z-index:99;
  }
  .red {
    color: red;
  }
  .message-container {
    min-height: 8rem;
    margin-bottom:2rem;
  }
  .button-container{
    height: 5rem;
    gap: 1rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    flex-wrap: nowrap;
  }
  pre{
    margin-bottom:.5rem;
    margin-top:2rem;
  }
</style>

<script lang="ts">
  import Textfield from "@smui/textfield";
  import Button, { Label } from "@smui/button";
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { mainComponentHTMLSelector } from "constants/constants";
  import Paper, { Content } from "@smui/paper";
  import Dropbox from "components/Dropbox/Dropbox.svelte";
  import IconButton from "@smui/icon-button";

  let email: string = "";
  let message: string = "";
  let inputsFilled = false;
let invalid = false;

  $:{
    if(email.length> 0 && invalid === false && message.length > 0){
        inputsFilled = true
    }
    else{
        inputsFilled = false;
    }
  }

  const dispatch = createEventDispatcher();

  const handleClose =()=>{
dispatch("close")
  }
</script>

<div class="feedback-modal">
  <Paper>
    <Content>
          <IconButton
            action="close"
            class="material-icons"
            size="button"
            style={"color:var(--blue); right:1rem;top:1rem; position:absolute;"}
            on:click={() => dispatch("close")}>close</IconButton
          >
      <h1>Send Feedback</h1>
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
        > </Textfield>
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
        >
        </Textfield>
      </div>
      <div>
        <pre class="message">Attachments<span class="grey">(optional)</span></pre>

        <Dropbox />
      </div>

      <div class="button-container">
        <Button
        disabled={inputsFilled === false}
        variant="raised">
            Submit
        </Button>
        <Button on:click={()=>handleClose()}>
            Cancel
        </Button>


      </div>
    </Content>
  </Paper>
</div>
