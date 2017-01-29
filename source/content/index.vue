<template>
  <rhythm class="homepage" variant="large">
    <heading tagName="h1">Why, hello there!</heading>

    <p>
      I am Evan Krambuhl. <br />
      I make things on the internet.
    </p>

    <p>
      We should make something together, just
      <router-link to="/say-hello">say hello</router-link>.
    </p>

    <wrapper class="homepage_image" variant="narrow">
      <image-set :asset="myFaceImage" alt="this is my face" />
    </wrapper>

    <heading tagName="h2">I like</heading>
    <ul class="rhythm--small">
      <li>Minimalism</li>
      <li>Unix philosophy</li>
      <li>Javascript and Node</li>
      <li>Functional Programming</li>
      <li>Open Source Coding</li>
      <li>User Interface Design</li>
      <li>Information Architecture</li>
      <li>Data Visualization</li>
      <li>Mathmatics</li>
      <li>Music</li>
      <li>Drumming</li>
      <li>Frank Zappa</li>
      <li>Audio Engineering</li>
      <li>Tent Camping</li>
      <li>Gardening</li>
      <li>Board Games</li>
      <li>Franz Kafka</li>
      <li>Kurt Vonnegut</li>
      <li>Sharing Knowledge</li>
      <li>Wizdom</li>
      <li>Fruits</li>
      <li>Vegetables</li>
    </ul>
  </rhythm>
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
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  import ImageSet from 'Tags/ImageSet';
  import Wrapper from 'Tags/Wrapper';

  import myFaceImage from './assets/my-face.jpg';

  export default {
    meta: {
      pageTitle: 'Home - Stumptown Bear'
    },
    data() {
      return {
        myFaceImage
      }
    },
    components: {
      Heading,
      ImageSet,
      Rhythm,
      Wrapper
    }
  }
</script>
