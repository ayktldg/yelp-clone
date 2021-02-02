import Vue from "vue";
import Vuex from "vuex";
import httpService from "../utils/axios";
import API from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
  },
  mutations: {
    GET_BUSINESSES(state, payload) {
      state.searchResult = payload;
      //state.searchResult.forEach(place => console.log(place.name, place.alias));
      console.log(state.searchResult);
    },
  },
  actions: {
    GET_BUSINESS({ commit }, payload) {
      httpService
        .get(`${API.BUSINESS_SEARCH}`, {
          headers: { Authorization: `Bearer ${API.API_KEY}` },
          params: { term: `${payload.term}`, location: `${payload.location}` },
        })
        .then((response) => {
          if (response) {
            commit("GET_BUSINESSES", response.data.businesses);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
