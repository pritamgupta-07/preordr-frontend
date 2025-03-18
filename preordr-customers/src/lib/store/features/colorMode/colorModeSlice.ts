import { createSlice } from "@reduxjs/toolkit";

// Export the Mode type
export type Mode = "light" | "dark";

export interface ModeState {
  mode: Mode;
}

const initialState: ModeState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode); 
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;