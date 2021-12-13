<script>
  import { projects } from "../shared/constant";

  import { onMount } from "svelte";

  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    document.querySelectorAll("#projects .item").forEach((item) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "-=500px",
          end: "-=150px",
          scrub: 0.5,
        },
      });

      const img = item.querySelector("img");
      const info = item.querySelector(".item-info");

      tl.fromTo(
        img,
        {
          opacity: 0,
          y: 20,
        },
        { opacity: 1, y: 0, duration: 1 }
      );
      tl.fromTo(info, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
    });
  });
</script>

<main id="projects">
  <h1 style="margin-bottom: 60px; text-align: center;">
    Checkout some of my projects
  </h1>
  <div class="container">
    {#each projects as project, index}
      <div
        class="item"
        style={`flex-direction: ${index % 2 ? "row" : "row-reverse"}`}
      >
        <div>
          <img
            style="width: 100%; height: auto; transform-origin: bottom left;"
            src={project.image}
            alt=""
          />
        </div>
        <div class="item-info">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div style="display: flex; gap: 5px;">
            {#each project.techs as tech}
              <img style="width: 30px; height: 30px;" src={tech} alt="" />
            {/each}
          </div>

          <div style="display: flex; margin-top: 25px; gap: 20px;">
            <a href={project.link} target="_blank" class="link">
              <i class="bx bx-link-external" /> <span> Live Demo</span></a
            >
            <a href={project.git} target="_blank" class="git"
              ><i class="bx bxl-github" /> View Github
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    margin-top: 100vh;
    padding: 100px 10vw;
    background: #2a2a2a;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 150px;
  }

  .item {
    display: flex;
    gap: 30px;
  }

  .item > * {
    flex: 1;
  }

  h1 {
    margin: 0;
  }
  p {
    font-size: 20px;
    text-align: justify;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    height: 45px;
    padding: 0 15px;
    color: white;
    border-radius: 5px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .link {
    background: #1876d2;
  }

  .link:hover {
    background: #2884e0;
  }

  .git {
    background: #0d1116;
  }

  .git:hover {
    background: #1c232b;
  }

  i {
    font-size: 25px;
  }

  @media (max-width: 992px) {
    main {
      padding: 100px 5vw;
    }
  }

  @media (max-width: 768px) {
    .container {
      align-items: center;
      gap: 100px;
    }

    .item {
      flex-direction: column !important;
      max-width: 500px;
    }
  }
</style>
