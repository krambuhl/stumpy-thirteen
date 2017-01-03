<template>
  <div>
    <h1>Portfolio</h1>
    <p>A sampling of my contributions as a web developer and desginer</p>
    <div class="Porfolio_list">
      <article v-for="project in projects" class="Portfolio_project">
        <a :href="'portfolio/' + project.href">{{project.data.title}}</a>
        <p><img :src="project.data.thumbnail.src" :srcset="project.data.thumbnail.srcSet" /></p>
      </article>
    </div>
  </div>
</template>

<style scoped>
div { background-color: blue; }
h1 { font-weight: 300; }
</style>
