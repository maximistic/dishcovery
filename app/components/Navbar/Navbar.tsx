"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import ThemeToggle from "../ThemeToggleButton";
import NavLink from "./NavLinks";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "Blog", href: "/blog" },
];

const recipesDropdown = {
  cuisines: [
    "Indian",
    "Chinese",
    "Asian",
    "Thai",
    "Japanese",
    "American",
    "Mexican",
    "Italian",
    "French",
    "Spanish",
    "Continental",
    "Middle Eastern",
    "Greek",
    "Sri Lankan",
  ],
  courseOfMeal: [
    "Soup",
    "Salad",
    "Beverages",
    "Starter",
    "Main Course",
    "Dessert",
    "Accompaniment",
    "Snack",
  ],
  meals: [
    "Breakfast",
    "Brunch",
    "Lunch",
    "Evening Snack",
    "Dinner",
    "Late Night",
  ],
  diet: [
    "Vegan",
    "Vegetarian",
    "Gluten Free",
    "Dairy Free",
    "Keto",
    "Paleo",
    "Low Carb",
    "Low Fat",
  ],
  intolerances: [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ]
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <NavLink href="/" className="text-orange-600">
            DishCovery
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={`group relative inline-block hover:text-orange-600 dark:hover:text-orange-500 ${
                  item.label === "Recipes" ? "dropdown-parent" : ""
                }`}
                onMouseEnter={() =>
                  item.label === "Recipes" && setIsDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.label === "Recipes" && setIsDropdownOpen(false)
                }
              >
                <NavLink
                  href={item.href}
                  className="group relative inline-block"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
                {item.label === "Recipes" && isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 min-w-max bg-white dark:bg-gray-800 shadow-lg py-6 text-sm text-gray-700 dark:text-gray-300 z-50"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="container mx-auto grid grid-cols-3 gap-6 px-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Cuisines</h4>
                        <ul className="space-y-2">
                          {recipesDropdown.cuisines.map((cuisine) => (
                            <li
                              key={cuisine}
                              className="hover:text-orange-600 dark:hover:text-orange-500"
                            >
                              {cuisine}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">
                          Course of Meal
                        </h4>
                        <ul className="space-y-2">
                          {recipesDropdown.courseOfMeal.map((course) => (
                            <li
                              key={course}
                              className="hover:text-orange-600 dark:hover:text-orange-500"
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Meals</h4>
                        <ul className="space-y-2">
                          {recipesDropdown.meals.map((meal) => (
                            <li
                              key={meal}
                              className="hover:text-orange-600 dark:hover:text-orange-500"
                            >
                              {meal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Diet</h4>
                        <ul className="space-y-2">
                          {recipesDropdown.diet.map((diet) => (
                            <li
                              key={diet}
                              className="hover:text-orange-600 dark:hover:text-orange-500"
                            >
                              {diet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Intolerances</h4>
                        <ul className="space-y-2">
                          {recipesDropdown.intolerances.map((intolerances) => (
                            <li
                              key={intolerances}
                              className="hover:text-orange-600 dark:hover:text-orange-500"
                            >
                              {intolerances}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

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
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;