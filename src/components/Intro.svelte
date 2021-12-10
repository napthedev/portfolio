<script>
  import Typing from "./Typing.svelte";
  import Canvas from "./Canvas.svelte";

  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  let extraTextVisible = false;
  const setExtraTextVisible = (payload) => (extraTextVisible = payload);

  onMount(() => {
    visible = true;
  });
</script>

<div class="container">
  {#if visible}
    <Canvas {setExtraTextVisible} />
  {/if}
  <Typing />
  {#if visible}
    <p in:fade={{ delay: 1600 }}>I'm a frontend developer</p>
  {/if}
  {#if extraTextVisible}
    <p in:slide>With a lot of knowledge collected</p>
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
