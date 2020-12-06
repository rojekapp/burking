<template>
  <b-sidebar id="sidebar-admin" title="Admin Burjo King" bg-variant="grey" backdrop-variant="dark" backdrop shadow>
    <div class="py-2">
      <ul class="pl-0">
        <li v-for="navigation in navigations" :key="navigation.id">
          <nuxt-link :to="navigation.link" class="nuxt-link-active">
            <b-row>
              <b-col cols="1">
                <i :class="navigation.icon"></i>
              </b-col>
              <b-col>
                {{ navigation.page }}
              </b-col>
            </b-row>
          </nuxt-link>
        </li>
      </ul>
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
            link: '/pesanan',
            icon: 'fa fa-book',
            page: 'Daftar Pesanan'
          },
          {
            id: 3,
            link: '/user',
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