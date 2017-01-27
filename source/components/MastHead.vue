<template>
  <header class="mast-head">
    <wrapper class="mast-head_container" variant="normal no-padding">
      <router-link class="mast-head_brand" to="/"><brand /></router-link>
      <navigation class="mast-head_navigation" />
    </wrapper>
  </header>
</template>

<style>
  .mast-head {
    position: relative;
  }

  .mast-head_container {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
  }

  .mast-head_brand {
    padding: var(--size-padding-half);
    text-decoration: none;
    color: black;

    @media (--small) {
      padding-left: var(--size-padding);
      padding-right: var(--size-padding);
    }
  }

  .mast-head_navigation {
  }

  .body--dark {
    & .mast-head svg { fill: var(--color-light); }
    & .brand { color: var(--color-light); }
  }

  .say-hello__body {
    & .mast-head {
      & a { color: var(--color-light); }
    }
  }
</style>

<script>
  import Navigation from 'Components/Navigation';
  import Brand from 'Tags/Brand';
  import Wrapper from 'Tags/Wrapper';

  export default {
    components: {
      Navigation,
      Brand,
      Wrapper
    }
  }
</script>
