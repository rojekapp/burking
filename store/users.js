export const state = () => ({
  list: []
});

export const mutations = {
  fetchUser(state) {
    state.list = [];

    this.$fire.firestore.collection('token').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        state.list.push(doc.data());
      });
    });
  }
};