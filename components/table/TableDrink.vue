<template>
  <b-table hover :items="items" :fields="fields">
    <template #cell(index)="data">
      {{ data.index + 1 }}.
    </template>

    <template #cell(nama)="data">
      {{ data.item.nama | capitalizeFirstLetterOfEachWord }}
    </template>

    <template #cell(harga)="data">
      {{ data.item.harga | currencyIndonesiaFormat }}
    </template>

    <template #cell(foto)="data">
      <i @click="modalMenu(data)" class="fa fa-external-link-alt"></i>
    </template>
  </b-table>
</template>

<script>
  import { mapMutations } from 'vuex';
  import axios from 'axios';

  export default {
    data() {
      return {
        fields: [
          { key: 'index', label: 'No.' },
          { key: 'nama', sortable: true },
          { key: 'harga', sortable: true },
          { key: 'foto', sortable: false },
        ],

        items: []
      }
    },

    methods: {
      modalMenu(data) {
        this.$store.commit('menu/updateName', data.item.nama)
        this.$store.commit('menu/updateUrl', data.item.foto)

        this.$bvModal.show('modal-menu-picture');
      },

      async asyncDataMenu() {
        const { data } = await axios.post('http://45.76.159.159:7300/menu/list');
        this.items = data.minuman;
      },
    },

    mounted() {
      this.asyncDataMenu()

    }
  }
</script>

<style lang="scss" scoped>

</style>