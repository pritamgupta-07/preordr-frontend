"use client";
import { Box, Button, Chip, Switch, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { tokens } from "@/theme/theme";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

const MenuDetailsCard = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.colorMode.mode);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "16px", md: "24px" },
            margin: "24px 0",
            padding: { xs: "16px", md: "24px" },
            paddingBottom: { xs: "12px", md: "16px" },
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            border: `1px solid ${colors.background[300]}`,
            backgroundColor: colors.surface[200],
            alignItems: "center"
        }}
    >
        <Box
            sx={{
                border: `1px solid ${colors.background[500]}`,
                padding: "8px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.3s ease",
                "&:hover": {
                    transform: "scale(1.05)",
                },
                minWidth: { xs: "100%", md: "240px" },
                height: { xs: "auto", md: "180px" },
            }}
        >
            <Image
                src="/sampleImage.png"
                width={240}
                height={180}
                alt="Sample Image"
                style={{
                    borderRadius: "6px",
                    width: "100%",
                    height: "100%",
                }}
            />
        </Box>
    
        <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
                <Chip
                    label="BEST SELLER"
                    sx={{
                        borderRadius: "4px",
                        background: colors.secondary[500],
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "1px 2px",
                        height: "24px",
                    }}
                />
                <Box
                    sx={{
                        margin: "8px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight={900}
                        margin={"6px 0"}
                    >
                        This is a heading
                    </Typography>
    
                    <Box
                        component="span"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="26"
                            height="26"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="44"
                                height="44"
                                rx="2"
                                ry="2"
                                fill="none"
                                stroke="#1d8a2f"
                                stroke-width="2"
                            />
                            <circle cx="24" cy="24" r="13" fill="#1d8a2f" />
                        </svg>
                    </Box>
                </Box>
            </Box>
    
            <Typography variant="body2" textAlign="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates ut aperiam, soluta cumque quas expedita laborum
                ad obcaecati, provident, ea modi atque? Obcaecati neque
                porro culpa esse deserunt. Eius soluta velit recusandae quo
                tempora delectus quisquam culpa. Voluptas soluta quis
                explicabo eligendi autem quam exercitationem saepe animi.
                Debitis cupiditate quam, consequatur non cumque dicta. Ad!
            </Typography>
    
            <Box
                sx={{
                    margin: "20px 0",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "start", sm: "center" },
                    gap: { xs: "12px", sm: "0px" },
                }}
            >
                <Typography variant="body1" fontSize={16} fontWeight={900}>
                    Rs. 250
                </Typography>
    
                <Box
                    component="span"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <Typography fontSize={16} fontWeight={900}>
                        In Stock:
                    </Typography>
                    <Switch />
                </Box>
    
                <Button
                    variant="contained"
                    sx={{
                        background: colors.blueAccent[400],
                        boxShadow: "none",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "#fff",
                        padding: "0px 20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                            background: colors.blueAccent[600],
                        },
                    }}
                >
                    <Box
                        component="span"
                        marginRight={1}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16px"
                            viewBox="0 -960 960 960"
                            width="16px"
                            fill="#e8eaed"
                        >
                            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                        </svg>
                    </Box>
                    Edit
                </Button>
            </Box>
        </Box>
    </Box>
    
    );
};

export default MenuDetailsCard;
