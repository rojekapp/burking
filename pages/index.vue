<template>
  <div>
    <!-- Start of add menu -->
    <b-row class="mb-4">
      <b-col sm="12" md="6">
        <b-card v-b-modal.modal-add-food id="food__click" class="add-menu">
          <b-row>
            <b-col class="my-auto">
              Tambahkan: 
          
              <h3 class="title">
                Makanan
              </h3>
            </b-col>

            <b-col class="my-auto text-center">
              <i class="fa fa-drumstick-bite"></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col sm="12" md="6">
        <b-card v-b-modal.modal-add-drink id="drink__click" class="add-menu">
          <b-row>
            <b-col class="my-auto">
              Tambahkan:

              <h3 class="title">
                Minuman
              </h3>
            </b-col>

            <b-col class="my-auto text-center">
              <i class="fa fa-mug-hot"></i>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <!-- End of add menu -->

    <b-row class="mb-4">
      <b-col>
        <b-card>
          <h5 class="mb-4">
            <i class="fa fa-book mr-2"></i> Daftar Menu Burjo King
          </h5>
          
          <p><strong>Makanan:</strong></p>
          <TableFood />
          <br>
          <p><strong>Minuman:</strong></p>
          <TableDrink />
        </b-card>
      </b-col>
    </b-row>

    <!-- Start of modals -->
    <ModalFood />

    <ModalDrink />

    <ModalMenuPicture />
    <!-- End of modals -->
  </div>  
</template>

<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  
</style>
