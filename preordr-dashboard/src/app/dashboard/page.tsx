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
          <DashboardData />
        </>
    );
}
