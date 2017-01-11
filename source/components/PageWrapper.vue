<template>
  <div id="app" class="page-wrapper">
    <mast-head class="page-wrapper__mast" :activeSection="activeSection"></mast-head>
    <wrapper id="content" class="page-wrapper__content">
      <slot></slot>
    </wrapper>
  </div>
</template>

<style>
  .page-wrapper {}
  .page-wrapper__mast {}
  .page-wrapper__content {
    padding-top: 2em;
    padding-bottom: 2em;
    text-align: center;
  }
</style>

<script>
  import MastHead from 'Components/MastHead';
  import Root from 'Tags/Root';
  import Wrapper from 'Tags/Wrapper';

  export default {
    props: {
      activeSection: { type: String }
    },
    components: {
      MastHead,
      Wrapper
    }
  }
</script>
