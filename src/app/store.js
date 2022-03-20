import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/slices/Tasks/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
