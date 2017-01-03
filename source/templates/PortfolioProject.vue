<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{year}} / <a v-bind:href="companyHref">{{company}}</a></p>
    <p><button v-bind:href="projectHref">visit website</button></p>
  </div>
</template>


<style scoped>
div { background-color: green; }
h1 { font-weight: 300; }
</style>
