"use client";
import {
  Container,
  Box,
  useTheme,
  Typography,
  Input,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { tokens } from "@/theme/theme";
import { useAppSelector } from "@/lib/store/hooks";
import OTPInput from "./input";

const page = () => {
  const mode = useAppSelector((state) => state.colorMode.mode);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Container
      maxWidth="sm"
      sx={{
        background: "grey",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ p: 4, width: "100%", py: 10 }}>
        {/* Icon  */}
        <Box
          component={"div"}
          sx={{
            my: 2,
            mx: "auto",
            width: "4rem",
            height: "4rem",
            background: colors.background[900],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            viewBox="0 0 24 24"
            fill={`${colors.background[100]}`}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        </Box>

        {/* Content */}

        <Box component="div" sx={{ my: 2 }}>
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{ fontWeight: "bold" }}
          >
            Enter OTP
          </Typography>

          <Box component={"form"}>
            <OTPInput />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default page;
