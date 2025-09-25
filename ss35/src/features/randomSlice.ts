import { createSlice } from "@reduxjs/toolkit";

// State ban đầu: mảng rỗng
const initialState = {
  numbers: [] as number[],
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    generateRandomNumbers: (state) => {
      // Sinh ngẫu nhiên 5 số nguyên từ 1 -> 100
      const newNumbers = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 100) + 1
      );
      state.numbers = newNumbers;
    },
  },
});

// Xuất action
export const { generateRandomNumbers } = randomSlice.actions;

// Xuất reducer
export default randomSlice.reducer;
