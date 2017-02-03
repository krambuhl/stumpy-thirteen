<template>
  <wrapper class="portfolio-project" variant="wide">
    <page-heading>
      <heading class="portfolio-project_title">{{title}}</heading>
      <p>{{year}} with <a :href="companyHref" class="portfolio-project_company" target="_blank">{{company}}</a></p>
      <p v-if="projectHref" class="portfolio-project_btn-wrapper">
        <btn-link class="portfolio-project_btn" :href="projectHref" target="_blank">Visit project</btn-link>
      </p>
    </page-heading>

    <div class="portfolio-project_images">
      <div v-for="image in projectImages" class="portfolio-project_image">
        <image-set :alt="image.alt" :asset="image.asset" />
      </div>
    </div>
  </wrapper>
</template>

<style>
  .portfolio-project_title {
    color: var(--color-green);
  }

  .portfolio-project_company {
    color: var(--color-light);
  }

  .portfolio-project_btn-wrapper {
    font-size: 0.65em;
  }

  .portfolio-project_btn {
    margin-top: 1.25em;
  }

  .portfolio-project_images {
    margin-top: 1em;

    @media (--small) {
      margin-top: 2em;
    }

    @media (--medium) {
      margin-top: 4em;
    }
  }

  .portfolio-project_image {
    & + & { margin-top: 2em; }
    & > .image-set { width: 100%; }
  }

  .portfolio-project_body {
    background-color: var(--color-dark);
    color: var(--color-light);

    & .btn-link {
      border: 2px solid var(--color-green);
      color: var(--color-green);

      &:hover {
        background-color: var(--color-green);
        color: var(--color-light);
      }
    }
  }
</style>

<script>
  import PageHeading from 'Components/PageHeading';
  import ImageSet from 'Tags/ImageSet';
  import Heading from 'Tags/Heading';
  import BtnLink from 'Tags/BtnLink';
  import Wrapper from 'Tags/Wrapper';

  export default {
    meta: {
      bodyClass: 'portfolio-project_body body--dark'
    },
    components: {
      PageHeading,
      ImageSet,
      Heading,
      BtnLink,
      Wrapper
    },
    props: {
      title: String, //function() { return this.data.title },
      year: Number, //function() { return this.data.year },
      company: String, //function() { return this.data.company },
      companyHref: String, //function() { return this.data.companyHref },
      projectHref: String, //function() { return this.data.projectHref },
      projectImages: Array, //function() { return this.data.projectImages }
    }
  }
</script>
