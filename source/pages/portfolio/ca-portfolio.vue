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
  import imageHome from 'Assets/portfolio/ca-portfolio-home.jpg';
  import imageDevops from 'Assets/portfolio/ca-portfolio-devops.jpg';
  import imageBook from 'Assets/portfolio/ca-portfolio-book.jpg';

  export default {
    meta: {
      ...PortfolioProject.meta,
      pageTitle: 'CA Portfolio App - Stumptown Bear'
    },
    data() {
      return {
        title: 'CA Portfolio Application',
        year: 2014,
        company: 'John McNeil Studio',
        companyHref: 'http://www.johnmcneilstudio.com/',
        projectHref: 'http://portfolio.ca.com',
        projectImages: [{
          alt: 'Application landing page',
          asset: imageHome
        }, {
          alt: 'DevOps landing page',
          asset: imageDevops
        }, {
          alt: 'Portfolio sales book',
          asset: imageBook
        }]
      }
    },
    components: {
      PortfolioProject
    }
  }
</script>
