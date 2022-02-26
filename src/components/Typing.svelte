<script>
  import { draw, fade } from "svelte/transition";
  import { characters } from "../shared/constant";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<svg
  class="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
  viewBox="0 0 276 97"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
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
