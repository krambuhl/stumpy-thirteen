<template>
  <div class="wrapper" :class="variants"><slot /></div>
</template>

<script>
  import Vue from 'vue';
  import createVariants from 'Utils/createVariants';

  export default {
    computed: {
      variants: function() {
        return createVariants('wrapper--', this.variant)
      }
    },
    props: {
      variant: { type: String, default: 'normal' }
    }
  };
</script>

<style>
  .wrapper {
    margin-left: auto;
    margin-right: auto;
    padding-left: 1em;
    padding-right: 1em;
  }

  .wrapper--narrow { max-width: 720px; }
  .wrapper--small { max-width: 960px; }
  .wrapper--normal { max-width: 1280px; }
  .wrapper--wide { max-width: 1680px; }

  .wrapper--no-padding {
    padding-left: 0em;
    padding-right: 0em;
  }
</style>
