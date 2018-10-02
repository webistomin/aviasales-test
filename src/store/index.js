import Vue from 'vue';
import Vuex from 'vuex';
import Tickets from './tickets';
import Filters from './filters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    Tickets,
    Filters,
  },
});
