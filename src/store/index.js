import Vue from "vue";
import Vuex from "vuex";
import httpService from "../utils/axios";
import API from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
    businessInfo: {},
    businessDetail: {},
  },
  mutations: {
    GET_BUSINESSES(state, payload) {
      state.searchResult = payload;
    },
    SET_BUSINESS_INFO(state, payload) {
      state.businessInfo = payload;
    },
    GET_BUSINESS_DETAIL(state, payload) {
      state.businessDetail = payload;
      console.log(state.businessDetail)
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
        .then(() => commit("SET_BUSINESS_INFO", payload))
        .catch((error) => console.log(error));
    },
    GET_BUSINESS_DETAIL({ commit }, payload) {
      httpService
        .get(`${API.BUSINESS}${payload}`, {
          headers: { Authorization: `Bearer ${API.API_KEY}` },
        })
        .then((response) => {
          if (response) {
            commit("GET_BUSINESS_DETAIL", response.data);
          }
        })
        .catch((error) => console.log(error));
    }, 
  },
  getters: {
    getSearchResult: (state) => state.searchResult,
    getBusinessInfo: (state) => state.businessInfo,
    getBusinessDetail: (state) => state.businessDetail,
  },
  modules: {},
});
