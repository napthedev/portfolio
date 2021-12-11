<script>
  import { draw, fade } from "svelte/transition";
  import { characters } from "../shared/constant";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<svg viewBox="0 0 276 97" fill="none" xmlns="http://www.w3.org/2000/svg">
  {#if visible}
    {#each characters as character, index}
      <path
        in:draw={{ duration: 1000, delay: index * 100 }}
        d={character}
        fill="none"
        stroke="#FFF"
        stroke-width="3"
      />
      <path in:fade={{ delay: 1000 + index * 100 }} d={character} fill="#FFF" />
    {/each}
  {/if}
</svg>

<style>
  svg {
    height: 10vw;
    max-height: 100px;
    min-height: 60px;
    max-width: 100vw;
    z-index: 10;
  }
</style>
