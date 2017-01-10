<template>
  <div id="app" class="PortfolioProject">
    <h1>{{title}}</h1>
    <p>{{year}} / <a v-bind:href="companyHref">{{company}}</a></p>
    <p><button v-bind:href="projectHref">visit website</button></p>

    <div class="PortfolioProject_images">
      <div v-for="image in projectImages" class="PortfolioProject_image">
        <img :alt="image.alt" :src="image.asset.src" :srcset="image.asset.srcSet" />
      </div>
    </div>
  </div>
</template>

<style>
  .PortfolioProject {
    background-color: red;
  }
</style>

<script>
  export default {
    name: 'portfolio-project',
    props: {
      title: String,
      year: Number,
      company: String,
      companyHref: String,
      projectHref: String,
      projectImages: Array
    }
  }
</script>
