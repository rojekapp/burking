<template>
  <div>
    <Navbar />

    <Sidebar />

    <section id="dashboard">
      <b-container>
        <b-row>
          <b-col>
            <h1 class="title">Dashboard Admin</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>  
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  #dashboard {
    min-height: 100vh;
  }
</style>
