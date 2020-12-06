<template>
  <div>
    <!-- Start of message -->
    <b-row class="mb-4">
      <b-col cols="3" class="d-none d-md-block"></b-col>  

      <b-col sm="12" md="6">
        <b-card v-b-modal.modal-add-message id="message__click" class="add-menu">
          <b-row>
            <b-col class="my-auto">
              Tambahkan: 
          
              <h3 class="title">
                Notifikasi
              </h3>
            </b-col>

            <b-col class="my-auto text-center">
              <i class="fas fa-comment-alt"></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col cols="3" class="d-none d-md-block"></b-col>  
    </b-row>
    <!-- End of message -->

    <b-row class="mb-4">
      <b-col>
        <b-card>
          <h5 class="mb-4">
            <i class="fa fa-user mr-2"></i> Daftar User
          </h5>
          
          <TableUser />
        </b-card>
      </b-col>
    </b-row>

    <!-- Start of modal -->
    <ModalMessage />
    <!-- End of modal -->
  </div>
</template>

<script>
  export default {
    mounted() {

    } 
  }
</script>

<style lang="scss" scoped>

</style>