<template>
  <img
    class="image-set"
    :src="asset.placeholder"
    :srcset="asset.srcSet"
    :alt="alt"
    :width="width"
    :height="height"
    :style="{ backgroundImage: `url(${asset.placeholder})` }" />
</template>

<style>
  .image-set {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 1em;
    border-radius: 4px;
    background-size: cover;
  }
</style>

<script>
  import Icon from './Icon';
  export default {
    props: {
      asset: { type: Object, require: true },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
    },
    components: {
      Icon
    }
  }
</script>
