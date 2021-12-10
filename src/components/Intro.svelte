<script>
  import Typing from "./Typing.svelte";
  import Canvas from "./Canvas.svelte";

  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="container">
  {#if visible}
    <Canvas />
  {/if}
  <Typing />
  {#if visible}
    <p in:fade={{ delay: 1600 }}>I'm a frontend developer</p>
  {/if}
</div>

<style>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 20px;
  }

  p {
    font-size: 30px;
    text-align: center;
    z-index: 10;
    margin: 0;
  }
</style>
