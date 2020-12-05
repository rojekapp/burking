<template>
  <div>
    <Navbar />

    <Sidebar />

    <section id="dashboard">
      <b-container>
        <b-row>
          <b-col class="my-3">
            <h1 class="title-page my-2">Dashboard Admin</h1>
          </b-col>
        </b-row>

        <Nuxt />
      </b-container>
    </section>
  </div>  
</template>

<script>
  import Navbar from '~/components/Navbar.vue';
  import Sidebar from '~/components/Sidebar.vue';

  export default {
    
  }
</script>

<style lang="scss">
  #dashboard {
    min-height: 100vh;
  }
</style>
