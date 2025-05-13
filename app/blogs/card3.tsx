import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const BloggerCard: React.FC = () => {
  return (
    <div className="group max-w-sm p-8 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden shadow-xl text-white border border-white/10 relative transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="relative z-20">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-6">About</h4>

        <div className="flex items-center space-x-4">
          {/* Profile image */}
          <div className="w-16 h-16 overflow-hidden rounded-full ring-2 ring-orange-500/50 transition-transform duration-300 group-hover:ring-orange-500 group-hover:scale-105">
            <Image
              width={1000}
              height={1000}
              src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
              alt="Ethan Caldwell"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blogger info */}
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ethan Caldwell</h2>
            <p className="text-sm text-orange-400 font-medium">Doctor</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-sm leading-relaxed">
          Ethan Caldwell shares thoughtful insights and reflections on life, culture, and personal growth.
          His work explores the intersections of creativity and experience, offering readers unique perspectives.
        </p>

        {/* Location */}
        <div className="flex items-center mt-6 text-gray-300">
          <FaMapMarkerAlt className="mr-2 text-orange-400" />
          <p className="text-sm">Paris, France</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex mt-8 space-x-5">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default BloggerCard;
