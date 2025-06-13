"use client";

import React, { useState } from "react";
import { SiPolestar } from "react-icons/si";
import Navbar from "@/app/components/Navbar";

interface PageProps {
  setUploadedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

interface DiseaseDetails {
  category: string;
  description: string;
  diet: string[];
  effect_of_disease: string;
  most_likely_cause: string;
  name: string;
  precautions: string[];
  symptoms: string[];
}

const Page: React.FC<PageProps> = ({ setUploadedImage }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [diseaseDetails, setDiseaseDetails] = useState<DiseaseDetails | null>(null);

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

  const handleGetReport = async () => {
    if (!selectedFile) {
      alert("Please upload an image first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error occurred' }));
        throw new Error(errorData.error || "Failed to upload image");
      }

      const data = await response.json();
      console.log("API Response in service:", data); // Debug log

      // Convert image to base64 for preview
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        console.log("Setting uploaded image:", base64Image.substring(0, 100) + "..."); // Debug log
        // Pass both the image and the API response data
        setUploadedImage(base64Image);
        // Store the API response in localStorage temporarily
        localStorage.setItem('diagnosisData', JSON.stringify(data));
      };
      reader.readAsDataURL(selectedFile);

    } catch (error: any) {
      console.error("Upload error:", error);
      alert(error.message || "An error occurred during upload");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <Navbar />

      <div className="relative flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF9D23]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Are you ready to get healthy?
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Upload your medical image and get an instant analysis report. Our AI-powered system will help you understand your health better.
          </p>

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
                    <p className="text-gray-400 text-sm">or click to browse</p>
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {diseaseDetails && (
              <div className="col-span-3 bg-gray-800/30 rounded-xl backdrop-blur-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">{diseaseDetails.name}</h2>
                <p className="text-gray-300 mb-4">{diseaseDetails.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#FF9D23] mb-2">Symptoms</h3>
                    <ul className="text-gray-300">
                      {diseaseDetails.symptoms.map((symptom, index) => (
                        <li key={index} className="mb-1">• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[#FF9D23] mb-2">Precautions</h3>
                    <ul className="text-gray-300">
                      {diseaseDetails.precautions.map((precaution, index) => (
                        <li key={index} className="mb-1">• {precaution}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#FF9D23] mb-2">Recommended Diet</h3>
                    <ul className="text-gray-300">
                      {diseaseDetails.diet.map((item, index) => (
                        <li key={index} className="mb-1">• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#FF9D23] mb-2">Additional Information</h3>
                    <div className="text-gray-300">
                      <p className="mb-2"><span className="font-semibold">Category:</span> {diseaseDetails.category}</p>
                      <p className="mb-2"><span className="font-semibold">Effects:</span> {diseaseDetails.effect_of_disease}</p>
                      <p><span className="font-semibold">Likely Causes:</span> {diseaseDetails.most_likely_cause}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-[#FF9D23] mb-2"> <SiPolestar /></div>
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




