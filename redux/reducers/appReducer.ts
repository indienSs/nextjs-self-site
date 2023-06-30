import {createSlice} from "@reduxjs/toolkit";
import {AppState} from "../store";

export interface IAppState {
  language: "RU" | "EN";
  theme: "dark" | "light";
}

const initialState: IAppState = {
  language: "RU",
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const {setLanguage} = appSlice.actions;

export const selectLanguage = (state: AppState) => state.app.language;

export default appSlice.reducer;
