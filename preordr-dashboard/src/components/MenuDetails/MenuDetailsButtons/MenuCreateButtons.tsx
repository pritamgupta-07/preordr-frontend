"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { Box, Button, useTheme } from "@mui/material";
import React from "react";

const MenuCreateButtons = () => {
    const mode = useAppSelector((state) => state.colorMode.mode);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
            }}
        >
            <Button
                variant="outlined"
                size="large"
                sx={{ padding: "10px 32px", fontSize: "16px" }}
            >
                Cancel
            </Button>
            <Button
                variant="contained"
                size="large"
                sx={{
                    background: colors.primary[500],
                    "&:hover": {
                        background: colors.primary[600],
                    },
                    color: "#fff",
                    padding: "10px 32px",
                    fontSize: "16px",
                }}
            >
                Create
            </Button>
        </Box>
    );
};

export default MenuCreateButtons;
