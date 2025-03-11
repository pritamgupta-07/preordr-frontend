"use client";

import { useSelector } from "react-redux";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { Mode } from "@/lib/store/features/colorMode/colorModeSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useEffect } from "react";

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
    <div className={`p-4 h-screen bg-[var(--color-surface-900)]`}>
      <p className="bg-rek-400">Current Mode: {mode}</p>
      <button onClick={handleToggleMode}>Toggle Mode</button>
    </div>
  );
}