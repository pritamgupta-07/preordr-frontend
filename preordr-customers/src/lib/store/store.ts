import { configureStore } from '@reduxjs/toolkit'
import colorModeReducer from './features/colorMode/colorModeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {colorMode: colorModeReducer}
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']