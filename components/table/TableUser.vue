<template>
  <b-table hover :items="this.$store.state.users.list" :fields="fields">
    <template #cell(index)="data">
      {{ data.index + 1 }}.
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
          { key: 'index', label: 'No.'},
          { key: 'name', label: 'User', sortable: true },
          { key: 'token', label: 'Token ID', sortable: false },
        ],

        items: []
      }
    },

    methods: {
      
    },

    mounted() {
      this.$store.commit('users/fetchUser');
    }
  }
</script>

<style lang="scss" scoped>

</style>