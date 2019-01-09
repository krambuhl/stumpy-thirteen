<template>
  <div class="container"><slot /></div>
</template>

<script>
  import Vue from 'vue';

  export default {
  };
</script>

<style>
  .container {
    padding-top: 4em;
    padding-bottom: 3em;
    display: flex;
    align-items: center;
  }

  .container + .container {
    border-top: 2px solid color(var(--color-light) shade(5%));
  }
</style>
