"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { tokens } from "@/theme/theme";
import { Box, Button, Typography, Slider, useTheme } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import Cropper, { Area } from "react-easy-crop";
import getCroppedImg from "./cropImage"; // Utility for cropping

const UploadImage: React.FC = () => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    
    const mode = useAppSelector((state) => state.colorMode.mode);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handle file upload and generate preview
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            setCroppedImage(null); // Reset cropped image when a new image is uploaded
        }
    }, []);

    // Disable file upload when cropping
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        disabled: !!previewUrl && !croppedImage, // Disable dropzone during cropping
    });

    // Handle crop completion
    const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    // Generate the cropped image
    const showCroppedImage = useCallback(async () => {
        if (previewUrl && croppedAreaPixels) {
            const croppedImg = await getCroppedImg(previewUrl, croppedAreaPixels);
            setCroppedImage(croppedImg);
        }
    }, [previewUrl, croppedAreaPixels]);

    // Handle file input click trigger
    const handleSelectClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
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
                    cursor: !!previewUrl && !croppedImage ? "not-allowed" : "pointer", // Show disabled cursor during cropping
                    padding: "8px",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                <input {...getInputProps()} ref={fileInputRef} />
                {previewUrl && !croppedImage ? (
                    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                        <Cropper
                            image={previewUrl}
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 3} // Adjust aspect ratio
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </Box>
                ) : croppedImage ? (
                    <Box
                        component="img"
                        src={croppedImage}
                        alt="Cropped Preview"
                        sx={{ height: "100%", objectFit: "contain" }}
                    />
                ) : (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={colors.textPrimary[100]}
                            width="140px"
                            height="140px"
                        >
                            <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path>
                        </svg>
                        <Box my={1}>
                            <Typography color={colors.textPrimary[300]}>
                                Select or drag and drop a file
                            </Typography>
                        </Box>
                    </>
                )}
            </Box>

            {previewUrl && !croppedImage && (
                <Box mt={2}>
                    <Typography>Zoom</Typography>
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={(e, zoom) => setZoom(Number(zoom))}
                    />
                </Box>
            )}

            <Box sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleSelectClick}
                    sx={{
                        background: colors.secondary[500],
                        "&:hover": { background: colors.secondary[600] },
                        color: "#fff",
                    }}
                    disabled={!!previewUrl && !croppedImage} // Disable button during cropping
                >
                    Select
                </Button>
                {previewUrl && !croppedImage && (
                    <Button
                        variant="contained"
                        onClick={showCroppedImage}
                        sx={{
                            background: colors.primary[500],
                            "&:hover": { background: colors.primary[600] },
                            color: "#fff",
                            ml: 2,
                        }}
                    >
                        Crop
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default UploadImage;
