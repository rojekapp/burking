<template>
  <!-- !!! Still not working, only dummy !!! -->
  <b-modal id="modal-add-message" size="lg" title="SMS to Burjo King User">
    <b-container fluid>
      <b-row class="mb-2">
        <b-col>
          <h5>Tambah Pesan</h5>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form @submit="addMessage">
            <b-row>
              <b-col cols="3" class="label-container">
                <label for="message__title">Judul :</label>
              </b-col>
              <b-col cols="9">
                <b-form-input id="message__title" v-model="message.title" type="text" required placeholder="contoh: Diskon Besar!"></b-form-input>
              </b-col>

              <b-col cols="3" class="label-container">
                <label for="message__body">Body :</label>
              </b-col>
              <b-col cols="9">
                <b-form-textarea id="message__body" v-model="message.body"  rows="6" max-rows="10" required placeholder="contoh: Hari ini merupakan hari yang baik untuk makan di Burjo King. Yuk, order sekarang!"></b-form-textarea>
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
  import swal from 'sweetalert';

  export default {
    data() {
      return {
        message: {
          title: '',
          body: '',
        }
      }
    },

    methods: {
      addMessage(evt) {
        evt.preventDefault();

        this.$nextTick(() => {
          this.$nuxt.$loading.start()
            
          setTimeout(() => this.$nuxt.$loading.finish(), 1500);
        });

        setTimeout(() => {
          swal('Pesan terkirim!', 'Pesan telah berhasil dikirimkan pada semua user Burjo King', 'success', {
            button: false,
            timer: 2500
          });

          this.message.title = '';
          this.message.body = '';
          
          this.$bvModal.hide('modal-add-message');
        }, 1500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>