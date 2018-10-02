export default {
  state: {
    checkedCheckboxes: [],
  },
  mutations: {
    updateCheckedCheckboxes(state, payload) {
      state.checkedCheckboxes = payload;
    },
  },
  actions: {

  },
  getters: {
    getCheckedCheckboxes(state) {
      return state.checkedCheckboxes;
    },
  },
};
