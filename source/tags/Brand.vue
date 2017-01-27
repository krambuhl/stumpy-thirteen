<template>
  <div class="brand">
    <icon class="brand_icon" name="brand" />
    <span class="brand_text">Stumptown<span>Bear</span></span>
  </div>
</template>

<style>
  :root {
    --ratio: calc(30.7 / 18.6);
  }

  .brand {
    display: flex;
    align-items: center;
  }

  .brand_icon {
    display: block;
    font-size: 1.2em;
    height: 1em;
    width: calc(1em * var(--ratio));

    @media (--tiny) {
      display: inline-block;
    }
  }

  .brand_text {
    display: none;
    margin-left: 0.5em;
    line-height: 1em;

    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.025em;

    & span {
      font-weight: 900;
    }

    @media (--tiny) {
      display: inline;
    }
  }


</style>

<script>
  import Icon from './Icon';
  export default {
    components: {
      Icon
    }
  }
</script>
