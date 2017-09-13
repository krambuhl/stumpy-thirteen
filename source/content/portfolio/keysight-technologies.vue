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
  import imageOverview from './assets/keysight-overview.png';
  import imageFamily from './assets/keysight-family.png';
  import imageBundle from './assets/keysight-bundle.png';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Keysight Technologies - Stumptown Bear'
    },
    data() {
      return {
        title: 'Keysight Technologies',
        year: 2016,
        company: 'ConnectiveDX',
        companyHref: 'https://www.connectivedx.com/',
        projectHref: 'https://www.keysight.com/us/en/software/application-sw.html',
        projectImages: [{
          alt: 'Product bundle page',
          asset: imageBundle
        }, {
          alt: 'Product family page',
          asset: imageFamily
        }, {
          alt: 'Product family overview page',
          asset: imageOverview
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
