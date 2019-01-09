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
  import image from 'Assets/portfolio/webtrends-today.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Webtrends Today - Stumptown Bear'
    },
    data() {
      return {
        title: 'Webtrends Today',
        year: 2012,
        company: 'Webtrends',
        companyHref: 'https://www.webtrends.com/',
        projectHref: undefined,
        projectImages: [{
          alt: 'Webtrends Today app screen',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
