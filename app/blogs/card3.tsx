import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const BloggerCard: React.FC = () => {
  return (
    <div className="max-w-xs p-6 bg-black rounded-lg overflow-hidden shadow-md text-white border border-white/20 relative">
      <h4 className="text-sm font-semibold uppercase text-gray-100">About</h4>
      
      <div className="mt-4 flex items-center">
        {/* Profile image */}
        <div className="w-12 h-12 overflow-hidden rounded-full bg-red-500">
          <Image
          width={1000}
          height={1000}
            src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
            alt="Ethan Caldwell"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blogger info */}
        <div className="ml-4 z-10">
          <h2 className="text-lg font-semibold">Ethan Caldwell</h2>
          <p className="text-sm text-neutral-200">Doctor</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-neutral-400 text-sm">
        Ethan Caldwell shares thoughtful insights and reflections on life, culture, and personal growth. 
        His work explores the intersections of creativity and experience, offering readers unique perspectives.
      </p>

      {/* Location */}
      <div className="flex items-center mt-4 text-gray-100">
        <FaMapMarkerAlt className="mr-2" />
        <p>Paris, France</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex mt-4 space-x-4 text-gray-100">
        <FaTwitter className="cursor-pointer hover:text-blue-500" />
        <FaFacebookF className="cursor-pointer hover:text-blue-600" />
        <FaInstagram className="cursor-pointer hover:text-pink-500" />
        <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
      </div>
      
      <div className="bg-[#FF9D23] w-36 h-36 -top-16 right-0 overflow-hidden blur-3xl rounded-full absolute z-10 shadow-[0_0_15px_5px_rgba(255,193,69,0.8)]"></div>
    </div>
  );
};

export default BloggerCard;
