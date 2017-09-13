<template>
  <wrapper class="say-hello" variant="wide">
    <rhythm variant="huge">
      <rhythm variant="small" class="say-hello_heading">
        <heading tagName="h1">So you want to say hello?</heading>
        <p>Send me a message and we can get to making.</p>
      </rhythm>

      <rhythm variant="small">
        <p>
          Email
          <span class="say-hello_arrow">&mdash;&gt;</span>
          <a href="mailto:evan.krambuhl@gmail.com" target="_blank">evan.krambuhl@gmail.com</a>
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
        <p>I'm currently looking for work! Here is my <a href="https://www.linkedin.com/in/evan-krambuhl-52007627" target="_blank">LinkedIn</a> profile and <a href="http://evan.krambuhl.com" target="_blank">Resume</a> to get the ball rolling.</p>
      </rhythm>
    </rhythm>
  </wrapper>
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
    margin-left: auto;
    margin-right: auto;
    max-width: 520px;
    padding: 1em;
    border-radius: 1em;
    color: var(--color-dark);
    background-color: var(--color-light);

    & a { color: var(--color-dark); }

    @media (--medium) {
      padding: 1.5em 2em;
    }
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
