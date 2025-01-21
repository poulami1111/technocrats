"use client";
import React, { useState } from "react";
import ReportPage from "../pages/ReportPage";
import Page from "../pages/services/service";

const AppPage: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <div>
      {uploadedImage ? (
        <ReportPage image={uploadedImage} />
      ) : (
        <Page setUploadedImage={setUploadedImage} />
      )}
    </div>
  );
};

export default AppPage;
