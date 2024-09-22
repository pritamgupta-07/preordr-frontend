"use client";
import { Box, TextField, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";

type searchInputProps = {
    width: string,
}

const SearchInput = ({width}: searchInputProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                width: width,
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
            />
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
    );
};

export default SearchInput;
