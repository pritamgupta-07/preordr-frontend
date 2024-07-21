import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import items from "./sidebarData.js";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);
    const initialPath = usePathname();

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [activePath, setActivePath] = useState(initialPath);

    const handleItemClick = (path) => {
        setActivePath(path);
    };

    const sidebarItems = [...items];

    return (
        <>
            <style jsx global>{`
                /* For WebKit browsers */
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: ${colors.background[500]};
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: ${colors.primary[500]};
                    border-radius: 10px;
                    transition: background-color 0.3s ease;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background-color: ${colors.primary[700]};
                }

                /* For Firefox */
                * {
                    scrollbar-width: thin;
                    scrollbar-color: ${colors.primary[500]} ${colors.background[500]};
                }

                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>

            {/* SIDEBAR */}
            <Box
                sx={{
                    background: colors.background[600],
                    width: "100%",
                    height: "100vh",
                    padding: "12px",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        background: colors.background[500],
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        padding: "8px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "8px 0",
                            borderBottom: `1px solid ${colors.background[600]}`,
                        }}
                    >
                        <Typography
                            variant="h2"
                            color={colors.textPrimary[900]}
                            sx={{
                                display: { xs: "none", sm: "flex" },
                            }}
                        >
                            preOrdr
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            flexGrow: 1,
                            margin: "8px 0",
                            overflowY: "auto",
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: colors.background[500],
                                borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: colors.primary[500],
                                borderRadius: '10px',
                                transition: 'background-color 0.3s ease',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: colors.primary[700],
                            },
                        }}
                    >
                        {sidebarItems.map((item) => (
                            <Link key={item.path} href={item.path} style={{textDecoration: "none"}}>
                                <Box
                                    onClick={() => handleItemClick(item.path)}
                                    sx={{
                                        margin: {
                                            sm: "2px 0",
                                            xs: "4px 0",
                                        },
                                        padding: {
                                            sm: "10px 8px",
                                            xs: "8px 4px",
                                        },
                                        width: "100%",
                                        fontSize: "16px",
                                        textDecoration: "none",
                                        color: activePath === item.path ? "white" : "black",
                                        background: activePath === item.path ? colors.primary[500] : colors.background[500],
                                        borderRadius: "4px",
                                        display: "flex",
                                        justifyContent: {
                                            xs: "center",
                                            sm: "flex-start",
                                        },
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: {
                                                md: "0",
                                                xs: "2px",
                                            },
                                            marginRight: {
                                                sm: "4px",
                                                xs: "0",
                                            },
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="20px"
                                            viewBox="0 -960 960 960"
                                            width="20px"
                                            fill={activePath === item.path ? "white" : "black"}
                                        >
                                            <path d={item.iconSvgPath} />
                                        </svg>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "flex",
                                            },
                                        }}
                                    >
                                        {item.name}
                                    </Box>
                                </Box>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;
