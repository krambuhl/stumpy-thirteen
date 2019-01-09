<template>
  <div>
    <biography />
    <portfolio />
    <say-hello />
  </div>
</template>

<style>
  .homepage {
    font-size: 1em;
    margin-bottom: 2em;

    & p {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }

    @media (--tiny) {
      & p { width: 55%; }
    }

    @media (--small) {
      font-size: 1.25em;

      & p { width: 50%; }
    }

    @media (--medium) {
      font-size: 1.5em;
    }

    & p {
      margin-left: auto;
      margin-right: auto;
      max-width: 480px;
      line-height: 1.4em;
    }
  }

  .homepage_image {
    margin-top: 2.5em;
  }
</style>

<script>
  import Biography from 'Layouts/Biography';
  import Portfolio from 'Layouts/Portfolio';
  import SayHello from 'Layouts/SayHello';

  import myFaceImage from 'Assets/my-face.jpg';

  export default {
    meta: {
      pageTitle: 'Stumptown Bear'
    },
    components: {
      Biography,
      Portfolio,
      SayHello
    }
  }
</script>
