<template>
  <page-wrapper class="say-hello" activeSection="say-hello">
    <rhythm>
      <heading tagName="h1">So you want to say hello?</heading>
      <p>I’ve been known to use social media and internet services. Just say hello.</p>
    </rhythm>
  </page-wrapper>
</template>

<style>
  .say-hello {
  }
</style>

<script>
  import PageWrapper from 'Components/PageWrapper';
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  export default {
    data: function() {
      return {
        pageTitle: 'Hola Señor - Stumptown Bear'
      }
    },
    components: {
      PageWrapper,
      Heading,
      Rhythm
    }
  }
</script>
