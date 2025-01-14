import React from 'react';
import Bottom from './Bottom';
import Navbar from '../Navbar';
import Image from "next/image";

const Imagebackground = () => {
  return (
    <div className="relative ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-[150vh]">
        <Image
          src="/images/man.jpg"
          alt="background"
          width={1400}
          height={1200}
          className="opacity-80 object-cover "
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="items-center justify-center min-h-screen">
          {/* Glass Divs for Health Info */}
          <div className="flex flex-wrap gap-6 justify-center mt-12 px-4">
            <div className="bg-white/5 backdrop-blur-lg h-24 absolute inset-0 left-8 top-16 border border-white/30 p-4 rounded-xl shadow-lg max-w-xs">
              <h3 className="text-lg font-semibold text-white">
                AI-Powered Diagnostics
              </h3>
              <p className="text-white/80 mt-2 text-xs">
                Leveraging advanced AI to enhance medical imaging and diagnostics.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/30 absolute inset-0 left-8 h-24 top-[600px] p-2 rounded-xl shadow-lg max-w-xs">
              <h3 className="text-xl font-bold text-white">Real-Time Insights</h3>
              <p className="text-white/80 mt-2 text-xs">
                Delivering accurate insights for faster and more effective treatments.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/30 absolute right-6 top-80 h-24 p-4 rounded-xl shadow-lg max-w-xs">
              <h3 className="text-lg font-bold text-white">Enhanced Accuracy</h3>
              <p className="text-white/80 mt-2 text-xs">
                Revolutionizing healthcare with precision imaging powered by AI.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Bottom />
      </div>
    </div>
  );
};

export default Imagebackground;
