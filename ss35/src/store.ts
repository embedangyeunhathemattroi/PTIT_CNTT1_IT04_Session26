import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import randomReducer from "./features/randomSlice";
import themeReducer from "./features/themeSlice";
import viewReducer from "./features/viewSlice";
import menuReducer from "./features/menuSlice";
import languageReducer from "./features/languageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer,
    theme: themeReducer,
     view: viewReducer,
     menu: menuReducer,
       language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
