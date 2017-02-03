<template>
  <div />
</template>

<style>
  * {
    transition: none 0.3s ease;
    box-sizing: border-box;
  }

  html {
    font-family: 'museo-sans-rounded', 'Arial Rounded MT Bold', Helvetica;
    font-weight: 500;
    font-size: 100%;

    @media (--small) { font-size: 110%; }
    @media (--medium) { font-size: 120%; }
  }

  body {
    min-height: 100vh;
    line-height: 1.6em;
  }

  p {
    line-height: 1.6em;
  }

  ul, ol {
    line-height: 1.2em;
  }

  a {
    color: var(--color-dark);
    text-decoration: underline;
  }
</style>

