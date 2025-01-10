"use client";

import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure this component only renders dynamic content on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-extrabold text-gray-900 hover:text-indigo-600 transition-colors duration-300 ease-in-out"
            >
              TastyBud Kitchen
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            <Link
              href="/"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
            >
              Story
            </Link>
            <Link
              href="/Menu"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
            >
              Menu
            </Link>
            <Link
              href="/news"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
            >
              Our Updates
            </Link>
            <Link
              href="/Contact"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
            >
              Contact
            </Link>
            <Link
              href="/reservation"
              className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
            >
              Reservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {isClient && (
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-900 hover:text-gray-700 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isClient && isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-50 shadow-md transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
              Story
            </Link>
            <Link
              href="/Menu"
              className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
              Menu
            </Link>
            <Link
              href="/news"
              className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
              Our Updates
            </Link>
            <Link
              href="/Contact"
              className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
              Contact
            </Link>
            <Link
              href="/reservation"
              className="block text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out"
            >
              Reservation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
