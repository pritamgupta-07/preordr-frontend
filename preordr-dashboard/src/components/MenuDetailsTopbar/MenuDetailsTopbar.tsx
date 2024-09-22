"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Link from "next/link";

const MenuDetailsTopbar = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2, md: 0 },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-between" },
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 0 },
                }}
            >
                {/* FILTER BUTTON */}
                <Button
                    sx={{
                        display: "flex",
                        padding: { xs: "8px 16px", md: "10px 24px" },
                        background: colors.surface[500],
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "6px",
                        "&:hover": {
                            background: colors.surface[600],
                        },
                        width: { xs: "100%", md: "auto" },
                    }}
                >
                    {/* ICON */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill={colors.textPrimary[500]}
                        >
                            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
                        </svg>
                    </Box>

                    {/* TEXT */}
                    <Typography
                        sx={{
                            textTransform: "capitalize",
                            fontSize: "16px",
                            color: colors.textPrimary[500],
                        }}
                    >
                        filter
                    </Typography>
                </Button>

                {/* SEARCH INPUT */}
                <Box sx={{ width: { xs: "100%", md: "600px" } }}>
                    <SearchInput width="100%" />
                </Box>

                {/* ADD NEW BUTTON */}
                <Link href={"menu-details/update/id"} style={{textDecoration: "none"}}>
                    <Button
                        sx={{
                            display: "flex",
                            padding: { xs: "8px 16px", md: "10px 24px" },
                            background: colors.surface[500],
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            borderRadius: "6px",
                            "&:hover": {
                                background: colors.surface[600],
                            },
                            width: { xs: "100%", md: "auto" },
                        }}
                    >
                        {/* ICON */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill={colors.textPrimary[500]}
                            >
                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                            </svg>
                        </Box>

                        {/* TEXT */}
                        <Typography
                            sx={{
                                textTransform: "capitalize",
                                fontSize: "16px",
                                color: colors.textPrimary[500],
                            }}
                        >
                            Add item
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default MenuDetailsTopbar;
