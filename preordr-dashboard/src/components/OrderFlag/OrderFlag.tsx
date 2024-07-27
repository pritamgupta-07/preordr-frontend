"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";
import { useEffect, useState } from "react";

type orderFlagProps = {
    status: string
}

const OrderFlag = ({status}: orderFlagProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [background, setBackground] = useState(colors.background[900]);
    
    // CHANGING THE COLOR OF THE FLAG ACCORDING TO THE STATUS OF THE ORDER
    useEffect(() => {
        if (status === "new" || status === "paid") {
            setBackground(colors.secondary[500]);
        } else if (status === "preparing") {
            setBackground(colors.yellowAccent[500]);
        } else {
            setBackground(colors.orangeAccent[500]);
        }
    }, [status, background]); 
    
    return (
        <Box
            sx={{
                fontSize: "12px",
                padding: "2px 4px",
                background: background,
                color: colors.background[100],
                fontWeight: "600",
                borderRadius: "2px",
                textTransform: "uppercase",
                textAlign: "center"
            }}
        >
            {status}
        </Box>
    );
};

export default OrderFlag;
