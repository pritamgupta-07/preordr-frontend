import OrderHistory from "@/components/DashboardOrder/OrderHistory/OrderHistory";
import OrderOverview from "@/components/DashboardOrder/OrderOvereview/OrderOverview";
import OrderStatusButton from "@/components/DashboardOrder/OrderStatusButton/OrderStatusButton";
import { Box, Grid } from "@mui/material";

const OrdersMain = () => {
    return (
        <Box sx={{ width: "100%", padding: "0 20px", overflow: "auto" }}>
            {/* TOP BUTTONS */}
            <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: {
                            xs: "100%",
                            sm: "70%",
                            md: "40%",
                        },
                        flexWrap: "wrap",
                        gap: "20px",
                    }}
                >   
                    <OrderStatusButton title={"New"} active={1} />
                    <OrderStatusButton title={"Preparing"} active={0} />
                    <OrderStatusButton title={"Ready"} active={2} />
                </Box>
            </Box>
            
            {/* SECOND ROW */}
            <Box sx={{ margin: "20px 0", width: "100%", padding: "10px" }}>
                <Grid container spacing={"20px"}>
                    <Grid item xs={12} md={4}>
                        <OrderHistory />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <OrderOverview />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default OrdersMain;
