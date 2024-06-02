"use client";
import {
    Box,
    Container,
    Grid,
    Select,
    TextField,
    Typography,
    MenuItem,
    Button,
    useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "@/theme/theme";
import { useAppSelector } from "@/lib/store/hooks";

const page = () => {
    const mode = useAppSelector((state) => state.colorMode.mode);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                height: "100vh",
            }}
        >
            <Box sx={{ width: "100%", py: 10, px: 2 }}>
                <Typography variant="h2" textAlign="center" fontWeight={"bold"}>
                    Vendor Details
                </Typography>

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Your Email</Typography>
                        <TextField
                            fullWidth
                            type="email"
                            disabled={true}
                            value={"alreadyFilled@mail.com"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Your Password</Typography>
                        <TextField
                            fullWidth
                            type="password"
                            disabled={true}
                            value={"password"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Your Name</Typography>
                        <TextField
                            fullWidth
                            type="text"
                            placeholder="John Doe"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">
                            Your State/Region
                        </Typography>
                        <Select
                            fullWidth
                            defaultValue={"Select State/Region"}
                            // placeholder="Select State"
                        >
                            <MenuItem value="AP">Andhra Pradesh</MenuItem>
                            <MenuItem value="AR">Arunachal Pradesh</MenuItem>
                            <MenuItem value="AS">Assam</MenuItem>
                            <MenuItem value="BR">Bihar</MenuItem>
                            <MenuItem value="CT">Chhattisgarh</MenuItem>
                            <MenuItem value="GA">Gujarat</MenuItem>
                            <MenuItem value="HR">Haryana</MenuItem>
                            <MenuItem value="HP">Himachal Pradesh</MenuItem>
                            <MenuItem value="JK">Jammu and Kashmir</MenuItem>
                            <MenuItem value="GA">Goa</MenuItem>
                            <MenuItem value="JH">Jharkhand</MenuItem>
                            <MenuItem value="KA">Karnataka</MenuItem>
                            <MenuItem value="KL">Kerala</MenuItem>
                            <MenuItem value="MP">Madhya Pradesh</MenuItem>
                            <MenuItem value="MH">Maharashtra</MenuItem>
                            <MenuItem value="MN">Manipur</MenuItem>
                            <MenuItem value="ML">Meghalaya</MenuItem>
                            <MenuItem value="MZ">Mizoram</MenuItem>
                            <MenuItem value="NL">Nagaland</MenuItem>
                            <MenuItem value="OR">Odisha</MenuItem>
                            <MenuItem value="PB">Punjab</MenuItem>
                            <MenuItem value="RJ">Rajasthan</MenuItem>
                            <MenuItem value="SK">Sikkim</MenuItem>
                            <MenuItem value="TN">Tamil Nadu</MenuItem>
                            <MenuItem value="TG">Telangana</MenuItem>
                            <MenuItem value="TR">Tripura</MenuItem>
                            <MenuItem value="UT">Uttarakhand</MenuItem>
                            <MenuItem value="UP">Uttar Pradesh</MenuItem>
                            <MenuItem value="WB">West Bengal</MenuItem>
                            <MenuItem value="AN">
                                Andaman and Nicobar Islands
                            </MenuItem>
                            <MenuItem value="CH">Chandigarh</MenuItem>
                            <MenuItem value="DN">
                                Dadra and Nagar Haveli
                            </MenuItem>
                            <MenuItem value="DD">Daman and Diu</MenuItem>
                            <MenuItem value="DL">Delhi</MenuItem>
                            <MenuItem value="LD">Lakshadweep</MenuItem>
                            <MenuItem value="PY">Puducherry</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Your Mobile No.</Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                type="text"
                                value={"+91"}
                                disabled
                                sx={{ width: "60px" }}
                            />
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="96******12"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Your City</Typography>
                        <TextField
                            fullWidth
                            type="text"
                            placeholder="City Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">GST Number</Typography>
                        <TextField
                            fullWidth
                            type="text"
                            placeholder="2YMABV3352Q0Z1"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">Landmark/Place</Typography>
                        <TextField
                            fullWidth
                            type="text"
                            placeholder="City Name"
                        />
                    </Grid>
                    <Grid item xs={12} textAlign={"center"}>
                        <Button
                            variant="contained"
                            sx={{
                                py: 1,
                                width: "40%",
                                fontSize: { sm: "16px", md: "18px" },
                                color: colors.background[100],
                                my: 2,
                            }}
                        >
                            Save Details
                            {/* Icon */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    ml: .5,
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill={colors.background[100]}
                                >
                                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                </svg>
                            </Box>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default page;
