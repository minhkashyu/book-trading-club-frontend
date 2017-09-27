<template>
  <div id="app">
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import siteFooter from './components/partials/SiteFooter'

  export default {
    name: 'app',
    components: [siteFooter]
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  @import url("./../semantic/dist/semantic.min.css");

  #app {
    font-family: "Roboto", "Helvetica", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
    margin-bottom: 60px;
  }
</style>
