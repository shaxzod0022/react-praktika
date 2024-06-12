import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./counterSlice";
import counterTodo from "./todoSlice";

export default configureStore({
  reducer: {
    counter: counterStore,
    todoData: counterTodo,
  },
});
