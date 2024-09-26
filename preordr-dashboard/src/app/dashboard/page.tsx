"use client"
import { useState, useEffect } from "react";
import DashboardData from "@/components/Dashboard/DashboardData/DashboardData";
import DashboardSkeleton from "@/components/Dashboard/DashboardLoader/DashboardSkeleton";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching or loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <DashboardSkeleton /> : <DashboardData />}
        </>
    );
}
