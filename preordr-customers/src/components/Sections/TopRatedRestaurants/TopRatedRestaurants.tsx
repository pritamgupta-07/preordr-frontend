import Image from "next/image";
import { useRef } from "react";

const TopRatedRestaurants = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary-900)]">
          Top Rated Restaurants
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 snap-x snap-mandatory select-none"
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden snap-center"
          >
            <div className="relative">
              <span className="absolute top-2 right-2 bg-[var(--color-secondary-500)] rounded-full px-3 py-1 text-sm font-semibold text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="ml-1">4.5</span>
              </span>
              <Image
                src="/hotel_dummy.jpg"
                width={320}
                height={200}
                alt="hotel_image"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold text-gray-800">
                Name of the Restaurant
              </p>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-dot"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <circle cx="12" cy="12" r="4" fill="green" stroke="green" />
                </svg>
                <span className="ml-2 text-sm text-gray-600">Veg</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedRestaurants;
