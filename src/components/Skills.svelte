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
      "#skills .description",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    document.querySelectorAll("#skills .item").forEach((item) => {
      tl.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
    });
  });
</script>

<div
  class="h-screen px-[10vw] flex flex-col items-center justify-center z-[4]"
  id="skills"
>
  <h1 class="text-center text-[25px] lg:text-[40px]">My skills & Knowledge</h1>
  <p class="description text-lg text-center my-[30px]">
    Technologies and languages that I use to make my product everyday
  </p>
  <div
    class="grid justify-center grid-cols-4 lg:grid-cols-6 gap-y-[10px] md:gap-y-[20px]"
  >
    {#each skills as skill}
      <a
        href={skill.link}
        target="_blank"
        class="item flex flex-col items-center justify-around group"
      >
        <img
          class="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
          src={skill.icon}
          alt=""
        />
        <p class="text-center">{skill.name}</p>
      </a>
    {/each}
  </div>
</div>
