<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item navigation__item--portfolio" :class="{ 'is-active': isPortfolioActive }">
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
      <li class="navigation__item navigation__item--open-source" :class="{ 'is-active': isOpenSourceActive }">
        <router-link to="/open-source">Open Source</router-link>
      </li>
      <li class="navigation__item navigation__item--say-hello" :class="{ 'is-active': isSayHelloActive }">
        <router-link to="/say-hello">Say Hello</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
  .navigation {}
  .navigation__list {
    display: flex;
  }
  .navigation__item {
    & a {
      display: block;
      padding: 1em;
      text-decoration: none;
    }

    &.is-active {
      & a { text-decoration: underline; }
    }
  }
  .navigation__item--portfolio a { color: green; }
  .navigation__item--open-source a { color: blue; }
  .navigation__item--say-hello a { color: red; }
</style>

<script>
  export default {
    props: {
      activeSection: { type: String }
    },
    computed: {
      isPortfolioActive: function() { return this.activeSection === 'portfolio'; },
      isOpenSourceActive: function() { return this.activeSection === 'open-source'; },
      isSayHelloActive: function() { return this.activeSection === 'say-hello'; },
    }
  }
</script>
