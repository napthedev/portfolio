<script>
  import Typing from "./Typing.svelte";
  import Canvas from "./Canvas.svelte";

  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";

  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  let visible = false;

  let extraTextVisible = false;
  const setExtraTextVisible = (payload) => (extraTextVisible = payload);

  onMount(() => {
    visible = true;
  });

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro",
        pin: true,
        scrub: 0.5,
        start: "top",
        end: "bottom",
      },
    });

    tl.fromTo(
      "#intro",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );
  });
</script>

<main id="intro">
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

  {#if visible}
    <div
      on:click={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      class="see-more"
    >
      <i in:fade={{ delay: 1600 }} class="bx bxs-chevrons-down" />
    </div>
  {/if}
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    z-index: 0;
  }

  p {
    font-size: 30px;
    text-align: center;
    z-index: 1;
    margin: 0;
  }

  .see-more {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    animation: up-down 1s infinite alternate;
  }

  i {
    font-size: 50px;
  }

  @keyframes up-down {
    from {
      bottom: 35px;
    }

    to {
      bottom: 60px;
    }
  }
</style>
