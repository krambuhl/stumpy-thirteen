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
    line-height: 1.3em;
  }

  .heading--h1 {
    font-size: 2em;

    @media (--small) { font-size: 2.2em; }
    @media (--medium) { font-size: 2.4em; }
    @media (--large) { font-size: 2.6em; }
  }

  .heading--h2 { font-size: 1.8em; }
  .heading--h3 { font-size: 1.6em; }
  .heading--h4 { font-size: 1.4em; }
  .heading--h5 { font-size: 1.2em; }
  .heading--h6 { font-size: 1.1em; }
</style>
