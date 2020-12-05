<template>
  <b-modal id="modal-add-drink" size="lg" title="Burjo King">
    <b-container fluid>
      <b-row class="mb-2">
        <b-col>
          <h5>Tambah Minuman</h5>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form @submit="addDrink">
            <b-row>
              <b-col cols="3" class="label-container">
                <label for="drink__nama">Nama :</label>
              </b-col>
              <b-col cols="9">
                <b-form-input id="drink__nama" v-model="drink.nama" type="text" required placeholder="Masukkan nama minuman . . ."></b-form-input>
              </b-col>

              <b-col cols="3" class="label-container">
                <label for="drink__harga">Minuman :</label>
              </b-col>
              <b-col cols="9">
                <b-form-input id="drink__harga" v-model="drink.harga" type="text" required placeholder="Masukkan harga minuman . . ."></b-form-input>
              </b-col>
              
              <b-col cols="3" class="label-container">
                <label for="drink__foto">Foto :</label>
              </b-col>
              <b-col cols="9">
                <b-form-file accept="image/*" id="drink__foto" v-model="drink.foto" plain></b-form-file>
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
        drink: {
          nama: '',
          kategori: 'minuman',
          harga: '',
          foto: null
        }
      }
    },

    methods: {
      addDrink(e) {
        e.preventDefault();

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>