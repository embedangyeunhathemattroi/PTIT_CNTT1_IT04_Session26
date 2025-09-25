// store/index.ts
import { configureStore, createSlice } from "@reduxjs/toolkit";

// --- Reducer cho Profile ---
const initialProfile = {
  id: 1,
  userName: "Nguyen Van A",
  gender: "Male",
  dateBirth: "2000-01-01",
  address: "Ha Noi",
};
function profileReducer(state = initialProfile, action: any) {
  return state; // tạm thời không có action để sửa profile
}

// --- Reducer cho ListUser ---
const initialUsers = [
  {
    id: 1,
    userName: "User1",
    gender: "Male",
    dateBirth: "1999-05-10",
    address: "HN",
  },
  {
    id: 2,
    userName: "User2",
    gender: "Female",
    dateBirth: "2001-07-20",
    address: "HCM",
  },
];
function userReducer(state = initialUsers, action: any) {
  return state; // tạm thời chưa có action thêm/sửa/xóa
}

// --- Reducer cho Counter ---
const initialCounter = { counter: 0 };
function counterReducer(state = initialCounter, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

// --- Reducer cho RandomNumber ---
const initialRandom = { numbers: [] as number[] };
function randomReducer(state = initialRandom, action: any) {
  switch (action.type) {
    case "ADD_RANDOM":
      return { numbers: [...state.numbers, action.payload] };
    default:
      return state;
  }
}

// --- Slice cho company ---
const companySlice = createSlice({
  name: "company",
  initialState: { value: "Rikkei Academy" },
  reducers: {
    changeCompany: (state) => {
      state.value = "RikkeiSoft";
    },
  },
});

// export action cho company
export const { changeCompany } = companySlice.actions;

// --- Slice quản lý theme (sáng/tối) ---
const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" }, // mặc định sáng
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// export action cho theme
export const { toggleTheme, setTheme } = themeSlice.actions;

// --- Tạo store bằng Redux Toolkit ---
const store = configureStore({
  reducer: {
    profile: profileReducer,
    users: userReducer,
    counter: counterReducer,
    random: randomReducer,
    company: companySlice.reducer,
    theme: themeSlice.reducer,
  },
});

// --- export type ---
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
