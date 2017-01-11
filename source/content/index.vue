<template>
  <page-wrapper class="homepage" activeSection="homepage">
    <rhythm>
      <heading tagName="h1">Why, hello there!</heading>
      <p>
        I am Evan Krambuhl. <br />
        I make things on the internet.
      </p>
      <p>We should make something together, just say hello.</p>
      <div><image-set width="320" :asset="myFaceImage" alt="this is my face" /></div>

      <heading tagName="h2">I like</heading>
      <ul>
        <li @click="minimalismClick">Minimalism</li>
        <li>Unix philosophy</li>
        <li>Javascript and Node</li>
        <li>Functional Programming</li>
        <li>Open Source Coding</li>
        <li>User Interface Design</li>
        <li>Information Architecture</li>
        <li>Data Visualization</li>
        <li>Mathmatics</li>
        <li>Drumming</li>
        <li>Music</li>
        <li>Frank Zappa</li>
        <li>Audio Engineering</li>
        <li>Gardening</li>
        <li>Tent Camping</li>
        <li>Board Games</li>
        <li>Franz Kafka</li>
        <li>Kurt Vonnegut</li>
        <li>Sharing Knowledge</li>
        <li>Wizdom</li>
        <li>Fruits</li>
        <li>Vegetables</li>
      </ul>
    </rhythm>
  </page-wrapper>
</template>

<style>
  .homepage {
    & p {
      margin-left: auto;
      margin-right: auto;
      max-width: 480px;
    }
  }
</style>

<script>
  import PageWrapper from 'Components/PageWrapper';
  import Heading from 'Tags/Heading';
  import ImageSet from 'Tags/ImageSet';
  import Rhythm from 'Tags/Rhythm';

  import myFaceImage from './assets/my-face.jpg';

  export default {
    data: function() {
      return {
        pageTitle: 'Stumptown Bear',
        minimalismClick: function() {
          console.log('bye');
        },
        myFaceImage
      }
    },
    components: {
      PageWrapper,
      Heading,
      ImageSet,
      Rhythm
    }
  }
</script>
