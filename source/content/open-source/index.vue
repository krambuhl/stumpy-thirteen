<template>
  <page-wrapper class="open-source" activeSection="open-source">
    <rhythm>
      <heading tagName="h1">Open source code</heading>
      <p>I maintain and contribute to a number of open source projects</p>

      <heading tagName="h2"><span>29</span> NPM repositories</heading>
      <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>
      <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>

      <heading tagName="h3"><span>109</span> Github repositories</heading>
      <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>
      <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>
    </rhythm>
  </page-wrapper>
</template>

<style>
  .open-source {
  }
</style>

<script>
  import PageWrapper from 'Components/PageWrapper';
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  export default {
    data: function() {
      return {
        pageTitle: 'Open Source Code - Stumptown Bear'
      }
    },
    components: {
      PageWrapper,
      Heading,
      Rhythm
    }
  }
</script>
