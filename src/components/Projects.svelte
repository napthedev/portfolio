<script>
  import { projects } from "../shared/constant";
</script>

<main>
  {#each projects as project, index}
    <div
      class="item"
      style={`flex-direction: ${index % 2 ? "row" : "row-reverse"}`}
    >
      <div>
        <img style="width: 100%; height: auto;" src={project.image} alt="" />
      </div>
      <div>
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
</main>

<style>
  main {
    padding: 100px 10vw;
    background: #2a2a2a;
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
    main {
      align-items: center;
      gap: 100px;
    }

    .item {
      flex-direction: column !important;
      max-width: 500px;
    }
  }
</style>
