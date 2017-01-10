<template>
  <div id="app" class="Homepage">
    <ul>
      <li><a href="/portfolio">portfolio</a></li>
      <li><a href="/open-source">open source</a></li>
      <li><a href="/say-hello">say hello</a></li>
    </ul>

    <h1>Why, hello!</h1>
    <p>
      I am Evan Krambuhl <br />
      I make things on the internet
    </p>
    <p>We should make something together, just say hello.</p>
    <p><img width="320" src="./assets/my-face.jpg" alt="this is my face" /></p>

    <h2>I like</h2>
    <ul>
      <li @click="minimalismClick">Minimalism</li>
      <li>Unix philosophy</li>
      <li>Javascript and Node</li>
      <li>Functional Programming</li>
      <li>Open Source Coding</li>
      <li>User Interface Design</li>
      <li>Information Architecture</li>
      <li>Data Visualization</li>
      <li>Mathmatics</li>
      <li>Drumming</li>
      <li>Music</li>
      <li>Frank Zappa</li>
      <li>Audio Engineering</li>
      <li>Gardening</li>
      <li>Tent Camping</li>
      <li>Board Games</li>
      <li>Franz Kafka</li>
      <li>Kurt Vonnegut</li>
      <li>Sharing Knowledge</li>
      <li>Wizdom</li>
      <li>Fruits</li>
      <li>Vegetables</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageTitle: 'Stumptown Bear',
      minimalismClick: function() {
        console.log('bye');
      }
    }
  }
}
</script>
