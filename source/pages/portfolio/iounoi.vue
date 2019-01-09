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
  import image from 'Assets/portfolio/iounoi.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'IOUNOI - Stumptown Bear'
    },
    data() {
      return {
        title: 'IOUNOI',
        year: 2014,
        company: 'Stumptown Bear',
        companyHref: 'http://stumptownbear.com',
        projectHref: 'http://iounoi.com',
        projectImages: [{
          alt: 'IOUNOI Logo',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
