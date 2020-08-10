<script>
  // import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss">
  :global(:root) {
    @import "../styles/main.scss";
  }

  main {
    position: relative;
    max-width: 95vw;
    padding: 1em 0px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .credit {
    position: fixed;
    bottom: 10px;
    left: 5px;
    z-index: 1;
    color: rgba(34, 34, 34, 0.95);
    text-decoration: none;
    font-size: 11px;
    font-weight: 400;
    font-style: italic;

    @media (max-width: 780px) {
      display: none;
    }
  }
</style>

<!-- <Nav {segment} /> -->

<main>
  <slot />

</main>
<a href="https://www.freepik.com/vectors/food" target="_blank" class="credit">
  Image from freepik
</a>
