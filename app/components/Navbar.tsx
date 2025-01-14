import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-blue-950/30 px-6 py-2 font-serif">
      <div className="flex items-center space-x-4">
        <Image width={40} height={40} src="/logo.png" alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 text-white font-medium">
        <li>
          <a
            href="/"
            className="bg-blue-50 bg-opacity-20 rounded-md drop-shadow-lg backdrop-blur-lg px-2 py-1"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="bg-blue-50 bg-opacity-20 rounded-md drop-shadow-lg backdrop-blur-lg px-2 py-1"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="bg-blue-50 bg-opacity-20 rounded-md drop-shadow-lg backdrop-blur-lg px-2 py-1"
          >
            Contact us
          </a>
        </li>
        <li>
          <a
            href="/blogs"
            className="bg-blue-50 bg-opacity-20 rounded-md drop-shadow-lg backdrop-blur-lg px-2 py-1"
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="bg-blue-50 bg-opacity-20 rounded-md drop-shadow-lg backdrop-blur-lg px-2 py-1"
          >
            About us
          </a>
        </li>
      </ul>
      <div>
        <a
          href="/signup"
          className="text-white text-sm bg-blue-50 bg-opacity-20 rounded-md drop-shadow-lg backdrop-blur-lg px-2 py-2"
        >
          Sign up / Sign in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;


