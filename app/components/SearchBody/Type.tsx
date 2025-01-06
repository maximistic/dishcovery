"use client";
import React from "react";
import { useRouter } from "next/navigation";

const mealTypes = [
  "main course", "side dish", "dessert", "appetizer", "salad",
  "bread", "breakfast", "soup", "beverage", "sauce", "marinade",
  "fingerfood", "snack", "drink"
];

const Type = () => {
  const router = useRouter();

  const handleTypeClick = (type: string) => {
    router.push(`/recipes?type=${type}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">
      {mealTypes.map((type) => (
        <div
          key={type}
          className="cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center items-center text-center shadow hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => handleTypeClick(type)}
        >
          <span className="text-sm font-medium text-gray-900 dark:text-white">{type}</span>
        </div>
      ))}
    </div>
  );
};

export default Type;