<template>
  <b-table hover :items="items" :fields="fields">
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
          { key: 'id', label: 'Nomor', sortable: true },
          { key: 'nama_makanan', sortable: true },
          { key: 'harga', sortable: true },
          { key: 'foto', sortable: false },
        ],

        items: [
          { id: 1, nama_makanan: 'test', harga: 'Rp220', foto: '45.76.159.159:7300/uploads/menu/bakmi_goreng.jpg' },
          { id: 2, nama_makanan: 'test2', harga: 'Rp12', foto: 'b' },
          { id: 3, nama_makanan: 'testketiga', harga: 'Rp2444', foto: 'c' }
        ]
      }
    },

    methods: {
      modalMenu(data) {
        this.$store.commit('menu/updateName', data.item.nama_makanan)
        this.$store.commit('menu/updateUrl', data.item.foto)

        this.$bvModal.show('modal-menu-picture');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>