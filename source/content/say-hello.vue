<template>
  <rhythm class="say-hello" variant="huge">
    <rhythm variant="small" class="say-hello_heading">
      <heading tagName="h1">So you want to say hello?</heading>
      <p>I've been known to use social media and internet services. Send me a message and we can get weird.</p>
    </rhythm>

    <rhythm variant="small">
      <p>
        Email
        <span class="say-hello_arrow">&mdash;&gt;</span>
        <a href="mailto:evan.krambuhl@gmail.com" target="_blank">evan.krambuhl@gmail.com</a>
      </p>
      <p>
        Twitter
        <span class="say-hello_arrow">&mdash;&gt;</span>
        <a href="https://twitter.com/evan_is" target="_blank">@evan_is</a>
        </p>
      <p>
        Github
        <span class="say-hello_arrow">&mdash;&gt;</span>
        <a href="https://github.com/krambuhl" target="_blank">krambuhl</a>
      </p>
      <p>
        NPM
        <span class="say-hello_arrow">&mdash;&gt;</span>
        <a href="https://www.npmjs.com/~krambuhl" target="_blank">krambuhl</a>
      </p>
    </rhythm>

    <rhythm class="say-hello_message" variant="small">
      <p>I'm currently not looking for work, but I'd love to talk with you about what you're working on.</p>
    </rhythm>
  </rhythm>
</template>

<style>
  .say-hello {
    color: var(--color-light);

    & a {
      color: var(--color-light);
    }

    & hr,
    & p {
      margin-left: auto;
      margin-right: auto;
      max-width: 480px;
    }

    & hr {
      margin-top: 2em;
      margin-bottom: 2em;
      height: 2px;
      border: none;
      background-color: color(var(--color-light) alpha(30%));
    }
  }

  .say-hello_heading {
    padding-bottom: 0em;
  }

  .say-hello_arrow {
    letter-spacing: -0.5em;
    margin-left: 0.25em;
    margin-right: 1em;
  }

  .say-hello__body {
    background-color: var(--color-red);
  }

  .say-hello_message {
    opacity: 0.6;
  }
</style>

<script>
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  import Wrapper from 'Tags/Wrapper';

  export default {
    meta: {
      bodyClass: 'say-hello__body body--dark',
      pageTitle: 'Hola Señor - Stumptown Bear'
    },
    data() {
      return {
      }
    },
    components: {
      Heading,
      Rhythm,
      Wrapper
    }
  }
</script>
