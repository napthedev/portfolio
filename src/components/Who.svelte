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
  <img src="https://ik.imagekit.io/nap/avatar_vjsgYooIu.jpg" alt="" />
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

    <p>
      My name is Nguyen Anh Phong. I'm {new Date().getFullYear() - 2007} years old.
      I am living in Hanoi, Vietnam. I have started learning web development since
      I was 13 and I really enjoy it. I have made a lot of projects since then, from
      a basic html page to a complex website like google minified or react library.
      I hope I could be a great developer and get a good job in the future.
    </p>
  </div>
</main>

<style>
  main {
    display: flex;
    gap: 5vw;
    background: #252525;
    padding: 100px 15vw;
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

  @media (max-width: 992px) {
    main {
      padding: 100px 5vw;
    }
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;
      align-items: center;
    }
  }

  .underline {
    position: relative;
  }

  .underline::after {
    content: "";
    width: 100%;
    height: 4px;
    background: #1e90ff;
    position: absolute;
    top: 105%;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    animation: expand 0.4s ease-in-out 0.3s forwards;
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
