
<style>
    .dropbox {
        padding: 0.5rem;
        display: flex;
        gap: 0.5rem;
        border-radius:.25rem;
        border: dashed 0.125rem;
        border-color: var(--blue);
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .upload {
        color: var(--blue);
    }
    .button-container{
        padding-top:.5rem;
    }
</style>
<script lang="ts">
  import Button, { Label } from "@smui/button";

    let dropZone: any;
    export let files: any = [];
    let fileInputRef: any;

    function handleDragDrop(e) {
        e.preventDefault();
        const dropped = e.dataTransfer.files;
        files.push([...dropped]);
    }

    const handleInputFilesSelected = (event) => {
        event.preventDefault();

        const eventFiles = event.target.files;
        files.push([...eventFiles]);
    };

    const handleBrowseFiles = () => {
        fileInputRef.click();
    };

</script>


<div class="dropbox" on:drop={handleDragDrop} bind:this={dropZone} on:dragover={()=>""}>
    <span class="upload material-icons">upload</span>
    <div>Drag and drop file here</div>
    <div>or</div>
    <input
        bind:this={fileInputRef}
        type="file"
        id="file"
        multiple={true}
        on:change={handleInputFilesSelected}
        style={`
        display: none
    `}
    />
    <div class="button-container">
    <Button on:click={handleBrowseFiles}><Label>Click to browse files</Label></Button>
</div>
</div>
