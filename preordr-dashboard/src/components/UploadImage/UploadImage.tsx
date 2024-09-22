"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadImage = () => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const mode = useAppSelector((state) => state.colorMode.mode);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handling file upload and generating preview
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
        },
    });

    // Trigger file input click on button click
    const handleSelectClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <Box width="100%">
                <Typography mb={2} fontSize={16}>
                    Upload picture
                </Typography>
                <Box
                    {...getRootProps()}
                    sx={{
                        width: "100%",
                        height: "300px",
                        background: colors.surface[500],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "2px dashed #ccc",
                        cursor: "pointer",
                        padding: "8px",
                        flexDirection: "column"
                    }}
                >
                    <input {...getInputProps()} ref={fileInputRef} />
                    {isDragActive ? (
                        <Typography>Drop the image here...</Typography>
                    ) : previewUrl ? (
                        <Box
                            component="img"
                            src={previewUrl}
                            alt="Preview"
                            sx={{ height: "100%", objectFit: "contain" }}
                        />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={colors.textPrimary[100]}
                            width="140px"
                            height="140px"
                        >
                            <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path>
                        </svg>
                    )}
                    <Box my={1}>
                        <Typography color={colors.textPrimary[300]}>
                            Select or drag and drop a file
                        </Typography>    
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    my: 2,
                }}
            >
                <Button
                    variant="contained"
                    onClick={handleSelectClick}
                    sx={{
                        background: colors.secondary[500],
                        "&:hover": {
                            background: colors.secondary[600],
                        },
                        color: "#fff",
                    }}
                >
                    Select
                </Button>
            </Box>
        </>
    );
};

export default UploadImage;
