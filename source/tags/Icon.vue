<template>
  <svg class="icon" :class="['icon--' + name]">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<style>
  .icon {
    display: inline-block;
  }

  .icon--fill {
    background-color: var(--color-dark);
  }
</style>

<script>
  export default {
    props: {
      name: { type: String, required: true }
    }
  }
</script>
