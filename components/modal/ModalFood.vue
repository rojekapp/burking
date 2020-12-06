<template>
  <b-modal id="modal-add-food" size="lg" title="Burjo King">
    <b-container fluid>
      <b-row class="mb-2">
        <b-col>
          <h5>Tambah Makanan</h5>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form @submit="addFood">
            <b-row>
              <b-col cols="3" class="label-container">
                <label for="food__nama">Nama :</label>
              </b-col>
              <b-col cols="9">
                <b-form-input id="food__nama" v-model="food.nama" type="text" required placeholder="contoh: Nasi Gila"></b-form-input>
              </b-col>

              <b-col cols="3" class="label-container">
                <label for="food__harga">Harga :</label>
              </b-col>
              <b-col cols="9">
                <b-form-input id="food__harga" v-model="food.harga" type="number" min="0" required placeholder="contoh: 200000"></b-form-input>
              </b-col>
              
              <b-col cols="3" class="label-container">
                <label for="food__foto">Foto :</label>
              </b-col>
              <b-col cols="9">
                <b-form-file accept="image/*" id="food__foto" v-model="food.foto" plain></b-form-file>
              </b-col>

              <b-col class="mt-3 text-center">
                <b-button type="submit" variant="primary" class="mb-2">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        food: {
          nama: '',
          kategori: 'makanan',
          harga: '',
          foto: null
        }
      }
    },

    methods: {
      addFood(e) {
        e.preventDefault();

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>