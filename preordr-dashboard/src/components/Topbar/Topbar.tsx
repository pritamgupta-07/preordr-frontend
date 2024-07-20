import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { useTheme } from "@emotion/react";
import { Box, TextField } from "@mui/material";
import React from "react";

const Topbar = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                padding: "10px 60px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {/* Search field */}
            <Box
                sx={{
                    width: "400px",
                    position: "relative",
                }}
            >
                {/* Search Field */}
                <TextField
                    variant="standard"
                    sx={{
                        width: "100%",
                        fontSize: "20px",
                    }}
                    placeholder="Search..."
                ></TextField>
                {/* SEARCH ICON */}
                <Box
                    sx={{
                        position: "absolute",
                        right: "2px",
                        top: "0",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill={colors.background[800]}
                    >
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                </Box>
            </Box>

            {/* Topbar input */}
            <Box
                sx={{
                    padding: "4px 0",
                    width: "80px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Notification Icon */}
                <Box sx={{
                     position: "relative",
                     top: "4px"
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill={colors.background[800]}
                    >
                        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-4px",
                            right: "-4px",
                            background: colors.redAccent[500],
                            display: "flex",
                            padding: "2px 6px",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            color: "white",
                            fontSize: "10px",
                        }}
                    >
                        0
                    </Box>
                </Box>
                <Box sx={{
                     position: "relative",
                     top: "4px"
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill={colors.background[800]}
                    >
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                    </svg>
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;
