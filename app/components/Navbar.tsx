
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-blue-950/30 px-6 py-3 font-serif">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Image
          width={100}
          height={40}
          src="/images/logo.png"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-950/90 lg:bg-transparent text-white font-medium flex-col lg:flex-row lg:items-center`}
      >
        <li className="lg:my-0 my-2">
          <a
            href="/"
            className="block text-center lg:inline bg-blue-50 bg-opacity-20 hover:bg-opacity-40 rounded-md drop-shadow-lg backdrop-blur-lg px-4 py-2 transition duration-300"
          >
            Home
          </a>
        </li>
        <li className="lg:my-0 my-2">
          <a
            href="/reports"
            className="block text-center lg:inline bg-blue-50 bg-opacity-20 hover:bg-opacity-40 rounded-md drop-shadow-lg backdrop-blur-lg px-4 py-2 transition duration-300"
          >
            Reports
          </a>
        </li>
        <li className="lg:my-0 my-2">
          <a
            href="/search"
            className="block text-center lg:inline bg-blue-50 bg-opacity-20 hover:bg-opacity-40 rounded-md drop-shadow-lg backdrop-blur-lg px-4 py-2 transition duration-300"
          >
            Hospitals
          </a>
        </li>
        <li className="lg:my-0 my-2">
          <a
            href="/blogs"
            className="block text-center lg:inline bg-blue-50 bg-opacity-20 hover:bg-opacity-40 rounded-md drop-shadow-lg backdrop-blur-lg px-4 py-2 transition duration-300"
          >
            Blogs
          </a>
        </li>
        {/* <li className="lg:my-0 my-2">
          <a
            href="/about"
            className="block text-center lg:inline bg-blue-50 bg-opacity-20 hover:bg-opacity-40 rounded-md drop-shadow-lg backdrop-blur-lg px-4 py-2 transition duration-300"
          >
            About Us
          </a>
        </li> */}
        <li className="lg:my-0 my-2">
          <a
            href="/signup"
            className="block text-center lg:inline text-white bg-blue-50 bg-opacity-20 hover:bg-opacity-40 rounded-md drop-shadow-lg backdrop-blur-lg px-4 py-2 transition duration-300"
          >
            Sign Up / Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




