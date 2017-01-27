<script>
  import Vue from 'vue';

  export default {
    render: function(createElement) {
      return createElement(
        this.tagName,
        {
          class: 'btn-link',
          attrs: {
            href: this.href,
            target: this.target
          }
        },
        this.$slots.default
      )
    },
    props: {
      tagName: { type: String, default: 'a' },
      variant: { type: String },
      href: { type: String },
      target: { type: String, default: '_self' }
    }
  }
</script>

<style>
  .btn-link {
    display: inline-block;
    border: 2px solid var(--color-light);
    border-radius: 2em;
    color: var(--color-light);
    padding: 0.25em 2em;
    text-decoration: none;

    &:hover,
    &:active {
      color: var(--color-dark);
      background-color: var(--color-light);
    }
  }
</style>
