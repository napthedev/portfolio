<script>
  import { skills } from "../shared/constant";

  import { onMount } from "svelte";

  import gsap from "../shared/gsap";

  onMount(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top",
        end: "bottom",
        pin: true,
        scrub: 0.5,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      "#skills #skills-description",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );

    document.querySelectorAll("#skills .item").forEach((item) => {
      tl.fromTo(
        item,
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
  });
</script>

<main id="skills">
  <h1 class="title">My skills & Knowledge</h1>
  <p id="skills-description">
    Technologies and languages that I use to make my product everyday
  </p>
  <div class="container">
    {#each skills as skill}
      <a href={skill.link} target="_blank" class="item">
        <img src={skill.icon} alt="" />
        <p>{skill.name}</p>
      </a>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 0 10vw;
    height: 100vh;
    background: #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;
  }

  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px 0;
  }

  .title {
    text-align: center;
    font-size: 40px;
    margin: 0;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .item p {
    text-align: center;
  }

  img {
    width: 60px;
    height: 60px;
    transition: 0.3s;
  }

  a:hover img {
    transform: scale(110%);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #skills-description {
    font-size: 18px;
    text-align: center;
    margin: 30px 0;
  }

  @media (max-width: 992px) {
    .container {
      grid-template-columns: repeat(4, 1fr);
    }

    .title {
      font-size: 25px;
    }
  }

  @media (max-width: 768px) {
    .container {
      gap: 10px 0;
    }
  }
</style>
