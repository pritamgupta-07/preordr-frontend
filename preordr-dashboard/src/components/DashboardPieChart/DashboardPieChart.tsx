import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import {
    DefaultizedPieValueType,
    pieArcLabelClasses,
    PieChart,
} from "@mui/x-charts";

const DashboardPieChart = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const data = [
        { label: "Laptop", value: 400, color: "#0088FE" },
        { label: "Earphones", value: 300, color: "#00C49F" },
        { label: "Electric Kettle", value: 300, color: "#FFBB28" },
        { label: "Smart Phones", value: 200, color: "#FF8042" },
    ];

    const sizing = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        legend: { hidden: true },
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };
    return (
        <Box
            sx={{
                width: "100%",
                background: colors.surface[500],
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "6px",
                flexDirection: "column"
            }}
        >
            <PieChart
                series={[
                    {
                        outerRadius: 80,
                        data,
                        arcLabel: getArcLabel,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: "white",
                        fontSize: 14,
                    }
                }}
                {...sizing}
            />
            <Typography variant="body1" my={1} fontSize={20} fontWeight={600}>
                Famous Items
            </Typography>
        </Box>
    );
};

export default DashboardPieChart;
