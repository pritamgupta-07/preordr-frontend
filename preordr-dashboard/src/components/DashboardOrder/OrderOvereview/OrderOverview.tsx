"use client";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme/theme";
import OrderFlag from "../OrderFlag/OrderFlag";
import { useState } from "react";

const OrderOverview = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    // Temporary Data
    const [itemsList, setItemsList] = useState([
        {
            name: "Laptop",
            quantity: 1,
            price: 900,
        },
        {
            name: "Headphone",
            quantity: 2,
            price: 200,
        },
    ]);

    return (
        <Box
            sx={{
                width: "100%",
                background: colors.surface[500],
                padding: { xs: "8px", sm: "16px" },
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            {/* ORDER INFORMATION BOX */}
            
            <Box
                sx={{
                    width: "100%",
                    background: colors.surface[100],
                    padding: "10px",
                    borderRadius: "4px",
                    flexShrink: 0,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        {/* ORDER NUMBER */}
                        
                        <Typography
                            variant="body1"
                            color={colors.textSecondary[600]}
                            fontStyle={"italic"}
                            my={"6px"}
                        >
                            #ORD-20240727-0105
                        </Typography>

                        {/* ORDER STATUS FLAG: { NEW, PREPARING, READY } */}
                        
                        <OrderFlag status="new" />
                    </Box>
                </Box>
                        
                {/* TOP CARD [TOTAL QUANTITY, DATA & TIME, DETAILS ICON] */}
                
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        marginTop: { xs: "10px", sm: "0" },
                    }}
                >
                        {/* QUANTITY */}
                        
                    <Typography fontSize={"16px"}>2 items</Typography>
                    
                    {/* DATE AND TIME */}
                    
                    <Typography
                        fontSize={"16px"}
                        textAlign={"center"}
                        fontStyle={"italic"}
                    >
                        2 May 2024, 5:00 PM
                    </Typography>

                    {/* DETAILS ICON */}
                    
                    <Box sx={{ cursor: "pointer" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill={colors.textSecondary[600]}
                        >
                            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                        </svg>
                    </Box>
                </Box>
            </Box>

            {/* Order Overview Box */}
            
            <Box
                sx={{
                    width: "100%",
                    borderRadius: "6px",
                    padding: { xs: "8px", sm: "16px" },
                    mt: { xs: "10px", sm: "20px" },
                    background: colors.surface[100],
                    flex: "1 1 auto",
                    overflowY: "auto",
                }}
            >
                <Box
                    mx={{ xs: "8px", sm: "20px" }} 
                    sx={{
                        maxHeight: { xs: "200px", sm: "250px" },
                        overflow: "auto",
                        padding: { xs: "8px", sm: "16px" }, 
                    }}
                >   
                    {/* THIS WILL SHOW THE NUMBER OF ITEMS PURCHASED */}
                    
                    {itemsList.map((data, index) => (
                        <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "row", 
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px", 
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" }, 
                                fontWeight: "600",
                                color: colors.textPrimary[400],
                                width: { xs: "100%", sm: "auto" }, 
                                textAlign: { xs: "center", sm: "left" }, 
                                marginBottom: { xs: "8px", sm: "0" }, 
                            }}
                        >
                            {data.quantity} x {data.name}
                        </Box>
                        <Box
                            sx={{
                                fontSize: { xs: "14px", sm: "16px" }, 
                                fontWeight: "600",
                                color: colors.textPrimary[400],
                                width: { xs: "100%", sm: "auto" }, 
                                textAlign: { xs: "center", sm: "right" }, 
                            }}
                        >
                            Rs. {data.price * data.quantity}
                        </Box>
                    </Box>
                    ))}
                </Box>
            </Box>

            {/* Bottom Box */}
            
            <Box
                sx={{
                    padding: "16px",
                    borderRadius: "6px",
                    background: colors.surface[100],
                    flexShrink: 0,
                }}
            >   
                {/* FIRST LINE WHICH INCLUDES [TOTAL, PAID OR CASH STATUS, TOTAL VALUE OF THE ORDER] */}
                
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "14px", sm: "18px" },
                            fontWeight: "600",
                            color: colors.textPrimary[400],
                            textTransform: "uppercase",
                            marginTop: { xs: "10px", sm: "0" },
                        }}
                    >
                        Total
                    </Typography>

                    <Typography
                        sx={{
                            padding: "4px 20px",
                            background: colors.orangeAccent[500],
                            color: colors.background[100],
                            fontWeight: "600",
                            borderRadius: "4px",
                            textTransform: "capitalize",
                            marginTop: { xs: "10px", sm: "0" },
                        }}
                    >
                        Paid
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", sm: "18px" },
                            fontWeight: "600",
                            color: colors.textPrimary[400],
                            marginTop: { xs: "10px", sm: "0" },
                        }}
                    >
                        Rs.{" "}
                        {itemsList.reduce(
                            (acc, item) => acc + item.quantity * item.price, // THIS WILL ADD TOTAL VALUE OF ALL ITEMS
                            0
                        )}
                    </Typography>
                </Box>
                
                {/* REJECT AND ACCEPT BUTTTON */}
                
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "16px",
                        mt: "16px",
                        flexWrap: "wrap",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            padding: "8px 20px",
                            background: colors.redAccent[500],
                            color: "#fff",
                            "&:hover": {
                                background: colors.redAccent[600],
                            },
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        Reject
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            padding: "8px 20px",
                            background: colors.secondary[500],
                            color: "#fff",
                            "&:hover": {
                                background: colors.secondary[600],
                            },
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        Accept
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default OrderOverview;
