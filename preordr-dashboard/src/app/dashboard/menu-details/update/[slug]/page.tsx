"use client";
import MenuCreateButtons from "@/components/MenuDetails/MenuDetailsButtons/MenuCreateButtons";
import UploadImage from "@/components/Extras/UploadImage/UploadImage";
import {
    Box,
    Button,
    Card,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

const page = () => {
    const [isVeg, setIsVeg] = useState<boolean>(false);
    const [containsEgg, setContainsEgg] = useState<boolean>(false);
    
    return (
        <Box
            sx={{
                width: "100%",
                padding: { xs: "10px", md: "0 20px" },
                overflow: "auto",
                margin: "24px 0"
            }}
        >
            <Typography
                variant="h2"
                my={1}
                fontWeight={900}
                fontSize={{ xs: "24px", md: "32px" }}
            >
                Create Menu Item
            </Typography>

            <Grid container spacing={4}>
                {/* LEFT SIDE: NAME, CATEGORY, DESCRIPTION, PRICE */}
                <Grid item xs={12} md={6}>
                    {/* ITEM NAME */}
                    <Box width="100%" my={2}>
                        <TextField fullWidth label="Name" variant="outlined" />
                    </Box>

                    {/* ITEM CATEGORY */}
                    <Box width="100%" my={2}>
                        <TextField
                            fullWidth
                            label="Category"
                            variant="outlined"
                        />
                    </Box>

                    {/* ITEM DESCRIPTION */}
                    <Box width="100%" my={2}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Description"
                            variant="outlined"
                        />
                    </Box>

                    {/* ITEM PRICE */}
                    <Box display="flex" alignItems="center" my={2}>
                        {/* Price Input */}
                        <TextField
                            label="Price"
                            variant="outlined"
                            type="number"
                            sx={{ flex: 1, marginRight: 2 }}
                        />

                        {/* Currency Select */}
                        <FormControl variant="outlined" sx={{ minWidth: 100 }}>
                            <Select defaultValue="inr">
                                <MenuItem value="inr">INR</MenuItem>
                                <MenuItem value="usd">USD</MenuItem>
                                {/* Add more currencies if needed */}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                {/* RIGHT SIDE: VEG, BEST SELLER, IMAGE */}
                <Grid item xs={12} md={6}>
                    {/* SWITCHES */}
                    <Box width="100%" sx={{ display: "flex", gap: "18px" }}>
                        {/* COLUMN  1 */}
                        <Box width={"50%"}>
                            {/* PURE VEG */}
                            <Box
                                sx={{
                                    width: "100%",
                                    my: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    fontSize="16px"
                                    textTransform="capitalize"
                                >
                                    Pure Veg
                                </Typography>
                                <Switch
                                    checked={isVeg}
                                    onClick={() => {setIsVeg(!isVeg)}}
                                />
                            </Box>

                            {/* BEST SELLER */}
                            <Box
                                sx={{
                                    width: "100%",
                                    my: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    fontSize="16px"
                                    textTransform="capitalize"
                                >
                                    Best Seller
                                </Typography>
                                <Switch />
                            </Box>

                            {/* CONTAINS EGG */}
                            <Box
                                sx={{
                                    width: "100%",
                                    mt: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    fontSize="16px"
                                    textTransform="capitalize"
                                >
                                    Contains Egg
                                </Typography>
                                <Switch
                                    checked={isVeg? false : containsEgg}
                                    disabled={isVeg ? true : false}
                                    onChange={() => setContainsEgg(!containsEgg)}
                                />
                            </Box>
                        </Box>

                        {/* COLUMN 2 */}
                        <Box width="50%">
                            {/* IS AVAILIABLE */}
                            <Box
                                sx={{
                                    width: "100%",
                                    my: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    fontSize="16px"
                                    textTransform="capitalize"
                                >
                                    available
                                </Typography>
                                <Switch />
                            </Box>

                            {/* IS POPULAR */}
                            <Box
                                sx={{
                                    width: "100%",
                                    my: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    fontSize="16px"
                                    textTransform="capitalize"
                                >
                                    Popular
                                </Typography>
                                <Switch />
                            </Box>
                        </Box>
                    </Box>

                    {/* IMAGE UPLOAD */}
                    <Box width="100%" mt={2}>
                        <UploadImage />
                    </Box>
                </Grid>

                {/* BUTTONS */}
                <Grid item xs={12}>
                    <MenuCreateButtons />
                </Grid>
            </Grid>
        </Box>
    );
};

export default page;
