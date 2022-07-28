import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  posts: [
    { id: "1", title: "Learning Redux", content: "I've heard good things." },
    {
      id: "2",
      title: "Redux Toolkit",
      content: "The more I say slice, the more I want pizza.",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});
/**
 * If the state ever changes we can just change it here instead of changing it in every component we use it.
 */
export const selectAllPosts = (state) => state.postsStore.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
