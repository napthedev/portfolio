<script>
  import { onMount } from "svelte";
  import { canvasImages } from "../shared/constant";
  import { fade } from "svelte/transition";

  let canvas;

  onMount(() => {
    const images = canvasImages.map((source) => {
      const image = document.createElement("img");
      image.src = source;
      return image;
    });

    let ctx = canvas.getContext("2d");

    class Particle {
      constructor(x, y, dx, dy, angle, size, image) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.angle = angle;
        this.size = size;
        this.image = image;
      }

      update() {
        if (this.x < this.size / 2) this.dx = -this.dx;
        if (this.x > innerWidth - this.size / 2) this.dx = -this.dx;
        if (this.y < this.size / 2) this.dy = -this.dy;
        if (this.y > innerHeight - this.size / 2) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
        this.angle += 1;

        this.draw();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.drawImage(
          this.image,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }
    }

    let particles = [];

    const setup = () => {
      if (innerWidth < 768) return;
      const SIZE = 50;
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
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      particles.forEach((particle) => {
        particle.update();
      });
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

  @media (max-width: 768px) {
    canvas {
      display: none;
    }
  }
</style>
