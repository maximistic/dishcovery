"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import NavLink from "./NavLinks";
import DropdownMenu from "./DropMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggleButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "Blog", href: "/blog" },
];

const recipesDropdown = {
  cuisines: ["Indian", "Chinese", "Mexican", "Italian"],
  meals: ["Breakfast", "Lunch", "Dinner"],
  diet: ["Vegan", "Gluten Free", "Keto"],
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <NavLink href="/" className="text-orange-600">
            DishCovery
          </NavLink>
        </div>

        <div className="hidden md:flex items-center justify-center space-x-10">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="group relative inline-block"
                onMouseEnter={() =>
                  item.label === "Recipes" && setIsDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.label === "Recipes" && setIsDropdownOpen(false)
                }
              >
                <NavLink href={item.href}>{item.label}</NavLink>
                {item.label === "Recipes" && isDropdownOpen && (
                  <div className="absolute top-full left-0 min-w-max bg-white dark:bg-gray-800 shadow-lg py-6 text-sm z-50">
                    <div className="grid grid-cols-3 gap-6 px-8">
                      <DropdownMenu title="Cuisines" items={recipesDropdown.cuisines} />
                      <DropdownMenu title="Meals" items={recipesDropdown.meals} />
                      <DropdownMenu title="Diet" items={recipesDropdown.diet} />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            href="/search"
            className="text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500"
          >
            <FaSearch size={20} />
          </NavLink>
          <NavLink
            href="/signup"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          >
            Sign Up
          </NavLink>
          <ThemeToggle />
        </div>

        <div
          className="md:hidden text-gray-800 dark:text-gray-200 cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      <MobileMenu navItems={navItems} isOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;