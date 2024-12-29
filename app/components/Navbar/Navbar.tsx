"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import ThemeToggle from "../ThemeToggleButton";
import NavLink from "./NavLinks";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Customers", href: "/customers" },
  { label: "Integrations", href: "/integrations" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink href="/" className="text-orange-600">
            DishCovery
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="group relative inline-block hover:text-orange-600 dark:hover:text-orange-500"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Right Section (Search + Signup) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <NavLink
            href="/search"
            className="text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500"
          >
            <FaSearch size={20} />
          </NavLink>
          <NavLink
            href="/signup"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-500 dark:hover:text-white hover:text-white transition-colors"
          >
            Sign Up
          </NavLink>
          <div
            className="text-gray-800 dark:text-gray-200 md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="group relative inline-block hover:text-orange-600 dark:hover:text-orange-500"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;