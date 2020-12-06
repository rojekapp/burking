import Vue from 'vue'

Vue.filter('currencyIndonesiaFormat', (number) => {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
})