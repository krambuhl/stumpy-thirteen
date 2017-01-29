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
  import image from './assets/precision-machines.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Precision Machines - Stumptown Bear'
    },
    data() {
      return {
        title: 'Precision Machines',
        year: 2014,
        company: 'Precision Machines',
        companyHref: 'http://pmisdead.com/',
        projectHref: 'http://pmisdead.com/fallingsun/',
        projectImages: [{
          alt: 'Falling Sun album cover',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
