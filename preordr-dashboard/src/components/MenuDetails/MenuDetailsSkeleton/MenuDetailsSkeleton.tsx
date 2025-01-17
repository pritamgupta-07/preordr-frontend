"use client";
import { Box, Skeleton, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";

const MenuDetailsSkeleton = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{ margin: "16px 0", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: "16px", md: "24px" },
                    margin: "24px 0",
                    padding: { xs: "16px", md: "24px" },
                    paddingBottom: { xs: "12px", md: "16px" },
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    border: `1px solid ${colors.background[300]}`,
                    backgroundColor: colors.surface[200],
                    alignItems: "center",
                }}
            >
                {/* Image skeleton */}
                <Box
                    sx={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease",
                        minWidth: { xs: "100%", md: "240px" },
                        height: { xs: "180px", md: "180px" },
                        overflow: "hidden",
                    }}
                >
                    <Skeleton
                        variant="rectangular"
                        sx={{
                            width: "100%",
                            height: "100%",
                            background: colors.surface[600],
                        }}
                    />
                </Box>

                {/* Content skeleton */}
                <Box sx={{ width: "100%" }}>
                    <Box>
                        <Skeleton
                            sx={{
                                background: colors.surface[600],
                                width: { xs: "60px", sm: "80px", md: "100px" },
                                height: "24px",
                                marginBottom: "8px",
                            }}
                        />
                    </Box>

                    <Box>
                        <Skeleton
                            sx={{
                                background: colors.surface[600],
                                width: { xs: "100%", sm: "80%", md: "50%" },
                                height: "32px",
                                marginBottom: "8px",
                            }}
                        />
                    </Box>

                    <Box>
                        <Skeleton
                            sx={{
                                background: colors.surface[600],
                                width: { xs: "100%", sm: "90%", md: "100%" },
                                height: "60px",
                                marginBottom: "16px",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                            gap: { xs: "8px", sm: "16px" },
                        }}
                    >
                        <Skeleton
                            sx={{
                                background: colors.surface[600],
                                width: { xs: "60px", sm: "80px", md: "100px" },
                                height: "32px",
                            }}
                        />

                        <Skeleton
                            sx={{
                                background: colors.surface[600],
                                width: { xs: "100px", sm: "140px", md: "160px" },
                                height: "32px",
                            }}
                        />

                        <Skeleton
                            sx={{
                                background: colors.surface[600],
                                width: { xs: "60px", sm: "80px", md: "100px" },
                                height: "32px",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MenuDetailsSkeleton;
