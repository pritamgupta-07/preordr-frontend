import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { Box, Typography, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const DashboardSalesChart = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    background: colors.surface[500],
                    padding: "6px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    height={200}
                />
                <Typography variant="body1" my={1} fontSize={20} fontWeight={600}>
                Monthly Sales
            </Typography>
            </Box>
        </>
    );
};

export default DashboardSalesChart;
