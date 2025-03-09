"use client";
import { useSelector } from "react-redux";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { Mode } from "@/lib/store/features/colorMode/colorModeSlice";
import { useAppDispatch } from "@/lib/store/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const mode = useSelector(
    (state: { colorMode: { mode: Mode } }) => state.colorMode.mode
  );

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div className={`h-screen bg-black`}>
      <p>Current Mode: {mode}</p>
      <button onClick={handleToggleMode}>Toggle Mode</button>
    </div>
  );
}
