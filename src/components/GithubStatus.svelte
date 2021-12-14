<main id="github-status">
  <h1 style="text-align: center; margin-bottom: 60px;">My Github Status</h1>
  <div>
    <img
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=napthedev&layout=compact&theme=tokyonight&langs_count=6"
      alt=""
    />
    <img
      src="https://github-readme-stats.vercel.app/api?username=napthedev&show_icons=true&theme=tokyonight"
      alt=""
    />
  </div>
</main>

<style>
  main {
    background: #1f1f1f;
    padding: 50px 10vw;
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  img {
    height: 200px;
    width: auto;
  }

  @media (max-width: 1200px) {
    img {
      height: 150px;
    }
  }

  @media (max-width: 992px) {
    main {
      padding: 50px 5vw;
    }
  }

  @media (max-width: 860px) {
    div {
      flex-direction: column;
      align-items: center;
    }

    img {
      height: auto;
      width: 100%;
      max-width: 500px;
    }
  }
</style>
