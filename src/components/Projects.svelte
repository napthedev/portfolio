<script>
  import { projects } from "../shared/constant";

  import { onMount } from "svelte";

  import gsap from "../shared/gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMount(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        let sections = gsap.utils.toArray("#projects .item");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#projects",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: "+=3500",
            pinSpacing: true,
          },
        });
      },
    });
  });
</script>

<main id="projects">
  <h1 class="title" style="margin-bottom: 60px; text-align: center;">
    Some of my projects
  </h1>
  <div class="container">
    {#each projects as project}
      <div class="item">
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
    background: #2a2a2a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .title {
    margin: 60px 0;
    text-align: center;
    font-size: 40px;
  }

  .container {
    display: flex;
    width: 400vw;
    align-items: stretch;
  }

  .item {
    display: flex;
    gap: 30px;
    width: 100vw;
    padding: 0 10vw;
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
    .item {
      padding: 0 10vw;
    }

    .title {
      font-size: 25px;
      margin: 40px 0 !important;
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column !important;
      width: 100vw !important;
      gap: 50px;
      margin-bottom: 50px;
    }

    .item {
      width: 80vw !important;
      flex-direction: column !important;
    }
  }
</style>
