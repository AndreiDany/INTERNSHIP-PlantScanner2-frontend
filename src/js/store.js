import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    userId: 0,
  },
  getters: {
    userId({ state }) {
      return state.userId;
    },
  },
  actions: {
    setUser({ state }, userId) {
      state.userId = userId.id;
    },
  },
});
export default store;
