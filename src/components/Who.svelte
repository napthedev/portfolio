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

    tl.fromTo("#who .title", { fontSize: 60 }, { fontSize: 30 });

    tl.fromTo("#who img", { opacity: 0, x: -20 }, { opacity: 1, x: 0 });

    tl.fromTo("#who #role", { opacity: 0, y: 20 }, { opacity: 1, y: 0 });

    tl.fromTo("#who #story", { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
  });
</script>

<div
  class="flex gap-[5vw] bg-dark-lighten px-[5vw] lg:px-[15vw] z-[2] h-screen items-center justify-center flex-col md:flex-row"
  id="who"
>
  <img class="w-[225px] h-[225px] rounded-full" src="/avatar.jpg" alt="" />
  <div>
    <h1 class="title text-[40px]" style="font-size: 40px;">Who I'm I?</h1>

    <div class="text-3xl flex gap-[10px] mt-[15px] mb-[25px]" id="role">
      <span class="h-[35px]">A</span>
      <div class="h-[35px]">
        {#key role}
          <p
            class="relative after:w-full after:h-1 after:rounded after:bg-primary after:absolute after:top-[105%] after:left-1/2 after:-translate-x-1/2 after:animate-expand-delay"
            transition:slide={{ duration: 300 }}
          >
            {role}
          </p>
        {/key}
      </div>
    </div>

    <p class="text-lg text-gray-200" id="story">
      My name is Nguyen Anh Phong. I'm {new Date().getFullYear() - 2007} years old.
      I am living in Hanoi, Vietnam. I have started learning web development since
      I was 13 and I really enjoy it. I have made a lot of projects since then, from
      a basic html page to a complex project like a react library. I hope I could
      be a great developer and get a good job in the future.
    </p>
  </div>
</div>
