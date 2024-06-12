import { createSlice } from "@reduxjs/toolkit";

export const counterTodo = createSlice({
  name: "todoData",
  initialState: {
    data: [],
  },
  reducers: {
    createData: (item, action) => {
      item.data = action.payload;
    },
  },
});

export const { createData } = counterTodo.actions;
export default counterTodo.reducer;
