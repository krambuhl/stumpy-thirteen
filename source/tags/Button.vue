<script>
  import Vue from 'vue';

  Vue.component('button', {
    render: (createElement) => (
      createElement(this.tagName, this.$slots.default)
    ),
    props: {
      tagName: { type: String, default: 'button' },
      variant: { type: String, }
    }
  });
</script>
