export const state = () => ({
  name: '',
  picture_url: ''
});

export const mutations = {
  updateName(state, payload) {
    state.name = payload;
  },

  updateUrl(state, payload) {
    state.picture_url = payload;
  }
};