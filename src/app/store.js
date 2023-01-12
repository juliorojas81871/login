import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
