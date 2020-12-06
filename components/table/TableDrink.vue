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
          { key: 'nama_minuman', sortable: true },
          { key: 'harga', sortable: true },
          { key: 'foto', sortable: false },
        ],

        items: []
        // items: [
        //   { id: 1, nama_minuman: 'test', harga: 'Rp220', foto: '45.76.159.159:7300/uploads/menu/bakmi_goreng.jpg' },
        //   { id: 2, nama_minuman: 'test2', harga: 'Rp12', foto: 'b' },
        //   { id: 3, nama_minuman: 'testketiga', harga: 'Rp2444', foto: 'c' }
        // ]
      }
    },

    

    methods: {
      modalMenu(data) {
        this.$store.commit('menu/updateName', data.item.nama_minuman)
        this.$store.commit('menu/updateUrl', data.item.foto)

        this.$bvModal.show('modal-menu-picture');
      },

      async asyncDataMenu() {
        const { data } = await axios.post('http://45.76.159.159:7300/menu/list');
        this.items = data;
      },
    },

    mounted() {
      this.asyncDataMenu().then(() => {
        console.log(this.items.minuman[0].nama)
      });

      // axios.post('http://45.76.159.159:7300/menu/list').then(() => {
      //   alert('sukses')
      // })
    }
  }
</script>

<style lang="scss" scoped>

</style>