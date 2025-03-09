"use client"

import { useAppSelector } from '@/lib/store/hooks'
import { themeSettings } from '@/theme/theme'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { useMemo } from 'react'

function MUIThemeProvider({ children }: { children: React.ReactNode}) {
  const mode = useAppSelector((state)=>state.colorMode.mode)

  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default MUIThemeProvider
