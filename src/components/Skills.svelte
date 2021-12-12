<script>
  import { skills } from "../shared/constant";
</script>

<main class="section">
  <h1 style="text-align: center;">My skills & Knowledge</h1>
  <p style="font-size: 18px; margin-bottom: 60px; text-align: center;">
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
    padding: 100px 10vw;
    background: #1f1f1f;
  }

  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px 0;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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

  @media (max-width: 992px) {
    .container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 576px) {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 350px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
