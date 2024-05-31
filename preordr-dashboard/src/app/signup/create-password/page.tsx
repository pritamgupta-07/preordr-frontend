"use client";
import React, { FormEvent, useState } from "react";
import {
    Container,
    Box,
    useTheme,
    Typography,
    Button,
    TextField,
} from "@mui/material";
import { tokens } from "@/theme/theme";
import { useAppSelector } from "@/lib/store/hooks";

const page = () => {
    const mode = useAppSelector((state) => state.colorMode.mode);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPass, setShowPass] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [validateState, setValidateState] = useState<boolean>(false);
    const [validateText, setValidateText] = useState<string>("");

    const handleSubmit = (
        e: FormEvent<HTMLFormElement | HTMLButtonElement>
    ) => {
        e.preventDefault();
        
        if (!password || !confirmPassword) {
            setValidateText("Please fill all the fields");
            return setValidateState(true);
        }
        
        if (password && confirmPassword && password !== confirmPassword) {
            setValidateText("Your password doesn't match!");
            return setValidateState(true);
        }
        
        setValidateState(false);
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Box
                sx={{ p: 4, width: "100%", py: 2, borderRadius: "12px" }}
                className="box-shadow"
            >
                {/* Icon  */}
                <Box
                    component={"div"}
                    sx={{
                        my: 2,
                        mx: "auto",
                        width: "4rem",
                        height: "4rem",
                        background: colors.background[900],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        width="40px"
                        viewBox="0 -960 960 960"
                        fill={`${colors.background[100]}`}
                    >
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                    </svg>
                </Box>

                {/* Content */}

                <Box
                    component="div"
                    sx={{
                        my: 2,
                        mx: "auto",
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h2"
                        textAlign={"center"}
                        sx={{
                            fontWeight: "bold",
                            my: 2,
                            color: colors.primary,
                        }}
                    >
                        Create Password
                    </Typography>
                    {/* FORM */}
                    <form
                        style={{ margin: "20px 0" }}
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <Box sx={{ py: 1, position: "relative" }}>
                            <Typography>Password</Typography>
                            <TextField
                                fullWidth
                                type={showPass ? "text" : "password"}
                                placeholder={showPass ? "password" : "••••••••"}
                                sx={{ fontSize: "20px" }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {/* EYE ICON */}
                            <Box
                                onClick={() => setShowPass(!showPass)}
                                sx={{
                                    position: "absolute",
                                    right: 6,
                                    top: "50%",
                                }}
                            >
                                {showPass ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill={colors.textSecondary[500]}
                                    >
                                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill={colors.textSecondary[500]}
                                    >
                                        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                    </svg>
                                )}
                            </Box>

                            {/* EYE ICON END */}
                        </Box>
                        <Box sx={{ py: 1, position: "relative" }}>
                            <Typography>Confirm Password</Typography>
                            <TextField
                                fullWidth
                                type={showPass ? "text" : "password"}
                                placeholder={showPass ? "password" : "••••••••"}
                                sx={{ fontSize: "20px" }}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />

                            {/* EYE ICON */}
                            <Box
                                onClick={() => setShowPass(!showPass)}
                                sx={{
                                    position: "absolute",
                                    right: 6,
                                    top: "50%",
                                }}
                            >
                                {showPass ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill={colors.textSecondary[500]}
                                    >
                                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill={colors.textSecondary[500]}
                                    >
                                        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                                    </svg>
                                )}
                            </Box>
                            {/* EYE ICON END */}
                        </Box>
                        <Typography
                            variant="body1"
                            sx={{
                                color: colors.redAccent[500],
                                display: `${validateState ? "block" : "none"}`,
                            }}
                        >
                            {validateText}
                        </Typography>

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1,
                                my: 4,
                                background: colors.primary[500],
                                color: colors.background[100],
                                fontSize: "16px",
                                "&:hover": {
                                    background: colors.primary[600],
                                },
                            }}
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Save Password
                        </Button>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default page;
