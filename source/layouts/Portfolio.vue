<template>
  <container id="portfolio">
    <wrapper class="portfolio" variant="wide">
      <page-heading>
        <heading tagName="h1" class="portfolio_title">Portfolio</heading>
        <p>A sampling of my contributions as a web developer and designer</p>
      </page-heading>

      <div class="portfolio_list">
        <article v-for="project in projects">
          <router-link class="portfolio_project portfolio_project-link" :to="project.href">
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
    </wrapper>
  </container>
</template>

<style>
  .portfolio_title {
    color: var(--color-green);
  }

  .portfolio_list {
    @media (--small) {
      padding-top: 1em;
      column-count: 2;
      column-gap: 1em;

      & article {
        padding-top: 1em;
      }

      & article + article {
        /* margin-top: 1em; */
      }
    }

    @media (--medium) {
      column-count: 3;
    }

    @media (--large) {
      column-count: 4;
    }
  }

  .portfolio_project {
    position: relative;
    break-inside: avoid;
    border-radius: 6px;

    transition: background-color 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: var(--color-green) 0 0 0 3px;
    }

    &:active,
    &:hover,
    &:focus {
      & .portfolio_project-header {
        opacity: 1;
      }
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
    bottom: 0;
    z-index: 10;

    padding: var(--size-padding-double) var(--size-padding-double) 12em;
    font-size: 0.8em;
    text-align: left;

    border-radius: 4px;
    color: var(--color-light);
    background-image: linear-gradient(
      to bottom,
      color(var(--color-dark) alpha(100%)) 0%,
      color(var(--color-dark) alpha(80%)) 25%,
      color(var(--color-dark) alpha(0%)) 100%
    );

    transition: opacity 0.3s ease;
    opacity: 0;

    & a {
      color: var(--color-light);
    }
  }

  .portfolio_project-image {
    display: block;
  }
</style>

<script>
  import Container from 'Tags/Container';
  import PageHeading from 'Components/PageHeading';
  import Heading from 'Tags/Heading';
  import ImageSet from 'Tags/ImageSet';
  import Wrapper from 'Tags/Wrapper';

  // professional projects
  import trimet from 'Pages/portfolio/trimet';
  import spectrumHealth from 'Pages/portfolio/spectrum-health';
  import keysightTechnologies from 'Pages/portfolio/keysight-technologies';
  import caPortfolio from 'Pages/portfolio/ca-portfolio';
  import juniperDeceptionForce from 'Pages/portfolio/juniper-deception-force';
  import juniperRapBattle from 'Pages/portfolio/juniper-rap-battle';
  import webtrendsToday from 'Pages/portfolio/webtrends-today';
  import webtrendsStreams from 'Pages/portfolio/webtrends-streams';
  import webtrendsPrototypes from 'Pages/portfolio/webtrends-prototypes';

  // personal project
  import il7 from 'Pages/portfolio/il7';
  import iounoi from 'Pages/portfolio/iounoi';
  import precisionMachines from 'Pages/portfolio/precision-machines';
  import designPrototypes from 'Pages/portfolio/design-prototypes';

  export default {
    meta: {
      pageTitle: 'Portfolio - Stumptown Bear'
    },
    data() {
      return {
        projects: [
          Object.assign({ href: 'trimet' }, trimet.data()),
          Object.assign({ href: 'keysight-technologies' }, keysightTechnologies.data()),
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
      Container,
      PageHeading,
      Heading,
      ImageSet,
      Wrapper
    }
  }
</script>
