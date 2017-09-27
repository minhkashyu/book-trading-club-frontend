<template>
  <div class="ui fluid container site-footer">
    <p>Copyright &copy; {{ dtYear }} <a href="http://minhta.com.au" title="Home">Minh Ta</a>. All Rights Reserved.</p>
  </div>
</template>

<script>
  let dtDate = new Date()

  export default {
    name: 'site-footer',
    data () {
      return {
        dtYear: dtDate.getFullYear()
      }
    }
  }
</script>

<style scoped>
  .site-footer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: rgba(200, 200, 200, .8);
  }

  .site-footer p {
    color: #212121;
    text-align: center;
  }

  .site-footer p a {
    color: #212121;
    text-decoration: underline;
  }

  .site-footer p a:hover {
    color: #213e46;
  }

  @media only screen and (max-width: 767px) {
    .ui.fluid.container {
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
</style>