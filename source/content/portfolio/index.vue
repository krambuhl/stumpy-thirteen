<template>
  <div id="app" class="Portfolio">
    <h1>Portfolio</h1>
    <p>A sampling of my contributions as a web developer and desginer</p>
    <div class="Porfolio_list">
      <article v-for="project in projects" class="Portfolio_project">
        <a :href="'/portfolio/' + project.href">{{project.title}}</a>
        <p>
          <img
            width="320"
            :alt="project.projectImages[0].asset.alt"
            :src="project.projectImages[0].asset.src"
            :srcset="project.projectImages[0].asset.srcSet" />
        </p>
      </article>
    </div>
  </div>
</template>

<script>
import trimet from './trimet';

export default {
  data: function() {
    return {
      pageTitle: 'Portfolio - Stumptown Bear',
      projects: [
        Object.assign({ href: 'trimet' }, trimet.data()),
        Object.assign({ href: 'fuzzy-chainsaw' }, trimet.data()),
        Object.assign({ href: 'spectrum-health' }, trimet.data()),
        Object.assign({ href: 'ca-portfolio' }, trimet.data()),
        Object.assign({ href: 'juniper-deception-force' }, trimet.data()),
        Object.assign({ href: 'webtrends-today' }, trimet.data()),
        Object.assign({ href: 'webtrends-prototypes' }, trimet.data()),
        Object.assign({ href: 'webtrends-streams' }, trimet.data()),
        Object.assign({ href: 'juniper-rap-battle' }, trimet.data()),
        Object.assign({ href: 'personal-prototypes' }, trimet.data()),
        Object.assign({ href: 'il7' }, trimet.data()),
        Object.assign({ href: 'iounoi' }, trimet.data()),
        Object.assign({ href: 'precision-machines' }, trimet.data()),
      ]
    }
  }
}
</script>
