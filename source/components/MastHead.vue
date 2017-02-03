<template>
  <header class="mast-head">
    <wrapper class="mast-head_container" variant="wide no-padding">
      <router-link class="mast-head_brand" to="/"><brand /></router-link>
      <navigation class="mast-head_navigation" />
    </wrapper>
  </header>
</template>

<style>
  .mast-head {
    position: fixed;
    top: 0;
    width: 100%;

    background-color: var(--color-light);
    z-index: 10;

    & + *::before {
      content: '';
      display: block;
      margin-top: 2.5em;
    }
  }

  .mast-head_container {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
  }

  .mast-head_brand {
    display: block;
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
    & .mast-head {
      background-color: var(--color-dark);
      & svg { fill: var(--color-light); }
    }
    & .brand { color: var(--color-light); }
  }

  .say-hello__body {
    & .mast-head {
      background-color: var(--color-red);
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
