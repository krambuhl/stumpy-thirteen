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
  import image from './assets/juniper-rap-battle.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Data Center Rap Battle - Stumptown Bear'
    },
    data() {
      return {
        title: 'Juniper Data Center Rap Battle',
        year: 2014,
        company: 'John McNeil Studio',
        companyHref: 'http://www.johnmcneilstudio.com/',
        projectHref: 'http://datacenterrapbattle.com/',
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
