<style lang="scss">
  @import "../theme";
  .footer {
    width: 100%;
    min-height: 4rem;
    max-height: 4rem;
    box-shadow: none;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    background-color: var(--white);
    font-size: 0.75rem;
    margin-top: auto;
    z-index: 1;
    position: fixed;
  }
  .contact {
    display: flex;
    justify-self: flex-end;
    margin-left: auto;
    margin-right: 2rem;
  }
</style>

<script lang="ts">
</script>

<div class="footer">
  <div class="contact">
    <div style={"margin-right: 0.5rem;"}>Need Help?</div>
    <a
      style={"color: var(--blue); cursor: pointer; text-decoration: underline; user-select: none;margin-right: 0.5rem;"}
      href="mailto:NA-41FED@hq.doe.gov?subject=NA-41%20PAC%20TEELS"
      title="NA-41FED@hq.doe.gov"
    >
      Contact Us
    </a>
    <a
      style={"color: var(--blue); cursor: pointer; text-decoration: underline; user-select: none;"}
      href="mailto:NA-41@pnnl.gov?subject=NA-41%20PAC%20TEELS%20Database%20Download%20Request"
      title="NA-41@pnnl.gov"
    >
      Request Download
    </a>
  </div>
</div>
