// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  posts: []
};

//to handle state
const getters = {
  // Gestripte data hier bepalen
};

//to handle actions
const actions = {
  getPosts({ commit }: { commit: Function }) {
    axios
      .get(
        "https://website-fabriek.online/index.php/wp-json/websitefabriek/v1/post"
      )
      .then(response => {
        commit("SET_POSTS", response.data);
      });
  }
};

//to handle mutations
const mutations = {
  SET_POSTS(state: any, posts: any) {
    state.posts = posts;
  }
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
