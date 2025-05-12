"use client"
import { tokens } from "@/theme/theme";
import { Box, Typography, useTheme } from "@mui/material";

interface DashboardCardProps {
    data: number;
    isIncreased?: boolean;
    cardText: string;
    showTrend?: boolean;
    isShowColored?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
    data,
    isIncreased = false,
    cardText,
    showTrend = false,
    isShowColored = false,
}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                width: "100%",
                background: colors.surface[500],
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                {
                    showTrend && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill={
                        isIncreased
                            ? colors.secondary[500]
                            : colors.redAccent[500]
                    }
                >
                    <path
                        d={
                            isIncreased
                                ? "m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"
                                : "M640-240v-80h104L536-526 376-366 80-664l56-56 240 240 160-160 264 264v-104h80v240H640Z"
                        }
                    />
                </svg>
                }
                <Typography
                variant="h1"
                    sx={{fontSize: {xs: 24, sm: 30, md: 42}}}
                    fontWeight={600}
                    color={
                        showTrend || isShowColored ?
                        isIncreased
                            ? colors.secondary[500]
                            : colors.redAccent[500]
                        : colors.textPrimary[600]
                    }
                >
                    {data}
                </Typography>
            </Box>
            <Typography variant="body1" fontSize={16} color={colors.textSecondary[500]}>
                {cardText}
            </Typography>
        </Box>
    );
};

export default DashboardCard;
