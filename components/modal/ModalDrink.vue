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
                <b-form-input id="drink__nama" v-model="drink.nama" type="text" required placeholder="contoh: soda gembira"></b-form-input>
              </b-col>

              <b-col cols="3" class="label-container">
                <label for="drink__harga">Harga :</label>
              </b-col>
              <b-col cols="9">
                <b-form-input id="drink__harga" v-model="drink.harga" type="number" min="0" required placeholder="contoh: 15000"></b-form-input>
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
  import axios from 'axios';
  import swal from 'sweetalert';

  const FormData = require('form-data');
  const fs = require('fs');

  export default {
    data() {
      return {
        drink: {
          nama: '',
          kategori: 'minuman',
          harga: '',
          file: null
        }
      }
    },

    methods: {
      addDrink(evt) {
        evt.preventDefault();

        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        });

        var file_name = this.drink.file.name;

        var data_menu = new FormData();
        data_menu.append('nama', this.drink.nama);
        data_menu.append('kategori', this.drink.kategori);
        data_menu.append('harga', this.drink.harga);
        data_menu.append('file', this.drink.file, file_name);

        axios({
          method: 'post',
          url: 'http://45.76.159.159:7300/menu/add',
          headers: {
            key: '',
          },
          data: data_menu
        }).then((response) => {
          this.$nextTick(() => {
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
          });

          swal('Menu berhasil ditambahkan!', 'Menu yang Anda masukkan telah ditambahkan pada database', 'success', {
            button: false,
            timer: 2500
          });
          
          console.log('Success adding menu');
          this.$store.commit('menus/fetchMenu');
        }).catch((err) => {
          this.$nextTick(() => {
            setTimeout(() => this.$nuxt.$loading.finish(), 500);
          });

          swal('Menu gagal ditambahkan', 'Maaf, terdapat error sehingga menu tidak bisa ditambahkan. Mohon coba beberapa saat lagi', 'error', {
            button: false,
            timer: 2500
          });

          console.error(err)
        });

        this.$bvModal.hide('modal-add-drink');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>