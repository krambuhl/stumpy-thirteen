<template>
  <wrapper class="page-heading" variant="no-padding">
    <rhythm variant="small">
      <slot></slot>
    </rhythm>
  </wrapper>
</template>

<style>
  .page-heading {
    font-size: 1em;
    padding-bottom: 2em;

    & p {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    @media (--tiny) {
      & p { width: 70%; }
    }

    @media (--small) {
      font-size: 1.25em;
      & p { width: 60%; }
    }

    @media (--medium) {
      font-size: 1.5em;
      & p { width: 50%; }
    }
  }
</style>

<script>
  import Wrapper from 'Tags/Wrapper';
  import Rhythm from 'Tags/Rhythm';
  import Heading from 'Tags/Heading';
  export default {
    components: {
      Heading,
      Rhythm,
      Wrapper
    },
    props: {
      title: { type: String }
    }
  }
</script>
