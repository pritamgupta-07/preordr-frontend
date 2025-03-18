"use client";
import Image from "next/image";
import GalleryDialoge from "../../../components/galleryDialoge/GalleryDialoge";
import { useEffect, useState } from "react";
import { data, hotelFacilities, reviews } from "@/data/sample";


const facilityAvailiable = (isAvailiable: boolean) => {
  if (isAvailiable) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-check"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-x"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    );
  }
};

const page = () => {
  const [galleryToggle, setGalleryToggle] = useState(false);

  const openGallery = () => {
    setGalleryToggle(true);
  };

  const closeGallery = () => {
    setGalleryToggle(false);
  };

  return (
    <div className="container mx-auto my-2">
      <GalleryDialoge
        isOpen={galleryToggle}
        closeGallery={() => closeGallery()}
        content={data}
      />
      {/* Gallery */}
      <div className="w-full h-[600px] flex flex-col sm:flex-row gap-2 p-2">
        {/* Banner Main Image */}
        <div className="relative w-full sm:w-3/5 h-2/3 sm:h-full overflow-hidden rounded-xl">
          <Image
            src={data[0].url}
            fill={true}
            alt="Banner image hotel"
            className="object-cover"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="w-full sm:w-2/5 h-1/3 sm:h-full grid grid-cols-2 gap-2">
          {data.length > 5
            ? data.slice(1, 5).map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={image.url}
                    fill={true}
                    alt="Banner image hotel"
                    className="object-cover rounded-xl"
                  />
                  {index === 3 && (
                    <div className="flex justify-center items-center h-full">
                      <div
                        onClick={openGallery}
                        className="absolute inset-0 flex items-center justify-center bg-black opacity-50 rounded-xl cursor-pointer"
                      ></div>
                      <span className="relative text-white text-2xl font-bold z-20">
                        +{data.length - 5}
                      </span>
                    </div>
                  )}
                </div>
              ))
            : data.slice(1, 5).map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={image.url}
                    fill={true}
                    alt="Banner image hotel"
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}
        </div>
      </div>

      {/* Hotel details */}
      <div className="mx-auto p-6 rounded-lg">
        {/* Text details of the hotel */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Name of the Hotel
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            suscipit illo earum! Minima numquam exercitationem maiores eos
            architecto? Nostrum expedita ab ratione eveniet nihil sed nobis modi
            debitis quaerat corporis?
          </p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-500 font-semibold">
              4.3 ★ 1.5k reviews
            </span>
            <button className="text-gray-600 hover:text-gray-800">
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
                className="lucide lucide-bookmark"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Facilities available */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {hotelFacilities.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                {facilityAvailiable(item.isAvailiable)}
                <span className="text-gray-700">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Review Highlight Section */}
      <div className="mx-auto p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Review Highlights</h1>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.time}</p>
                </div>
                <div className="flex items-center space-x-1 ml-auto">
                  <span className="text-yellow-500 font-semibold">
                    {review.rating} ★
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">{review.description}</p>
              <div className="flex items-center space-x-4 mt-4">
                <button className="text-gray-600 hover:text-gray-800 flex items-center space-x-2">
                  <span>Helpful ({review.helpful})</span>
                </button>
                <button className="text-gray-600 hover:text-gray-800 flex items-center space-x-2">
                  <span>Comment ({review.comments})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;