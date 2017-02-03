<template>
  <wrapper class="error-404">
    <page-heading>
      <heading>404</heading>
      <p>The li<span class="error-404_pun">bear</span>ian couldn't find the page you're looking for. He's too busy scratching his back.</p>
    </page-heading>
  </wrapper>
</template>

<style>
  .error-404 {
    padding-top: 2em;
    color: white;
  }

  .error-404_body {
    background-image: url('./assets/scratching-bear.gif');
    background-size: cover;
    background-position: 75% 0%;

    & .page-wrapper {
      background-color: color(var(--color-dark) alpha(75%));
    }
  }

  .error-404_pun {
    border-bottom: 2px solid color(var(--color-light) alpha(15%));
  }
</style>

<script>
  import PageHeading from 'Components/PageHeading';
  import Heading from 'Tags/Heading';
  import Wrapper from 'Tags/Wrapper';

  export default {
    meta: {
      pageTitle: 'Oh no! - Stumptown Bear',
      bodyClass: 'error-404_body body--dark'
    },
    components: {
      PageHeading,
      Heading,
      Wrapper
    }
  }
</script>
