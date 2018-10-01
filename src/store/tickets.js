import axios from 'axios';

export default {
  state: {
    tickets: [],
    currentCurrency: 'rub',
    rates: [],
  },
  mutations: {
    saveTickets(state, payload) {
      state.tickets = payload;
    },
    saveRates(state, payload) {
      state.rates = payload;
    },
    updateCurrentCurrency(state, payload) {
      state.currentCurrency = payload;
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
    getCurrencyRate({ commit }) {
      axios
        .get('https://openexchangerates.org/api/latest.json?app_id=6e424dc97db64b71a5b924881fb2b447')
        .then((response) => {
          commit('saveRates', response.data);
        });
    },
  },
  getters: {
    getTickets(state) {
      return state.tickets;
    },
    getRates(state) {
      return state.rates.rates;
    },
    getCurrentCurrency(state) {
      return state.currentCurrency;
    },
  },
};
