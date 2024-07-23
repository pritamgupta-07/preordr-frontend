"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
    Box,
    Grid,
    useTheme,
} from "@mui/material";
import { tokens } from "@/theme/theme";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import DashboardData from "@/components/DashboardData/DashboardData";

export default function Home() {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            {/* SCROLLBAR CUSTOMIZATION */}
            <style jsx global>{`
                :root {
                    --scrollbar-bg-light: ${colors
                        .surface[100]}; // light surface color for background
                    --scrollbar-thumb-light: ${colors
                        .textPrimary[500]}; // dark grey for thumb
                    --scrollbar-thumb-hover-light: ${colors
                        .textPrimary[700]}; // darker grey for hover
                    --scrollbar-bg-dark: ${colors
                        .surface[100]}; // light surface color for background (same as light mode)
                    --scrollbar-thumb-dark: ${colors
                        .textPrimary[300]}; // dark grey for thumb
                    --scrollbar-thumb-hover-dark: ${colors
                        .textPrimary[500]}; // darker grey for hover
                }

                @media (prefers-color-scheme: dark) {
                    :root {
                        --scrollbar-bg: var(--scrollbar-bg-dark);
                        --scrollbar-thumb: var(--scrollbar-thumb-dark);
                        --scrollbar-thumb-hover: var(
                            --scrollbar-thumb-hover-dark
                        );
                    }
                }

                @media (prefers-color-scheme: light) {
                    :root {
                        --scrollbar-bg: var(--scrollbar-bg-light);
                        --scrollbar-thumb: var(--scrollbar-thumb-light);
                        --scrollbar-thumb-hover: var(
                            --scrollbar-thumb-hover-light
                        );
                    }
                }

                /* For WebKit browsers */
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: var(--scrollbar-bg);
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: var(--scrollbar-thumb);
                    border-radius: 10px;
                    transition: background-color 0.3s ease;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: var(--scrollbar-thumb-hover);
                }
                ::-webkit-scrollbar-button {
                    display: none;
                }

                /* For Firefox */
                * {
                    scrollbar-width: thin;
                    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-bg);
                }

                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>

            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Grid container>
                    {/* Sidebar */}
                    <Grid
                        item
                        xs={2}
                        sm={3}
                        md={2}
                        sx={{
                            position: "sticky",
                            top: 0,
                            height: "100vh",
                            overflowY: "auto",
                        }}
                    >
                        <Sidebar />
                    </Grid>
                    {/* MAIN */}
                    <Grid item xs={10} sm={9} md={10}>
                        {/* TOPBAR */}
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                overflow: "auto",
                            }}
                        >
                            <Topbar />
                            <DashboardData />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
