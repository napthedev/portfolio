<main>
  <p>
    Copyright &copy; 2021. <span class="hide-on-mobile"
      >Designed and coded by me</span
    >
  </p>

  <div>
    <p class="hide-on-mobile">Contact me:</p>
    <a href="https://github.com/napthedev" target="_blank">
      <i class="bx bxl-github" />
    </a>
    <a href="https://www.facebook.com/napthedev" target="_blank">
      <i class="bx bxl-facebook-circle" />
    </a>
    <a href="https://discord.com/users/877882975855992852" target="_blank">
      <i class="bx bxl-discord-alt" />
    </a>
  </div>
</main>

<style>
  main {
    background: #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;
    font-size: 18px;
    z-index: 10;
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    font-size: 35px;
    transition: 0.3s;
  }

  .bxl-github:hover {
    color: #c7c7c7;
  }

  .bxl-facebook-circle:hover {
    color: #0c8cf1;
  }

  .bxl-discord-alt:hover {
    color: #5965f2;
  }

  @media (max-width: 768px) {
    .hide-on-mobile {
      display: none;
    }
  }
</style>
