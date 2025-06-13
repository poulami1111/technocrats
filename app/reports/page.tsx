"use client";
import React, { useState, useEffect } from "react";
import ReportPage from "../pages/ReportPage";
import Page from "../pages/services/service";

interface DiagnosisData {
  details: {
    category: string;
    description: string;
    diet: string[];
    effect_of_disease: string;
    most_likely_cause: string;
    name: string;
    precautions: string[];
    symptoms: string[];
  };
  predicted_category: string;
  predicted_class: string;
}

const AppPage: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [diagnosisData, setDiagnosisData] = useState<DiagnosisData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {
    if (uploadedImage && imageFile) {
      const analyzeImage = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const formData = new FormData();
          formData.append('image', imageFile);
          
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/predict`, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
              errorData.message || 
              `Server responded with ${response.status}: ${response.statusText}`
            );
          }

          const data: DiagnosisData = await response.json();
          console.log('API Response:', data); // Debug log
          console.log('Setting diagnosis data:', data); // Debug log
          setDiagnosisData(data);
        } catch (err) {
          console.error('Error analyzing image:', err);
          setError(err instanceof Error ? err.message : 'Failed to analyze the image. Please try again.');
        } finally {
          setLoading(false);
        }
      };

      analyzeImage();
    }
  }, [uploadedImage, imageFile]);

  useEffect(() => {
    if (uploadedImage) {
      // Retrieve the diagnosis data from localStorage
      const storedData = localStorage.getItem('diagnosisData');
      if (storedData) {
        try {
          const data = JSON.parse(storedData);
          console.log('Retrieved diagnosis data:', data);
          setDiagnosisData(data);
          // Clean up localStorage
          localStorage.removeItem('diagnosisData');
        } catch (err) {
          console.error('Error parsing stored diagnosis data:', err);
          setError('Failed to load diagnosis data');
        }
      }
    }
  }, [uploadedImage]);

  const handleBack = () => {
    setUploadedImage(null);
    setImageFile(null);
    setDiagnosisData(null);
    setError(null);
  };

  return (
    <div>
      {uploadedImage ? (
        <>
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FF9D23] mb-4"></div>
              <p className="text-xl">Analyzing your image...</p>
              <p className="text-gray-400">This may take a moment</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
              <div className="bg-red-500/20 p-6 rounded-xl max-w-md text-center">
                <h2 className="text-2xl font-bold mb-2">Error</h2>
                <p className="mb-4">{error}</p>
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-[#FF9D23] rounded-lg hover:bg-[#FF9D23]/80 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : diagnosisData ? (
            console.log('Rendering ReportPage with data:', diagnosisData), // Debug log
            <ReportPage 
              image={uploadedImage} 
              diagnosisData={diagnosisData}
            />
          ) : null}
        </>
      ) : (
        <Page setUploadedImage={setUploadedImage} />
      )}
    </div>
  );
};

export default AppPage;