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
  import imageWebsite from './assets/pm-falling-sun-website.png';
  import imageCover from './assets/pm-falling-sun-cover.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'Precision Machines\' Falling Sun - Stumptown Bear'
    },
    data() {
      return {
        title: 'Precision Machines\' Falling Sun',
        year: 2016,
        company: 'Stumptown Bear',
        companyHref: 'http://stumptownbear.com',
        projectHref: 'http://pmisdead.com/fallingsun/',
        projectImages: [{
          alt: 'Falling Sun album cover',
          asset: imageCover
        }, {
          alt: 'Falling Sun website',
          asset: imageWebsite
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
