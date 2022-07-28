import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import userSlice from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    postsStore: postsReducer,
    userStore: userSlice,
  },
});
