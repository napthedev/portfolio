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

<div
  class="bg-dark-lighten flex flex-col justify-center min-h-screen overflow-hidden"
  id="projects"
>
  <h1 class="my-[40px] lg:my-[60px] text-center text-[25px] lg:text-[40px]">
    Some of my projects
  </h1>
  <div
    class="flex md:w-[400vw] items-stretch flex-col md:flex-row gap-[70px] md:gap-0 mb-[50px] md:mb-0"
  >
    {#each projects as project}
      <div
        class="item flex flex-col md:flex-row gap-[20px] md:gap-[100px] w-full px-[10vw]"
      >
        <div class="flex-1">
          <div
            class="relative before:absolute before:z-[-1] before:inset-[-2px] before:bg-[#888] before:rounded-[20px]"
          >
            <img
              class="rounded-[20px] border-[8px] border-black"
              src={project.image}
              alt=""
            />
          </div>
        </div>
        <div class="item-info flex-1">
          <h1 class="text-3xl">{project.name}</h1>
          <p class="text-[20px] text-justify my-3">{project.description}</p>

          <div class="flex gap-[5px]">
            {#each project.techs as tech}
              <img class="w-[30px] h-[30px]" src={tech} alt="" />
            {/each}
          </div>

          <div class="flex mt-[25px] gap-[20px]">
            <a
              href={project.link}
              target="_blank"
              class="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
            >
              <i class="bx bx-link-external text-[25px]" />
              <span> Live Demo</span>
            </a>
            <a
              href={project.git}
              target="_blank"
              class="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#0d1116] hover:bg-[#191e25]"
            >
              <i class="bx bxl-github text-[25px]" />
              <span> View Github</span>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
