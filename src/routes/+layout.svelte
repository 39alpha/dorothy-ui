<script lang="ts">
  import '$lib/styles/main.scss';
  import Navigation from '$lib/components/Navigation.svelte';
</script>

<header>
  <div>
    <h1>
      <a href="/">Dorothy</a>
    </h1>
  </div>
  <Navigation />
</header>
<main>
  <div>
    <slot></slot>
  </div>
</main>
<footer>
</footer>

<style lang="scss">
@import "$lib/styles/variables", "$lib/styles/mixins";

header {
  min-height: $spacing-unit * 1.865;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  margin-top: $spacing-unit;
}

main {
  display: block;
}

main div {
  @include wrapper($narrow-content-width);
}
</style>
