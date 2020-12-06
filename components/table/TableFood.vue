<template>
  <b-table hover :items="this.$store.state.menus.food_list" :fields="fields">
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

  export default {
    data() {
      return {
        fields: [
          { key: 'index', label: 'No.' },
          { key: 'nama', sortable: true },
          { key: 'harga', sortable: true },
          { key: 'foto', sortable: false },
        ]
      }
    },

    methods: {
      modalMenu(data) {
        this.$store.commit('menuModal/updateName', data.item.nama)
        this.$store.commit('menuModal/updateUrl', data.item.foto)

        this.$bvModal.show('modal-menu-picture');
      }
    },

    mounted() {
      this.$store.commit('menus/fetchMenu');
    }
  }
</script>

<style lang="scss" scoped>

</style>