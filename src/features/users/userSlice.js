import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: "1", name: "Test Hero" },
    { id: "2", name: "Test zero" },
    { id: "3", name: "Test Dero" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.userStore.users;
export default userSlice.reducer;
