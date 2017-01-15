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

  const content = require.context('Content/portfolio/', true, /\.vue$/);
  const getComponent = name => content('./' + name + '.vue');

  export default {
    components: {
      PageWrapper,
      Heading,
      ImageSet
    },
    data() {
      return {
        data: getComponent(this.$route.params.projectId).data()
      }
    },
    computed: {
      title: function() { return this.data.title },
      year: function() { return this.data.year },
      company: function() { return this.data.company },
      companyHref: function() { return this.data.companyHref },
      projectHref: function() { return this.data.projectHref },
      projectImages: function() { return this.data.projectImages }
    },
    watch: {
      '$route' (to, from) {
        console.log(from, to);
      }
    }
  }
</script>
