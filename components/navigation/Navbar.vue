<template>
  <header>
    <b-navbar class="fixed-top" toggleable="md" type="dark" variant="burjo-king">
      <!-- Start of sidebar toggle -->
      <b-button v-b-toggle.sidebar-admin variant="burjo-king">
        <i class="fa fa-bars"></i>
      </b-button>
      <!-- End of sidebar toggle -->

      <b-navbar-nav class="ml-auto">
        <b-navbar-brand href="#">Burjo King</b-navbar-brand>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </header>
</template>
  
<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  
</style>