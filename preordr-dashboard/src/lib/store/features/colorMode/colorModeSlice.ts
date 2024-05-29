import { createSlice } from "@reduxjs/toolkit";

export type Mode = 'light' | 'dark';

export interface ModeState {
  mode: Mode;
}

const initialState: ModeState = {
    mode: 'light',
  };
  
  const modeSlice = createSlice({
    name: 'colorMode',
    initialState,
    reducers: {
      toggleMode(state) {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
      },
    },
  });
  
  export const { toggleMode } = modeSlice.actions;
  export default modeSlice.reducer;