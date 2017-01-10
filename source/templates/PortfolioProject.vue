<template>
  <div id="app" class="PortfolioProject">
    <h1>{{title}}</h1>
    <p>{{year}} / <a v-bind:href="companyHref">{{company}}</a></p>
    <p><button v-bind:href="projectHref">visit website</button></p>
  </div>
</template>

<style>
  .PortfolioProject {
    background-color: red;
  }
</style>
