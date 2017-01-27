<template>
  <nav class="navigation">
    <router-link
      class="navigation_item navigation_item--portfolio"
      to="/portfolio">Portfolio</router-link>

    <router-link
      class="navigation_item navigation_item--open-source"
      to="/open-source">Open Source</router-link>

    <router-link
      class="navigation_item navigation_item--say-hello"
      to="/say-hello">Say Hello</router-link>
  </nav>
</template>

<style>
  .navigation {
    display: flex;
  }

  .navigation_item {
    display: block;
    padding: var(--size-padding-half);
    border-bottom: 2px solid transparent;
    line-height: 1.2em;
    text-decoration: none;

    @media (--small) {
      padding-left: var(--size-padding);
      padding-right: var(--size-padding);
    }

    &.is-active-route { border-bottom: 2px solid var(--color-dark); }
  }

  .navigation_item--portfolio {
    color: var(--color-green);
    &.is-active-route { border-bottom: 2px solid var(--color-green); }
  }

  .navigation_item--open-source {
    color: var(--color-blue);
    &.is-active-route { border-bottom: 2px solid var(--color-blue); }
  }

  .navigation_item--say-hello {
    color: var(--color-red);
    &.is-active-route { border-bottom: 2px solid var(--color-light); }
  }
</style>
