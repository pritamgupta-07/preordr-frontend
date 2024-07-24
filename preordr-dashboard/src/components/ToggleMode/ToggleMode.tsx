"use client";
import { toggleMode } from "@/lib/store/features/colorMode/colorModeSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { Switch } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useState } from "react";
import DarkModeIcon from "../ModesIcons/DarkModeIcon";
import LightModeIcon from "../ModesIcons/LightModeIcon";

const ToggleModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        dispatch(toggleMode());
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Switch
            checked={isDarkMode}
            onChange={changeTheme}
            checkedIcon={<DarkModeIcon />}
            icon={<LightModeIcon />}
        />
    );
};

export default ToggleModeButton;
