"use client";
import { tokens } from "@/theme/theme";
import { Box, useTheme } from "@mui/material";

type OrderStatusButtonProps = {
    title: string;
    active: number;
};

const OrderStatusButton = ({ title, active }: OrderStatusButtonProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                borderRadius: "6px",
                background: colors.surface[500],
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", sm: "auto" },
                padding: { xs: "8px", sm: "4px" }, 
            }}
        >   
            {/* TEXT  */}
            <Box
                component="span"
                sx={{
                    fontSize: { xs: "14px", sm: "16px" }, 
                    padding: { xs: "4px 8px", sm: "4px 10px" },
                    borderRight: { xs: "none", sm: `1px solid ${colors.textSecondary[500]}` },
                    color: colors.textPrimary[500],
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                {title}
            </Box>
            
            {/* Total Number of active thing */}
            <Box
                sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    padding: { xs: "4px 8px", sm: "4px 10px" },
                    color: colors.textPrimary[500],
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                {active}
            </Box>
        </Box>
    );
};

export default OrderStatusButton;
