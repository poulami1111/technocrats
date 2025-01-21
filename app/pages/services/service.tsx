"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";


// Props interface for Page component
interface PageProps {
  setUploadedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Page: React.FC<PageProps> = ({ setUploadedImage }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleGetReport = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        setUploadedImage(base64Image); // Pass image data to parent
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4">
    <Navbar />
    <div className="text-white text-center text-4xl md:text-7xl font-bold mb-8 mt-16 md:mt-20">
      Are you ready to get healthy?
    </div>
    <div className="w-full max-w-md md:max-w-xl bg-gray-800/60 backdrop-blur-sm border border-white/20 shadow-lg rounded-lg p-6 md:p-8 space-y-6">
      <h2 className="text-lg md:text-2xl font-semibold text-gray-100 text-center">
        Upload Image to Get Report
      </h2>
      <div className="flex flex-col items-center border-2 border-dashed border-gray-300/20 p-4 md:p-6 rounded-lg">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center space-y-2"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 flex items-center justify-center rounded-full shadow-md">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-4-4 4 4 0 014-4h10a4 4 0 014 4 4 4 0 01-4 4M8 12h8m-4-4v8"
              />
            </svg>
          </div>
          <span className="text-gray-500 text-xs md:text-sm">
            Click to upload an image
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {selectedFile && (
          <p className="mt-2 text-xs md:text-sm text-gray-600 text-center">
            Selected: <strong>{selectedFile.name}</strong>
          </p>
        )}
      </div>
      <button
        onClick={handleGetReport}
        className="w-full bg-gradient-to-r from-yellow-700 to-black/60 hover:bg-yellow-800 text-white font-medium py-2 md:py-2.5 rounded-lg transition-all duration-200"
      >
        Get Report
      </button>
    </div>
  </div>
  );
};

export default Page;



