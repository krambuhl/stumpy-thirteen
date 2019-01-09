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
  import image from 'Assets/portfolio/design-prototype.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Design Prototypes - Stumptown Bear'
    },
    data() {
      return {
        title: 'Design Prototypes',
        year: 2012,
        company: 'Stumptown Bear',
        companyHref: 'http://stumptownbear.com',
        projectHref: undefined,
        projectImages: [{
          alt: 'Remix the things',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
