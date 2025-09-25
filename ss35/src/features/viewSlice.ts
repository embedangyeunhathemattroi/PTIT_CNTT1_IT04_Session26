import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  mode: "list" | "grid"; // 2 chế độ hiển thị
}

const initialState: ViewState = {
  mode: "list", // mặc định hiển thị dạng list
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
    setListView: (state) => {
      state.mode = "list";
    },
    setGridView: (state) => {
      state.mode = "grid";
    },
  },
});

export const { toggleView, setListView, setGridView } = viewSlice.actions;
export default viewSlice.reducer;
