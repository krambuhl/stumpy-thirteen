<template>
  <div class="portfolio">
    <page-heading>
      <heading tagName="h1" class="portfolio_title">Portfolio</heading>
      <p>A sampling of my contributions as a web developer and designer</p>
    </page-heading>

    <div class="portfolio_list">
      <article v-for="project in projects" class="portfolio_project">
        <router-link class="portfolio_project-link" :to="'/portfolio/' + project.href">
          <div class="portfolio_project-header">
            <heading tagName="h2">{{project.title}}</heading>
            <p>{{project.year}} / {{project.company}}</p>
          </div>

          <image-set
            class="portfolio_project-image"
            :alt="project.projectImages[0].alt"
            :asset="project.projectImages[0].asset" />
          </div>
        </router-link>
      </article>
    </div>
  </div>
</template>

<style>
  .portfolio_title {
    color: var(--color-green);
  }

  .portfolio_list {
    @media (--small) {
      margin-top: 1em;
    }

    @media (--medium) {
      margin-top: 2em;
      column-count: 2;
      column-gap: 0em;
    }
  }

  .portfolio_project {
    position: relative;
    break-inside: avoid;
    border-radius: 6px;
    margin-bottom: var(--size-padding-double);


    transition: background-color 0.3s ease;

    &:hover {
      background-color: color(var(--color-dark) alpha(20%));

      & .portfolio_project-header {
        opacity: 1;
      }
    }

    @media (--medium) {
      margin-bottom: 0;
      padding: var(--size-padding-half);
    }
  }

  .portfolio_project-link {
    display: block;
    text-decoration: none;
  }

  .portfolio_project-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    padding: var(--size-padding-double) var(--size-padding-double) 8em;
    font-size: 0.8em;
    text-align: left;

    border-radius: 6px;
    color: var(--color-light);
    background-image: linear-gradient(
      to bottom,
      color(var(--color-dark) alpha(95%)) 25%,
      color(var(--color-dark) alpha(0%)) 100%
    );

    transition: opacity 0.3s ease;
    opacity: 0;

    & a {
      color: var(--color-light);
    }

    @media (--medium) {
      padding: var(--size-padding-triple) var(--size-padding-triple) 8em;
    }
  }

  .portfolio_project-image {
    display: block;
  }
</style>

<script>
  import PageHeading from 'Components/PageHeading';
  import Heading from 'Tags/Heading';
  import ImageSet from 'Tags/ImageSet';

  // professional projects
  import trimet from './portfolio/trimet';
  import spectrumHealth from './portfolio/spectrum-health';
  import caPortfolio from './portfolio/ca-portfolio';
  import juniperDeceptionForce from './portfolio/juniper-deception-force';
  import juniperRapBattle from './portfolio/juniper-rap-battle';
  import webtrendsToday from './portfolio/webtrends-today';
  import webtrendsStreams from './portfolio/webtrends-streams';
  import webtrendsPrototypes from './portfolio/webtrends-prototypes';

  // personal project
  import il7 from './portfolio/il7';
  import iounoi from './portfolio/iounoi';
  import precisionMachines from './portfolio/precision-machines';
  import designPrototypes from './portfolio/design-prototypes';

  export default {
    meta: {
      pageTitle: 'Portfolio - Stumptown Bear'
    },
    data() {
      return {
        projects: [
          Object.assign({ href: 'trimet' }, trimet.data()),
          Object.assign({ href: 'spectrum-health' }, spectrumHealth.data()),
          Object.assign({ href: 'ca-portfolio' }, caPortfolio.data()),
          Object.assign({ href: 'juniper-deception-force' }, juniperDeceptionForce.data()),
          Object.assign({ href: 'juniper-rap-battle' }, juniperRapBattle.data()),
          Object.assign({ href: 'webtrends-today' }, webtrendsToday.data()),
          Object.assign({ href: 'webtrends-streams' }, webtrendsStreams.data()),
          Object.assign({ href: 'webtrends-prototypes' }, webtrendsPrototypes.data()),
          Object.assign({ href: 'design-prototypes' }, designPrototypes.data()),
          Object.assign({ href: 'il7' }, il7.data()),
          Object.assign({ href: 'precision-machines' }, precisionMachines.data()),
          Object.assign({ href: 'iounoi' }, iounoi.data()),
        ]
      }
    },
    components: {
      PageHeading,
      Heading,
      ImageSet
    }
  }
</script>
