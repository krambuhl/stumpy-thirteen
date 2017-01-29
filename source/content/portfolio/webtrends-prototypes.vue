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
  import image from './assets/webtrends-prototype.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Webtrends Prototypes - Stumptown Bear'
    },
    data() {
      return {
        title: 'Webtrends Prototypes',
        year: 2012,
        company: 'Webtrends',
        companyHref: 'https://www.webtrends.com/',
        projectHref: undefined,
        projectImages: [{
          alt: 'Employee Dashboard',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
