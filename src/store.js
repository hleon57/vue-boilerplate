import Vue from 'vue';
import Vuex from 'vuex';
// If needed to use route on store
// import router from './router';

/*
Axios template to create api variable
  const $http = axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
*/

// ** store.js should be used for GLOBAL state only
// ** for specific page related state add a module file on the modules folder and import it

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {},
  mutations: {},
  actions: {}
});
