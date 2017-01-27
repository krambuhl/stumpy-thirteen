<template>
  <rhythm class="open-source">
    <page-heading>
      <heading class="open-source_title">Open source code</heading>
      <p>I maintain and contribute to a number of open source projects.</p>
    </page-heading>

    <heading tagName="h2"><span>29</span> NPM repositories</heading>
    <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>
    <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>

    <heading tagName="h3"><span>109</span> Github repositories</heading>
    <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>
    <p>Lorem ipsum Irure amet Excepteur adipisicing laborum in deserunt nulla ex nostrud amet amet pariatur et anim id enim fugiat ullamco culpa ut laborum laborum aliquip dolore veniam incididunt anim deserunt cillum ut sint aliquip ad veniam in.</p>
  </rhythm>
</template>

<style>
  .open-source {
  }

  .open-source_title {
    color: var(--color-blue);
  }

</style>

<script>
  import PageHeading from 'Components/PageHeading';
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  export default {
    meta: {
      pageTitle: 'Open Source Code - Stumptown Bear'
    },
    components: {
      PageHeading,
      Heading,
      Rhythm
    }
  }
</script>
