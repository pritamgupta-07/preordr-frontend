import DashboardCard from "@/components/Dashboard/DashboardCard/DashboardCard";
import PaymentTable from "@/components/Dashboard/DashboardPayments/PaymentTable";
import { tokens } from "@/theme/theme";
import {
    Box,
    Button,
    Grid,
    Typography,
} from "@mui/material";

const page = () => {
    return (
        <Box sx={{ width: "100%", padding: "0 20px" }}>
            {/* TOPBAR */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h2" sx={{fontWeight: 700}}>Payout</Typography>

                <Button variant="outlined">+ Add Account</Button>
            </Box>
            {/* ACCOUNT DETAILS */}
            <Box sx={{ margin: "30px 0" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <DashboardCard
                            data={2500}
                            cardText="Account Balance"
                            isShowColored={true}
                            isIncreased={true}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DashboardCard
                            data={500}
                            cardText="Withdrawal Balance"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* TABLE */}
            <Box>
                <Typography variant="h3" fontWeight={800} marginBottom={1.5}>
                    Details
                </Typography>

                <PaymentTable />
            </Box>
        </Box>
    );
};

export default page;
