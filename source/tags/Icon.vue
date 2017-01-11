<template>
  <i class="Icon" :class="['Icon_' + name]" />
</template>

<style>
  .Icon {}
</style>

<script>
  export default {
    props: {
      name: { type: String, required: true }
    }
  }
</script>
