<template>
  <portfolio-project
    :title="title"
    :year="year"
    :company="company"
    :companyHref="companyHref"
    :projectHref="projectHref"
    :projectImages="projectImages" />
</template>

<script>
  import PortfolioProject from 'Components/PortfolioProject';
  import image from 'Assets/portfolio/il7.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'IL7 Logo - Stumptown Bear'
    },
    data() {
      return {
        title: 'IL7 Logo',
        year: 2014,
        company: 'Stumptown Bear',
        companyHref: 'http://stumptownbear.com',
        projectHref: 'https://github.com/il7',
        projectImages: [{
          alt: 'IL7 Logo',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
