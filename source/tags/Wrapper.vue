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
  }

  .wrapper--narrow { max-width: 640px; }
  .wrapper--normal { max-width: 1080px; }
  .wrapper--wide { max-width: 1440px; }
</style>
