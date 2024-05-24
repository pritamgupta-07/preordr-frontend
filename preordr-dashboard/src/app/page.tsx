"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { Box, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";

export default function Home() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.colorMode.mode);

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div className="app">
      Sidebar here
      <main className="content">
        <h1>Content here</h1>
        <Box sx={{ color: colors.orangeAccent[500],  }}>hello</Box>
        <p>{mode}</p>
        <button onClick={() => dispatch(toggleMode())}>mode</button>
      </main>
    </div>
  );
}
