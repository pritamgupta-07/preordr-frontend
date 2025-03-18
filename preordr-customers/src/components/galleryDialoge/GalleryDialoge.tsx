import Image from "next/image";
import React, { useState, useEffect } from "react";

type dataObj = {
  url: string;
};

interface DialogProps {
  isOpen: boolean;
  closeGallery: () => void;
  content: dataObj[];
}

const GalleryDialog: React.FC<DialogProps> = ({
  isOpen,
  closeGallery,
  content,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          goToNext();
        } else if (event.key === "ArrowLeft") {
          goToPrevious();
        } else if (event.key === "Escape") {
          closeGallery();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const close = () => {
    closeGallery();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-30"
        onClick={close}
        role="presentation"
      ></div>

      {/* Gallery Modal */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 select-none">
        {/* Close button */}
        <button
          className="text-white absolute right-6 top-6 cursor-pointer z-50 hover:opacity-80 transition-opacity"
          onClick={close}
          aria-label="Close gallery"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        <button
          className="text-white absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-50 hover:opacity-80 transition-opacity md:left-12"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          className="text-white absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-50 hover:opacity-80 transition-opacity md:right-12"
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Current Image */}
        <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center overflow-hidden">
          <Image
            src={content[currentIndex].url}
            className="object-cover rounded-lg transition-transform duration-300 ease-in-out transform"
            fill
            alt={`Gallery image ${currentIndex + 1}`}
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-50 overflow-x-auto max-w-[90vw]">
          {content.map((image, index) => (
            <button
              key={index}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${
                currentIndex === index
                  ? "border-white"
                  : "border-transparent hover:border-gray-300"
              } transition-all flex-shrink-0`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image.url}
                className="object-cover w-full h-full"
                width={48}
                height={48}
                alt={`Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryDialog;