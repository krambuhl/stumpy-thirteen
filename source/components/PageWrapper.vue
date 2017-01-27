<template>
  <div id="app" class="page-wrapper">
    <mast-head class="page-wrapper_mast"></mast-head>
    <wrapper id="content" class="page-wrapper_content">
      <slot></slot>
    </wrapper>
  </div>
</template>

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .page-wrapper_mast {}
  .page-wrapper_content {
    padding-top: 3em;
    padding-bottom: 2em;
    text-align: center;

    @media (--small) { padding-top: 4em; }
    @media (--medium) { padding-top: 5em; }
  }
</style>

<script>
  import Root from 'Tags/Root';
  import Icon from 'Tags/Icon';

  import Wrapper from 'Tags/Wrapper';
  import MastHead from 'Components/MastHead';

  export default {
    components: {
      Wrapper,
      MastHead
    }
  }
</script>
