<template>
  <h1>{{title}}</h1>
</template>

<script>
import Vue from 'vue';
Vue.component('heading', {
  render(createElement) {
    return createElement(
      this.tagName,
      this.$slots.default
    )
  },
  props: {
    tagName: { type: String, default: 'h3' },
    variant: { type: String, }
  }
});
</script>
