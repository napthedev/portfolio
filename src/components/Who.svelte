<script>
  import { roles } from "../shared/constant";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  import gsap from "../shared/gsap";

  let roleCount = 0;
  let role = roles[roleCount];

  onMount(() => {
    setInterval(() => {
      role = roles[++roleCount % roles.length];
    }, 2000);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#who",
        start: "top",
        end: "bottom",
        pin: true,
        scrub: 0.5,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      "#who .title",
      {
        fontSize: 60,
      },
      {
        fontSize: 30,
      }
    );

    tl.fromTo(
      "#who #avatar",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
      }
    );

    tl.fromTo(
      "#who #role",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    tl.fromTo(
      "#who #story",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  });
</script>

<main id="who">
  <img id="avatar" src="/avatar.jpg" alt="" />
  <div>
    <h1 class="title" style="font-size: 40px;">Who I'm I?</h1>

    <div id="role" style="display: flex; gap: 10px; margin: 30px 0;">
      <h1 style="height: 35px;">A</h1>
      <div style="height: 35px;">
        {#key role}
          <h1 class="underline" transition:slide={{ duration: 300 }}>{role}</h1>
        {/key}
      </div>
    </div>

    <p id="story">
      My name is Nguyen Anh Phong. I'm {new Date().getFullYear() - 2007} years old.
      I am living in Hanoi, Vietnam. I have started learning web development since
      I was 13 and I really enjoy it. I have made a lot of projects since then, from
      a basic html page to a complex project like a react library. I hope I could
      be a great developer and get a good job in the future.
    </p>
  </div>
</main>

<style>
  main {
    display: flex;
    gap: 5vw;
    background: #252525;
    padding: 0 15vw;
    z-index: 2;
    height: 100vh;
    align-items: center;
    justify-content: center;
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
      padding: 0 5vw;
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
