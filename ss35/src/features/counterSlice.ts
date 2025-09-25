import { createSlice } from "@reduxjs/toolkit";

// State ban đầu
const initialState = {
  value: 0,
};

// Tạo slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Xuất action
export const { increment, decrement, reset } = counterSlice.actions;

// Xuất reducer
export default counterSlice.reducer;
