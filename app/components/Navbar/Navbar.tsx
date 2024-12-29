"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import ThemeToggle from "../ThemeToggleButton";
import NavLink from "./NavLinks";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <NavLink href="/" className="text-orange-600">DishCovery</NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink href="/features">Features</NavLink>
          </li>
          <li>
            <NavLink href="/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink href="/integrations">Integrations</NavLink>
          </li>
          <li>
            <NavLink
              href="/signup"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 dark:hover:text-white hover:text-white"
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/search"
            >
              <FaSearch size={22} />
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
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
        <ul className="md:hidden bg-white dark:bg-gray-900 text-center space-y-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <li>
            <NavLink href="/features">Features</NavLink>
          </li>
          <li>
            <NavLink href="/customers">Customers</NavLink>
          </li>
          <li>
            <NavLink href="/integrations">Integrations</NavLink>
          </li>
          <li>
            <NavLink
              href="/signup"
              className="block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-4 hover:text-white"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
