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

// // import dependency to handle HTTP request to our back end
// import Vuex from "vuex";
// import Vue from "vue";

// //load Vuex
// Vue.use(Vuex);

// //to handle state
// const state = {
//   posts: []
// };

// //to handle state
// const getters = {
//   // Gestripte data hier bepalen
// };

// //to handle actions
// const actions = {
//   getPosts({ data, commit }: { commit: Function; data: any }) {
//     console.log("hi there2", data);
//     commit("SET_POSTS", data);
//   }
// };
// //   getPosts({ commit }: { commit: Function }) {
// //     axios
// //       .get(
// //         "https://website-fabriek.online/wp-json/markers/v1/post"
// //       )
// //       .then(response => {
// //         commit("SET_POSTS", response.data);
// //       });
// //   }
// // };

// //to handle mutations
// const mutations = {
//   SET_POSTS(state: any, posts: any) {
//     state.posts = posts;
//   }
// };

// //export store module
// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// });
