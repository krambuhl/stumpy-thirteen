<template>
  <rhythm class="open-source">
    <page-heading class="open-source_page-heading">
      <heading>Open source code</heading>
      <p>I maintain and contribute to a number of open source projects.</p>
    </page-heading>

    <wrapper class="open-source_section open-source_section--npm" variant="no-padding">
      <rhythm>
        <heading tagName="h2" class="open-source_sub-title">
          <span>{{npmData.length}}</span>
          NPM modules
        </heading>

        <rhythm variant="tiny">
          <div v-for="module in npmData" class="open-source_project">
            <a :href="module.url" target="_blank">{{module.name}}</a>
            <span class="open-source_dash">&ndash;</span>
            <strong class="open-source_version">{{module.version}}</strong>
            <span class="open-source_dash">&ndash;</span>
            {{module.description}}
          </div>
        </rhythm>
      </rhythm>
    </wrapper>

    <wrapper class="open-source_section open-source_section--github" variant="no-padding">
      <rhythm>
        <heading tagName="h3" class="open-source_sub-title">
          <span>{{githubData.length}}</span>
          Github repositories
        </heading>

        <rhythm variant="tiny">
          <div v-for="module in githubData" class="open-source_project">
            <a :href="module.url" target="_blank">{{module.fullname.replace('krambuhl/', '')}}</a>
            <span v-if="module.language" class="open-source_language">
              <span class="open-source_dash">&ndash;</span>
              {{module.language}}
            </span>
            <span v-if="module.description">
              <span class="open-source_dash">&ndash;</span>
              {{module.description}}
            </span>
          </div>
        </rhythm>
      </rhythm>
    </wrapper>
  </rhythm>
</template>

<style>
  .open-source {
    padding-left: 1em;
    padding-right: 1em;
  }

  .open-source_page-heading {
    & .heading { color: var(--color-blue); }
  }

  .open-source_sub-title {
    & span {
      display: inline-block;
      padding: 0.1em 0.7em 0 0.75em;
      font-size: 0.8em;
      line-height: 1.2em;

      position: relative;
      top: -0.05em;

      background-color: var(--color-dark);
      color: var(--color-light);
      border-radius: 100px;
    }
  }

  .open-source_dash {
    opacity: 0.25;
  }

  .open-source_section {
    text-align: left;

    & a {
      font-weight: 900;
      color: var(--color-blue);
    }

    & + .open-source_section {
      margin-top: 4em;
    }
  }

  .open-source_section--npm {
    font-size: 1.1em;
  }

  .open-source_project {
    padding-left: 1em;
    text-indent: -1em;

    line-height: 1.6em;

    @media (--medium) {
      padding-left: 2em;
      text-indent: -2em;
    }
  }

  .open-source_version,
  .open-source_language {
    color: color(var(--color-dark) lightness(50%));
  }

  .open-source_body {
    & .page-wrapper_content {
      padding-left: 0;
      padding-right: 0;
    }
  }

</style>

<script>
  import PageHeading from 'Components/PageHeading';
  import Heading from 'Tags/Heading';
  import Rhythm from 'Tags/Rhythm';
  import Wrapper from 'Tags/Wrapper';

  import npmData from 'data/npm';
  import githubData from 'data/github';

  export default {
    meta: {
      pageTitle: 'Open Source Code - Stumptown Bear',
      bodyClass: 'open-source_body'
    },
    data() {
      return {
        npmData,
        githubData
      }
    },
    components: {
      PageHeading,
      Heading,
      Rhythm,
      Wrapper
    }
  }
</script>
