import { BIconFileEarmarkWord } from 'bootstrap-vue'
import Vue from 'vue'

Vue.filter('encryptUserClientToken', (tokens) => {
  var token = tokens.split('');

  for (var i = token.length - 1; i >= 0; i--) {
    if (i > 2)
      token[i] = 'X';
  }

  return token.join('');
})