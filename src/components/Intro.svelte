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

<div class="h-screen flex justify-center items-center flex-col gap-5">
  {#if visible}
    <Canvas />
  {/if}
  <Typing />
  {#if visible}
    <p class="text-3xl text-center z-[1]" in:fade={{ delay: 1600 }}>
      I'm a frontend developer
    </p>
  {/if}

  {#if visible}
    <div
      class="absolute left-1/2 -translate-x-1/2 cursor-pointer animate-bounce bottom-6 show-more"
      on:click={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
    >
      <i in:fade={{ delay: 1600 }} class="bx bxs-chevrons-down text-5xl" />
    </div>
  {/if}
</div>

<style>
  .show-more {
    animation: bounce 0.7s infinite alternate;
  }

  @keyframes bounce {
    from {
      bottom: 35px;
    }

    to {
      bottom: 60px;
    }
  }
</style>
