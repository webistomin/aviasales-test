import axios from 'axios';

export default {
  state: {
    tickets: [],
  },
  mutations: {
    saveTickets(state, payload) {
      state.tickets = payload;
    },
  },
  actions: {
    getTicketsFromServer({ commit }) {
      axios
        .get('http://localhost:3000/tickets')
        .then((response) => {
          commit('saveTickets', response.data);
        });
    },
  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },
  },
};
