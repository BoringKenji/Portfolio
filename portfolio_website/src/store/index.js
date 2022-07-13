import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      recordIP: false,
      View:0,
    };
  },
});

export default store;
