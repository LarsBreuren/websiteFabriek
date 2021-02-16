import Vue from "vue";
import Vuex from "vuex";
import PostInterface from "./interfaces/post";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    posts: null as PostInterface[] | null
  },
  getters: {
    posts(state): PostInterface[] | null {
      return state.posts;
    }
  },
  mutations: {
    SET_POSTS: (state: any, posts: PostInterface[]) => {
      state.posts = posts;
    }
  },
  actions: {
    setPosts: (context: any, posts: PostInterface[]) => {
      context.commit("SET_POSTS", posts);
    }
  },
  modules: {}
});
