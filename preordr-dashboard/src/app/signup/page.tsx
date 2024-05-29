"use client";
import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "@/theme/theme";
import { useAppSelector } from "@/lib/store/hooks";
import signup from "@/images/signup.svg";

console.log(signup);

export default function SignIn() {
  const mode = useAppSelector((state) => state.colorMode.mode);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    // Main container
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {/* Box container */}
      <Grid
        container
        component={`div`}
        className="box-shadow"
        spacing={1}
        sx={{
          p: 10,
          display: "flex",
          width: "100%",
          justifyContent: "center",
          borderRadius: "12px",
        }}
      >
        {/* Image div */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 400 }}>
            <img src={signup.src} />
          </Box>
        </Grid>

        {/* Text Content  */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box width={`100%`} p={1}>
            <Typography
              variant="h1"
              textAlign={`center`}
              sx={{ fontWeight: "bold" }}
            >
              Sign Up
            </Typography>

            <Box sx={{ my: 4, width: "100%" }}>
              <TextField
                label="Email"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: colors.secondary[700], // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.secondary[700], // Border color when focused
                    },
                  },
                  // '& .MuiInputLabel-root': {
                  //   fontSize: "24px", // Label font
                  // },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.secondary[700], // Label color
                  },
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1,
                  my: 1.5,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: colors.background[100],
                  background: colors.secondary[700],
                  "&:hover": {
                    backgroundColor: colors.secondary[800],
                    cursor: "pointer",
                  },
                }}
              >
                Sign up
              </Button>

              <Typography variant="h3" textAlign={`center`} my={2}>
                or
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1,
                  my: 1.5,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: colors.background[100],
                  background: colors.background[900],
                  "&:hover": {
                    backgroundColor: colors.background[900],
                    cursor: "pointer",
                  },
                }}
              >
                Login with google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
