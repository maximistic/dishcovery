import React from "react";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import Type from "./Type";

const Recipe = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold py-4 text-center">Explore Recipes</h2>
      <div className="pb-4">
        <h3 className="text-xl font-medium text-gray-700 dark:text-white">Cuisines</h3>
        <Cuisine />
      </div>
      <div className="pb-4">
        <h3 className="text-xl font-medium text-gray-700 dark:text-white">Diets</h3>
        <Diet />
      </div>
      <div className="pb-4">
        <h3 className="text-xl font-medium text-gray-700 dark:text-white">Meal Types</h3>
        <Type />
      </div>
    </div>
  );
};

export default Recipe;
