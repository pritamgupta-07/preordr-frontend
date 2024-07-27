import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";

type orderCardProps = {
    orderNo: string;
    quantity: number;
    status: string;
    price: number;
    time: string;
};

const OrderCard = ({
    orderNo,
    quantity,
    status,
    price,
    time,
}: orderCardProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                width: "100%",
                borderBottom: `1px solid ${colors.background[700]}`,
                padding: "8px 16px",
                borderRadius: "8px",
                marginBottom: "16px",
                backgroundColor: colors.surface[100],
                cursor: "pointer"
            }}
        >   
            {/* ORDER NO. */}
            <Box
                sx={{
                    marginBottom: "8px",
                }}
            >
                <Typography
                    fontSize={"14px"}
                    fontStyle={"italic"}
                    color={colors.textSecondary[600]}
                    my={"4px"}
                >
                    #{orderNo}
                </Typography>
            </Box>
                
            {/* 2nd line quantity & price */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                }}
            >
                <Typography fontSize={"18px"}>{quantity} items</Typography>
                <Typography fontSize={"18px"}>Rs. {price}</Typography>
            </Box>
                
                {/* 3rd line time & status */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography fontSize={"14px"} color={colors.textSecondary[600]}>
                    {time}
                </Typography>
                <Typography
                    sx={{
                        padding: "4px 20px",
                        background: colors.orangeAccent[500],
                        color: colors.background[100],
                        fontWeight: "600",
                        borderRadius: "4px",
                        textTransform: "capitalize",
                    }}
                >
                    {status}
                </Typography>
            </Box>
        </Box>
    );
};

export default OrderCard;
