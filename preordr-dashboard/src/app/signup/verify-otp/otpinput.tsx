"use client";
import { Box, OutlinedInput } from "@mui/material";
import { MutableRefObject } from 'react';
import { useRef, useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

interface OTPInputProps {
    length?: number;
    onOTPSubmit: (otp: string) => void;
}


const OTPInput: React.FC<OTPInputProps> = ({ length = 4, onOTPSubmit }) => {
    const [otp, setOTP] = useState<string[]>(new Array(length).fill(""));
    const inputRefs: MutableRefObject<(HTMLInputElement | null)[]> = useRef(new Array(length).fill(null));;
    // Autofocus on the first input on page load
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    // Handling the change on the input
    const handleChange = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, i: number) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numeric values
        const newArr = [...otp];
        newArr[i] = value.substring(value.length - 1);
        setOTP(newArr);

        // After submitting the OTP
        const combinedOTP: string = newArr.join("");
        if (combinedOTP.length === length) {
            onOTPSubmit(combinedOTP);
        }

        // Moving to the next input field
        if (value && i < length - 1 && inputRefs.current[i + 1]) {
            inputRefs.current[i + 1]?.focus();
        }
    };

    // Handle Click
    const handleClick = (i: number) => {
        if (i > 0 && !otp[i - 1]) {
            inputRefs.current[otp.indexOf("")]?.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, i: number) => {
        // Moving to the previous input field on pressing backspace
        if (
            e.key === "Backspace" &&
            !otp[i] &&
            i > 0 &&
            inputRefs.current[i - 1]
        ) {
            inputRefs.current[i - 1]?.focus();
        }
    };

    return (
        <Box
            component="div"
            className={"otp-container"}
            sx={{
                my: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
            }}
        >
            {otp.map((value, i) => (
                <OutlinedInput
                    key={i}
                    ref={(input) => (inputRefs.current[i] = input)}
                    value={value}
                    sx={{
                        height: { xs: "40px", md: "60px" },
                        width: { xs: "40px", md: "60px" },
                        fontSize: "24px",
                        textAlign: "center",
                    }}
                    onChange={(e) => handleChange(e, i)}
                    onClick={() => handleClick(i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    inputProps={{ maxLength: 1 }}
                    type="text"
                />
            ))}
        </Box>
    );
};

export default OTPInput;
