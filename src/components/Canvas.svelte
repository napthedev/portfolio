<script>
  import { onMount } from "svelte";
  import { canvasImages } from "../shared/constant";
  import { fade } from "svelte/transition";

  export let setExtraTextVisible;

  let canvas;

  onMount(() => {
    const images = canvasImages.map((source) => {
      const image = document.createElement("img");
      image.src = source;
      return image;
    });

    let ctx = canvas.getContext("2d");

    const mouse = {
      x: -1000,
      y: -1000,
    };

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + Math.abs(canvas.getBoundingClientRect().top);
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    class Particle {
      constructor(x, y, dx, dy, angle, size, image) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.angle = angle;
        this.size = size;
        this.image = image;
        this.mouseTouched = false;
        this.opacity = 1;
        this.scale = 1;
      }

      update() {
        if (this.x < this.size / 2) this.dx = -this.dx;
        if (this.x > innerWidth - this.size / 2) this.dx = -this.dx;
        if (this.y < this.size / 2) this.dy = -this.dy;
        if (this.y > innerHeight - this.size / 2) this.dy = -this.dy;

        if (this.mouseTouched) {
          this.angle += 10;
          this.opacity -= 0.01;
          this.scale -= 0.01;
        } else {
          this.x += this.dx;
          this.y += this.dy;
          this.angle += 1;
        }
        this.draw();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.globalAlpha = this.opacity > 0 ? this.opacity : 0;
        ctx.drawImage(
          this.image,
          (-this.size / 2) * this.scale,
          (-this.size / 2) * this.scale,
          this.size * this.scale,
          this.size * this.scale
        );
        ctx.restore();
      }
    }

    let particles = [];

    let expectedSize = Math.round(innerWidth / 20);
    let SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;

    const setup = () => {
      let expectedSize = Math.round(innerWidth / 20);
      SIZE = expectedSize < 30 ? 30 : expectedSize > 50 ? 50 : expectedSize;

      particles = images.map(
        (image) =>
          new Particle(
            SIZE + Math.random() * (innerWidth - SIZE * 2),
            SIZE + Math.random() * (innerHeight - SIZE * 2),
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            0,
            SIZE,
            image
          )
      );

      canvas.width = innerWidth;
      canvas.height = innerHeight;
      setExtraTextVisible(false);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      if (
        particles.length > 0 &&
        particles.every((particle) => particle.opacity < 0)
      ) {
        setExtraTextVisible(true);
      }
      particles = particles.filter((particle) => particle.opacity > 0);

      let isCursorPointer = false;
      particles.forEach((particle) => {
        particle.update();

        if (
          Math.abs(mouse.x - particle.x) < SIZE / 2 &&
          Math.abs(mouse.y - particle.y) < SIZE / 2
        ) {
          particle.mouseTouched = true;
          isCursorPointer = true;
        }
      });

      canvas.style.cursor = isCursorPointer ? "pointer" : "default";
    };

    setup();
    animate();

    window.addEventListener("resize", setup);
  });
</script>

<canvas in:fade={{ delay: 1800 }} bind:this={canvas} />

<style>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.7;
  }
</style>
