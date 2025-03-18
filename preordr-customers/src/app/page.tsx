"use client";

import { useSelector } from "react-redux";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { Mode } from "@/lib/store/features/colorMode/colorModeSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import TopRatedRestaurants from "@/components/Sections/TopRatedRestaurants/TopRatedRestaurants";

export default function Home() {
  const dispatch = useAppDispatch();
  const mode = useSelector(
    (state: { colorMode: { mode: Mode } }) => state.colorMode.mode
  );

  // Update the data-theme attribute whenever the mode changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div className={`p-4 h-screen bg-[var(--color-surface-300)] text-[var(--color-text-primary-900)]`}>
      <Navbar />
      <TopRatedRestaurants />
    </div>
  );
}