<template>
  <div class="image-set">
    <img
      class="image-set_asset"
      :src="typeof asset === 'string' ? asset : asset.src"
      :srcset="asset.srcSet"
      :alt="alt"
      :width="width || height ? width : asset.width"
      :height="width || height ? height : asset.height"
      :style="{ backgroundImage: `url(${asset.placeholder})` }" />
    <div class="image-set_pusher" :style="{ paddingTop: ratio }"></div>
  </div>
</template>

<style>
  .image-set {
    position: relative;
    width: 100%;
    height: auto;
  }

  .image-set_asset {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 1em;
    background-size: cover;
  }
</style>

<script>
  import Icon from './Icon';
  export default {
    props: {
      asset: { require: true },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
    },
    components: {
      Icon
    },
    computed: {
      ratio: function() {
        return (this.asset.height / this.asset.width * 100) + '%';
      }
    }
  }
</script>
