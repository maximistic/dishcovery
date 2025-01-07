"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  // Track if the component has loaded for animation purposes
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility when component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay for initial load animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full mt-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-400 to-orange-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 opacity-30 blur-xl"></div>
      <div className="relative container mx-auto px-6 py-20 flex flex-col items-center text-center lg:flex-row lg:text-left lg:space-x-10">
        <div
          className={`lg:w-1/2 space-y-6 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`text-4xl md:text-5xl font-bold leading-tight transition-transform duration-700 ${
              isVisible ? "transform-none" : "translate-x-[-50px]"
            }`}
          >
            Welcome to <span className="text-orange-500">DishCovery</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover new recipes, bookmark your favorites, and explore cuisines
            from around the world. Start your culinary journey today!
          </p>
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
            >
              Explore Recipes
            </button>
            <button
              className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg shadow-lg hover:bg-orange-100 dark:hover:bg-gray-800 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-30 blur-xl dark:bg-gray-700"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500 rounded-full opacity-40 blur-xl dark:bg-gray-600"></div>
    </section>
  );
};

export default Hero;
