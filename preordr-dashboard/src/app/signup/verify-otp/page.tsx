"use client";
import { Container, Box, useTheme, Typography, Button } from "@mui/material";
import React, { FC } from "react";
import { tokens } from "@/theme/theme";
import { useAppSelector } from "@/lib/store/hooks";
import OTPInput from "./otpinput";

const page: FC = () => {
  const mode = useAppSelector((state) => state.colorMode.mode);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Submitting the otp
  const onOTPSubmit = (otp: string) => {
    console.log("Submitted OTP is :", otp);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ p: 4, width: "100%", py: 10, borderRadius: "12px" }} className="box-shadow">
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

          <Box
            component={"form"}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <OTPInput length={4} onOTPSubmit={onOTPSubmit} />

            <Box sx={{mx: "auto", width: "50%"}}>
              <Button
                variant="contained"
                sx={{
                  py: 1, 
                  my: 2,
                  fontSize: { xs: ".8rem", sm: "1rem" },
                  fontWeight: "600",
                  color: colors.background[100],
                  background: colors.background[900],
                  "&:hover": {
                    backgroundColor: colors.background[900],
                    cursor: "pointer",
                  },
                  width: "100%"
                }}
              >
                Verify 
                <Box component="span" sx={{pl: 1, display: "flex", alignItems: "center"}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 -960 960 960"  fill="#e8eaed"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default page;
