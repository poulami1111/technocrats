import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="Healthcare Finder Logo"
                className="h-10 w-auto"
              />
           
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-900/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-1 py-4 lg:py-0">
              <NavItem href="/" label="Home" />
              <NavItem href="/reports" label="Reports" />
              <NavItem href="/search" label="Hospitals" />
              <NavItem href="/blogs" label="Blogs" />
              {/* Uncomment when ready to add these features
              <NavItem href="/about" label="About Us" />
              <NavItem href="/signup" label="Sign Up / Sign In" isButton={true} />
              */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavItem Component for cleaner code
const NavItem = ({ href, label, isButton = false }: { href: string; label: string; isButton?: boolean }) => {
  return (
    <li className="px-3 py-2 lg:py-0">
      <Link
        href={href}
        className={`block text-center lg:inline-block px-4 py-2 rounded-lg transition-all duration-300 ${isButton
          ? "bg-gradient-to-r from-[#FF9D23] to-[#FF6B6B] text-white hover:shadow-lg hover:shadow-[#FF9D23]/20"
          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
          }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;




