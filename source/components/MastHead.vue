<template>
  <header class="mast-head">
    <wrapper class="mast-head__container">
      <router-link class="mast-head__brand" :class="{'is-active':isHomepageActive}" to="/"><brand /></router-link>
      <navigation class="mast-head__navigation" :activeSection="activeSection" />
    </wrapper>
  </header>
</template>

<style>
  .mast-head {
    position: relative;
    border-bottom: 1px solid #eee;
    font-size: 0.85rem;
  }

  .mast-head__container {
    display: flex;
    justify-content: space-between;
  }

  .mast-head__brand {
    padding: 1em;
    text-decoration: none;
    color: black;

    &.is-active {
      text-decoration: underline;
    }
  }

  .mast-head__navigation {
  }
</style>

<script>
  import Navigation from 'Components/Navigation';
  import Brand from 'Tags/Brand';
  import Wrapper from 'Tags/Wrapper';

  export default {
    props: {
      activeSection: { type: String }
    },
    computed: {
      isHomepageActive: function() { return this.activeSection === 'homepage' }
    },
    components: {
      Navigation,
      Brand,
      Wrapper
    }
  }
</script>
