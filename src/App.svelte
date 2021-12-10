<script>
  import Intro from "./components/Intro.svelte";
  import Who from "./components/Who.svelte";
  import Skills from "./components/Skills.svelte";
</script>

<main>
  <Intro />
  <Who />
  <Skills />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
</style>
