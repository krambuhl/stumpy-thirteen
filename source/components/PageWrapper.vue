<template>
  <div id="app" class="page-wrapper">
    <mast-head class="page-wrapper_mast"></mast-head>
    <div id="content" class="page-wrapper_content">
      <transition name="fade">
        <slot></slot>
      </transition>
    </div>
  </div>
</template>

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .page-wrapper_mast {}
  .page-wrapper_content {
    padding-top: 3em;
    /* padding-bottom: 2em; */
    text-align: center;

    @media (--small) { padding-top: 4em; }
    @media (--medium) { padding-top: 5em; }
  }

  .fade-enter-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .fade-leave-active {
    display: none;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translate3d(0, 1.5em, 0);
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
