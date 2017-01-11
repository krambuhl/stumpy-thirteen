<template>
  <div :class="variants"><slot /></div>
</template>

<script>
  import Vue from 'vue';
  import createVariants from 'Utils/createVariants';

  export default {
    computed: {
      variants: function() {
        return createVariants('rhythm--', this.variant)
      }
    },
    props: {
      variant: { type: String, default: 'normal' }
    }
  };
</script>

<style>
  .rhythm--small > * + * { margin-top: 0.5em; }
  .rhythm--normal > * + * { margin-top: 1em; }
  .rhythm--large > * + * { margin-top: 1.5em; }
</style>
