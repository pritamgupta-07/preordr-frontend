"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";

export default function Home() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.colorMode.mode);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
      Sidebar here
      <main className="content">
        <h1>Content here</h1>

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              bgcolor: colors.surface[500],
              width: 400, // default unit is px ie. 400px
              height: "18.75rem", // 300px
              color: colors.textPrimary[500],
              display: "flex",
              justifyContent: "center",
              padding: "1.2rem 0 0 0",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{ color: colors.textPrimary[500] }}
            >
              Hello this is a{" "}
              <span style={{ color: colors.primary[500] }}>card</span>
            </Typography>
          </Box>
        </Box>

        <p>{mode}</p>
        <button onClick={() => dispatch(toggleMode())}>mode</button>
      </main>
    </div>
  );
}
