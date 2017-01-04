<script>
  import Vue from 'vue';

  Vue.component('heading', {
    render: (createElement) => (
      createElement(this.tagName, this.$slots.default)
    ),
    props: {
      tagName: { type: String, default: 'h3' },
      variant: { type: String, }
    }
  });
</script>
