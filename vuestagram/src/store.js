import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 40,
      likes: 0,
      postLiked: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    changeName(state) {
      state.name = "park";
    },
    increaseAge(state, payLoad) {
      state.age += payLoad;
    },
    increaseLike(state) {
      state.likes += 1;
    },
    decreaseLike(state) {
      state.likes -= 1;
    },
  },
  actions: {
    getPosts(context) {
      axios
        .get("https://codingapple1.github.io/vue/more1.json")
        .then((result) => {
          console.log(result);
          context.commit("setMore", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
