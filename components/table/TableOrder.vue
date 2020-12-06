<template>
  <b-table hover :items="items" :fields="fields">
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
          // { key: 'id', label: 'Nomor', sortable: true },
          { key: 'user', sortable: true },
          { key: 'pesanan', sortable: true },
          { key: 'total_harga', sortable: true },
          { key: 'action', sortable: false },
        ],

        items: []
        // items: [
        //   { id: 1, pesanan: 'test', total_harga: 'Rp220', action: '45.76.159.159:7300/uploads/menu/bakmi_goreng.jpg' },
        //   { id: 2, pesanan: 'test2', total_harga: 'Rp12', action: 'b' },
        //   { id: 3, pesanan: 'testketiga', total_harga: 'Rp2444', action: 'c' }
        // ]
      }
    },

    

    methods: {
      
    },

    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

</style>