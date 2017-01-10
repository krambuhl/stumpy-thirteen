<script>
  import Vue from 'vue';

  export default {
    render: function(createElement) {
      return createElement(
        this.tagName,
        {
          class: 'Button',
          attrs: {
            href: this.href
          }
        },
        this.$slots.default
      )
    },
    props: {
      tagName: { type: String, default: 'button' },
      variant: { type: String },
      href: { type: String }
    }
  }
</script>

<style>
  .Button {
    background-color: red;
    border: none;
    padding: 1em;
    font-size: 1rem;
  }
</style>
