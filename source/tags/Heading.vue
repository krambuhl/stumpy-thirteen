<script>
  import Vue from 'vue';
  import createVariants from 'Utils/createVariants';

  export default {
    render: function(createElement) {
      return createElement(this.tagName, {
        class: ['heading', ...createVariants('heading--', this.variant || this.tagName)]
      }, this.$slots.default)
    },
    props: {
      tagName: { type: String, default: 'h1' },
      variant: { type: String }
    }
  };
</script>

<style>
  .heading {
    font-weight: bold;
  }
  .heading--h1 { font-size: 2em; }
  .heading--h2 { font-size: 1.8em; }
  .heading--h3 { font-size: 1.6em; }
  .heading--h4 { font-size: 1.4em; }
  .heading--h5 { font-size: 1.2em; }
  .heading--h6 { font-size: 1.1em; }
</style>
