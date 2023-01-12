import { createSlice } from "@reduxjs/toolkit";

export const userSice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSice.actions;

export const selectUser = (state) => state.user.user;

export default userSice.reducer;
