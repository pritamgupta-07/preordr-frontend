"use client";
import { useEffect, useState } from "react";
import MenuDetails from "@/components/MenuDetails/MenuDetails/MenuDetails";
import MenuDetailsSkeleton from "@/components/MenuDetails/MenuDetailsSkeleton/MenuDetailsSkeleton";
import MenuDetailsTopbar from "@/components/MenuDetails/MenuDetailsTopbar/MenuDetailsTopbar";
import { Box } from "@mui/material";

const Page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Box sx={{ width: "100%", padding: "0 20px", overflow: "auto" }}>
                {/* TOPBAR */}
                <Box>
                    <MenuDetailsTopbar />
                </Box>


                {/* Conditional Rendering based on loading state */}
                {loading ? (
                    <>
                        <MenuDetailsSkeleton />
                        <MenuDetailsSkeleton />
                        <MenuDetailsSkeleton />
                    </>
                ) : (
                    <MenuDetails />
                )}
            </Box>
        </>
    );
};

export default Page;
