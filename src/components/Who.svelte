<script>
  import { roles } from "../shared/constant";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let roleCount = 0;
  let role = roles[roleCount];

  onMount(() => {
    setInterval(() => {
      role = roles[++roleCount % roles.length];
    }, 2000);
  });
</script>

<main>
  <img src="https://i.imgur.com/rtFn0j4.jpg" alt="" />
  <div>
    <h1 style="font-size: 40px;">Who I'm I?</h1>

    <div style="display: flex; gap: 10px; margin: 30px 0;">
      <h1 style="height: 35px;">A</h1>
      <div style="height: 35px;">
        {#key role}
          <h1 class="underline" transition:slide={{ duration: 300 }}>{role}</h1>
        {/key}
      </div>
    </div>

    <p>My name is Nguyen Anh Phong</p>
    <p>I'm {new Date().getFullYear() - 2007} years old</p>
    <p>I am living in Hanoi, Vietnam</p>
    <p>I enjoy web development</p>
  </div>
</main>

<style>
  main {
    display: flex;
    gap: 5vw;
    background: #2c2c2c;
    padding: 50px 15vw;
  }

  img {
    width: 225px;
    height: 225px;
    border-radius: 100%;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 18px;
    color: #c5c5c5;
  }

  .underline {
    position: relative;
  }

  .underline::after {
    content: "";
    width: 100%;
    height: 4px;
    background: dodgerblue;
    position: absolute;
    top: 105%;
    left: 50%;
    transform: translate(-50%);
    animation: expand 0.4s ease-in-out 0.3s;
  }

  @keyframes expand {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
</style>
