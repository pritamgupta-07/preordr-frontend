"use client";
import { tokens } from "@/theme/theme";
import { Box, useTheme } from "@mui/material";
import SearchInput from "../../Extras/SearchInput/SearchInput";
import OrderCard from "./OrderCard";
import orderHistory from "./OrderHistoryData";

const OrderHistory = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                width: "100%",
                background: colors.surface[500],
                borderRadius: "6px",
                // padding: "10px"
            }}
        >   
            {/* TOP SEARCH BOX */}
            <Box
                sx={{
                    width: "100%",
                    padding: "20px 10px",
                    borderBottom: `1px dashed ${colors.background[700]}`,
                }}
            >
                <SearchInput width="100%" />
            </Box>
            
            {/* ORDERS CARD SECTION */}
            <Box
                sx={{
                    width: "100%",
                    padding: "10px 10px",
                    marginTop: "8px",
                    maxHeight: "400px",
                    overflowY: "auto",
                }}
            >
                {orderHistory.map((item) => {
                    return (
                        <OrderCard
                            key={item.orderNo}
                            orderNo={item.orderNo}
                            quantity={item.quantity}
                            status={item.status}
                            price={item.price}
                            time={item.time}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default OrderHistory;
