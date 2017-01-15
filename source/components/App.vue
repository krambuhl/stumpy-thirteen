<template>
  <router-view></router-view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    watch: {
      '$route': 'updateTitle'
    },
    methods: {
      updateTitle() {
        try {
          const title = this.$router.getMatchedComponents()[0].data().pageTitle;
          document.title = title;
        } catch(e) {
          document.title = 'Stumptown Bear';
        }
      }
    }
  }
</script>
