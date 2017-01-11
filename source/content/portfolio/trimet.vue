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
  import trimetHomepageImage from './assets/trimet-homepage.jpg';

  export default {
    data: function() {
      return {
        pageTitle: 'Trimet.org - Stumptown Bear',
        title: 'Trimet.org redesign',
        year: 2015,
        company: 'TriMet',
        companyHref: 'http://trimet.org',
        projectHref: 'http://trimet.org',
        projectImages: [{
          alt: 'Trimet.org hompage tools',
          asset: trimetHomepageImage
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
