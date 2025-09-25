import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  lang: "en" | "vi";
}

const initialState: LanguageState = {
  lang: "en", // mặc định English
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEnglish: (state) => {
      state.lang = "en";
    },
    setVietnamese: (state) => {
      state.lang = "vi";
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === "en" ? "vi" : "en";
    },
  },
});

export const { setEnglish, setVietnamese, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
