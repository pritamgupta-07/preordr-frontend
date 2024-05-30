"use client";
import { Box, OutlinedInput } from "@mui/material";
import React, {
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";

interface OTPInputProps {
  length?: number;
  onOTPSubmit: (otp: string) => void | undefined;
}

const OTPInput: OTPInputProps = ({ length = 4, onOTPSubmit = () => {} }) => {
  const [otp, setOTP] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Autofocus on the input on page open
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]?.firstElementChild?.focus();
    }
  }, []);

  // Handling the change on the input
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numeric values

    const newArr = [...otp];

    newArr[i] = value.substring(value.length - 1);

    setOTP(newArr);

    // after submitting the otp
    const combinedOTP: string = newArr.join("");

    if (combinedOTP.length === length) {
      onOTPSubmit(combinedOTP);
    }

    // Moving to the next input field
    if (value && i < length - 1 && inputRefs.current[i + 1]) {
      inputRefs.current[i + 1]?.firstElementChild?.focus();
    }
  };

  // Handle Click
  const handleClick = (i: number) => {
    // inputRefs.current[i]?.firstElementChild?.setSelectionRange(1, 1);

    if (i > 0 && !otp[i - 1]) {
      inputRefs.current[otp.indexOf("")]?.firstElementChild?.focus();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    // Moving to the last input field on click backspace
    if (e.key === "Backspace" && !otp[i] && i > 0 && inputRefs.current[i - 1]) {
      inputRefs.current[i - 1]?.firstElementChild?.focus();
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
      {otp.map((value, i) => {
        return (
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
        );
      })}
    </Box>
  );
};

export default OTPInput;
