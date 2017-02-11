<template>
  <header class="mast-head" :class="{ 'is-floating': isFloating }">
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
    z-index: 100;

    background-color: var(--color-light);
    transition: box-shadow 0.3s ease;

    &.is-floating {
      box-shadow: color(var(--color-dark) alpha(20%)) 0 0 0.5em;
    }

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
    },
    data() {
      return {
        isFloating: false
      }
    },
    methods: {
      handleScroll() {
        this.isFloating = window.scrollY > 48;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>
