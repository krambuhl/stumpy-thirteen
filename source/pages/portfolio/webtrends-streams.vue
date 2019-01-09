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
  import image from 'Assets/portfolio/webtrends-streams.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Webtrends Streams - Stumptown Bear'
    },
    data() {
      return {
        title: 'Webtrends Streams demo',
        year: 2012,
        company: 'Webtrends',
        companyHref: 'https://www.webtrends.com/',
        projectHref: undefined,
        projectImages: [{
          alt: 'Telegraph.co.uk streams demo',
          asset: image
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
