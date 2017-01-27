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
  import image from './assets/juniper-deception-force.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Juniper Deception Force - Stumptown Bear'
    },
    data() {
      return {
        title: 'Juniper Deception Force',
        year: 2014,
        company: 'John McNeil Studio',
        companyHref: 'http://www.johnmcneilstudio.com/',
        projectHref: 'http://deceptionforce.com/',
        projectImages: [{
          alt: 'Landing page',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
