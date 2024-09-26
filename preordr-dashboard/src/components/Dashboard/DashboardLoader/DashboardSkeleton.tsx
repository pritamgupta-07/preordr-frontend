"use client";
import { Box, Grid, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

// Define keyframes for the shining effect
const shining = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Create a styled component with the shining animation
const ShiningBox = styled(Box)(({ theme }) => {
  const colors = tokens(theme.palette.mode).gradient;
  return {
    background: `linear-gradient(90deg, ${colors[100]} 0%, ${colors[200]} 50%, ${colors[100]} 100%)`,
    backgroundSize: "200% 100%",
    animation: `${shining} 1.5s infinite`,
    borderRadius: "8px",
  };
});

const DashboardSkeleton = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{ width: "100%", padding: "0 20px", overflow: "auto" }}>
            {/* First Row */}
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <ShiningBox
                            sx={{
                                width: "100%",
                                backgroundColor: colors.surface[500],
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "100px",
                            }}
                        ></ShiningBox>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ShiningBox
                            sx={{
                                width: "100%",
                                backgroundColor: colors.surface[500],
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "100px",
                            }}
                        ></ShiningBox>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ShiningBox
                            sx={{
                                width: "100%",
                                backgroundColor: colors.surface[500],
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "100px",
                            }}
                        ></ShiningBox>
                    </Grid>
                </Grid>
            </Box>

            {/* Second Row */}
            <Box margin={"20px 0"}>
                <Grid container spacing={2} columns={3}>
                    <Grid item xs={3} md={2}>
                        <ShiningBox
                            sx={{
                                backgroundColor: colors.surface[500],
                                padding: "10px",
                                height: "250px",
                            }}
                        ></ShiningBox>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <ShiningBox
                            sx={{
                                backgroundColor: colors.surface[500],
                                padding: "10px",
                                height: "250px",
                            }}
                        ></ShiningBox>
                    </Grid>
                </Grid>
            </Box>

            {/* Third Row */}
            <Box sx={{ margin: "20px 0" }}>
                <Grid container spacing={2} columns={3}>
                    <Grid item xs={3} md={1}>
                        <ShiningBox
                            sx={{
                                width: "100%",
                                backgroundColor: colors.surface[500],
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "6px",
                                flexDirection: "column",
                                height: "250px",
                            }}
                        ></ShiningBox>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <ShiningBox
                            sx={{
                                width: "100%",
                                backgroundColor: colors.surface[500],
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "6px",
                                flexDirection: "column",
                                height: "250px",
                            }}
                        ></ShiningBox>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DashboardSkeleton;
