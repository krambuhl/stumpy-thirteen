<template>
  <page-wrapper class="portfolio-project" activeSection="portfolio">
    <heading tagName="h1">{{title}}</heading>
    <p>{{year}} / <a v-bind:href="companyHref">{{company}}</a></p>
    <p><button v-bind:href="projectHref">visit website</button></p>

    <div class="portfolio-project__images">
      <div v-for="image in projectImages" class="portfolio-project__image">
        <image-set :alt="image.alt" :asset="image.asset" />
      </div>
    </div>
  </page-wrapper>
</template>

<style>
  .portfolio-project { }
  .portfolio-project__images { }
  .portfolio-project__image > .image-set { width: 100%; }
</style>

<script>
  import PageWrapper from 'Components/PageWrapper';
  import Heading from 'Tags/Heading';
  import ImageSet from 'Tags/ImageSet';

  export default {
    props: {
      title: String,
      year: Number,
      company: String,
      companyHref: String,
      projectHref: String,
      projectImages: Array
    },
    components: {
      PageWrapper,
      Heading,
      ImageSet
    }
  }
</script>
