<template>
  <container id="biography">
    <wrapper class="homepage" variant="wide">
      <rhythm variant="large">
        <heading tagName="h1">Why, hello there!</heading>

        <p>
          I am Evan Krambuhl and I make artifacts on the internet.
        </p>

        <p>
          We should make something together, take a look at my
          <router-link to="#portfolio" class="color-portfolio">portfolio</router-link>,
          or just <router-link to="#say-hello" class="color-sayhello">say hello</router-link>.
        </p>

        <wrapper class="homepage_image" variant="narrow no-padding">
          <image-set :asset="profileImage" alt="this is my face" />
        </wrapper>

        <heading tagName="h2">I like</heading>

        <ul class="rhythm--small">
          <li>Minimalism</li>
          <li>Maximalism</li>
          <li>Mentoring</li>
          <li>Javascript</li>
          <li>User Experience Design</li>
          <li>Functional Programming</li>
          <li>Data Visualization</li>
          <li>Mathmatics</li>
          <li>Music</li>
          <li>Drumming</li>
          <li>Audio Engineering</li>
          <li>Frank Zappa</li>
          <li>Franz Kafka</li>
          <li>Kurt Vonnegut</li>
          <li>Magical Realism</li>
          <li>Couch Surfing</li>
          <li>Tent Camping</li>
          <li>Gardening</li>
          <li>Board Games</li>
          <li>Almonds</li>
        </ul>
      </rhythm>
    </wrapper>
  </container>
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
      max-width: 440px;
      line-height: 1.4em;
    }
  }

  .homepage_image {
    margin-top: 2.5em;
    max-width: 320px;
    width: 50%;
  }

  .homepage_image img {
    border-radius: 100%;
  }

  .color-portfolio { color: var(--color-green); }
  .color-sayhello { color: var(--color-blue); }
</style>

<script>
  import Container from 'Tags/Container';
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  import ImageSet from 'Tags/ImageSet';
  import Wrapper from 'Tags/Wrapper';

  import profileImage from 'Assets/profile-photo.jpg';

  export default {
    meta: {
      pageTitle: 'Stumptown Bear'
    },
    data() {
      return {
        profileImage
      }
    },
    components: {
      Container,
      Heading,
      ImageSet,
      Rhythm,
      Wrapper
    }
  }
</script>
