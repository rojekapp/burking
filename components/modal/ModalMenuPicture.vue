<template>
    <b-modal id="modal-menu-picture" size="lg" title="Menu Burjo King">
    <b-container fluid>
      <b-row class="mb-2">
        <b-col class="text-center">
          <h5 id="menu__name" class="text-left">{{ this.$store.state.menu.name }}</h5>

          <img :src="'http://' + this.$store.state.menu.picture_url" alt="Menu Image" class="mt-3 mb-4 img-fluid">
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
  export default {
   
  }
</script>

<style lang="scss" scoped>

</style>