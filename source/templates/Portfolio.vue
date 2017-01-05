<template>
  <div id="app" class="Portfolio">
    <h1>Portfolio</h1>
    <p>A sampling of my contributions as a web developer and desginer</p>
    <div class="Porfolio_list">
      <article v-for="project in projects" class="Portfolio_project">
        <a :href="'/portfolio/' + project.href">{{project.title}}</a>
        <p><img width="320" :src="project.thumbnail.src" :srcset="project.thumbnail.srcSet" /></p>
      </article>
    </div>
  </div>
</template>

<style>
  .Portfolio {
    background-color: #ddd;
  }
</style>
