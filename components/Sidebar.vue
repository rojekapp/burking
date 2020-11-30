<template>
  <b-sidebar id="sidebar-admin" title="Admin Burjo King" backdrop-variant="dark" backdrop shadow>
    <div class="px-3 py-2">
      <nuxt-link v-for="navigation in navigations" :key="navigation.id" :to="navigation.link">
        <b-row>
          <b-col cols="1">
            <i :class="navigation.icon"></i>
          </b-col>
          <b-col>
            {{ navigation.page }}
          </b-col>
        </b-row>
      </nuxt-link>
    </div>
  </b-sidebar>
</template>

<script>
  export default {
    data() {
      return {
        navigations: [
          {
            id: 1,
            link: '/',
            icon: 'fa fa-home',
            page: 'Beranda'
          },
          {
            id: 2,
            link: '/',
            icon: 'fa fa-book',
            page: 'Daftar Menu'
          },
          {
            id: 3,
            link: '/',
            icon: 'fa fa-user',
            page: 'User'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>