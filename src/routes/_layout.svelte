<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss">
  :global(:root) {
    @import "../styles/main.scss";
  }

  main {
    position: relative;
    max-width: 95vw;
    //background-color: rgb(52, 0, 73);
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
