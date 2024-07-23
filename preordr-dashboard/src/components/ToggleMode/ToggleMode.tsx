"use client";
import { useAppDispatch } from "@/lib/store/hooks";

const ToggleModeButton = () => {
    const dispatch = useAppDispatch();
    return <div>
        <button>Click me!</button>
    </div>;
};

export default ToggleModeButton;
