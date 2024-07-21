"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "@/theme/theme";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100%",
            }}
        >
            <Grid container>
                {/* sidebar */}
                <Grid item xs={2} sm={4} md={3}>
                    <Sidebar />
                </Grid>
                {/* MAIN */}
                <Grid item xs={10} sm={8} md={9}>
                    {/* TOPBAR */}
                    <Box sx={{ width: "100%", height: "100%" }}>
                        <Topbar/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
