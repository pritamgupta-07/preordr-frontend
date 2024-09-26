"use client"
import { Box, Grid } from "@mui/material";
import DashboardCard from "../DashboardCard/DashboardCard";
import RecentOrderCard from "../../DashboardOrder/RecentOrderCard/RecentOrderCard";
import TopSellingItems from "../TopSellingItems/TopSellingItems";
import DashboardPieChart from "../DashboardPieChart/DashboardPieChart";
import DashboardSalesChart from "../DashboardSalesChart/DashboardSalesChart";

const DashboardData = () => {
    return (
        <Box sx={{ width: "100%", padding: "10px 20px", overflow: "auto" }}>
            {/* First Row */}
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <DashboardCard
                            data={109}
                            isIncreased={true}
                            cardText="Weekly Sales"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <DashboardCard
                            data={46}
                            isIncreased={false}
                            cardText="Daily Sales"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <DashboardCard
                            data={1542}
                            isIncreased={true}
                            cardText="Montly Sales"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Second Row */}
            <Box margin={"20px 0"}>
                <Grid container spacing={2} columns={3}>
                    <Grid item xs={3} md={2}>
                        <RecentOrderCard />
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <TopSellingItems />
                    </Grid>
                </Grid>
            </Box>

            {/* Third Row */}
            <Box sx={{margin: "20px 0"}}>
                <Grid container spacing={2} columns={3}>
                    <Grid item xs={3} md={1}>
                        <DashboardPieChart />
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <DashboardSalesChart />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DashboardData;
