<script>
  import Intro from "./components/Intro.svelte";
  import Who from "./components/Who.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import GithubStatus from "./components/GithubStatus.svelte";
</script>

<main>
  <Intro />
  <Who />
  <Skills />
  <Projects />
  <GithubStatus />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
</style>
