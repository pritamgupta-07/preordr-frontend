import { createSlice } from "@reduxjs/toolkit";

// Export the Mode type
export type Mode = "light" | "dark";

export interface ModeState {
  mode: Mode;
}

const savedTheme = localStorage.getItem("theme") as Mode || "light";

const initialState: ModeState = {
  mode: savedTheme,
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