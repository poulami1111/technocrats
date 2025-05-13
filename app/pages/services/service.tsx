"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { SiPolestar } from "react-icons/si";


// Props interface for Page component
interface PageProps {
  setUploadedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Page: React.FC<PageProps> = ({ setUploadedImage }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleGetReport = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        setUploadedImage(base64Image);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-12">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF9D23]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Are you ready to get healthy?
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Upload your medical image and get an instant analysis report. Our AI-powered system will help you understand your health better.
          </p>

          {/* Upload Card */}
          <div className="w-full max-w-md mx-auto bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Upload Your Image
                </h2>
                <p className="text-gray-400 text-sm">
                  Supported formats: JPG, PNG, JPEG
                </p>
              </div>

              {/* Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${isDragging
                  ? "border-[#FF9D23] bg-[#FF9D23]/5"
                  : "border-gray-600 hover:border-gray-500"
                  }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center space-y-4"
                >
                  <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/70 transition-colors">
                    <svg
                      className="w-10 h-10 text-[#FF9D23] transform group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-4-4 4 4 0 014-4h10a4 4 0 014 4 4 4 0 01-4 4M8 12h8m-4-4v8"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium mb-1">
                      {selectedFile ? "File Selected" : "Drop your file here"}
                    </p>
                    <p className="text-gray-400 text-sm">
                      or click to browse
                    </p>
                  </div>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {selectedFile && (
                  <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
                    <p className="text-sm text-gray-300 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {selectedFile.name}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={handleGetReport}
                disabled={!selectedFile}
                className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-[1.02] ${selectedFile
                  ? "bg-gradient-to-r from-[#FF9D23] to-[#FF6B6B] hover:shadow-lg hover:shadow-[#FF9D23]/20"
                  : "bg-gray-700/50 cursor-not-allowed"
                  }`}
              >
                {selectedFile ? "Generate Report" : "Upload an Image First"}
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-[#FF9D23] mb-2"> <SiPolestar/></div>
              <h3 className="text-white font-medium mb-1">Quick Analysis</h3>
              <p className="text-gray-400 text-sm">Get results in seconds</p>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-[#FF9D23] mb-2">🔒</div>
              <h3 className="text-white font-medium mb-1">Secure & Private</h3>
              <p className="text-gray-400 text-sm">Your data is protected</p>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-[#FF9D23] mb-2">📊</div>
              <h3 className="text-white font-medium mb-1">Detailed Report</h3>
              <p className="text-gray-400 text-sm">Comprehensive insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;



