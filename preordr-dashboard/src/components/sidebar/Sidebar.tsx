import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);
    const pathName = usePathname();

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const sidebarItems = [
        { name: "Dashboard", path: "/" },
        { name: "Orders", path: "/orders" },
        { name: "Details Menu", path: "/details" },
        { name: "Upload Images", path: "/upload-images" },
        { name: "Advertisement", path: "/advertisement" },
        { name: "Reviews", path: "/reviews" },
        { name: "Payments", path: "/payments" },
        { name: "Subscription", path: "/subscription" },
        { name: "Analytics", path: "/analytics" },
        { name: "Generate QR", path: "/generate-qr" },
    ];
    return (
        <>
            {/* SIDEBAR */}
            <Box
                sx={{
                    background: colors.background[600],
                    width: "100%",
                    height: "100vh",
                    padding: "12px",
                }}
            >
                <Box
                    sx={{
                        background: colors.background[500],
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        padding: "8px"
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
                        >
                            preOrdr
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "8px 0",
                        }}
                    >
                        {sidebarItems.map((item) => {
                            return (
                                <Link key={item.path} href={item.path} 
                                style={{width: "100%"}}>
                                    <Button 
                                        sx={{
                                            width: "100%",
                                            fontSize: "16px",
                                            color: pathName === item.path ? "white" : "black",
                                            background: pathName === item.path ? `${colors.primary[500]}`
                                             : `${colors.background[500]}`
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;
