import Vue from "vue";
import Vuex from "vuex";
import httpService from "../utils/axios";
import API from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
    businessInfo: {}
  },
  mutations: {
    GET_BUSINESSES(state, payload) {
      state.searchResult = payload;
      //state.searchResult.forEach(place => console.log(place.name, place.alias));
      console.log(state.searchResult);
      console.log(payload);
    },
    SET_BUSINESS_INFO(state,payload) {
      state.businessInfo = payload;
      console.log(state.businessInfo)
    }
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
        .then(() => commit("SET_BUSINESS_INFO", payload))
        .catch((error) => console.log(error));
    },
  },
  getters: {
    getSearchResult: (state) => state.searchResult,
    getBusinessInfo: state => state.businessInfo
  },
  modules: {},
});
