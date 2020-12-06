import axios from 'axios';

export const state = () => ({
  food_list: [],
  drink_list: []
});

export const mutations = {
  async fetchMenu(state) {
    const { data } = await axios.post('http://45.76.159.159:7300/menu/list');

    state.food_list = data.makanan;
    state.drink_list = data.minuman;
  }
};