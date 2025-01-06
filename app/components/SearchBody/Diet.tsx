"use client";
import * as React from 'react'
import { useRouter } from "next/navigation";

const diets = [
    "Gluten Free", "Ketogenic", "Vegetarian", "Ovo-Vegetarian",
    "Lacto-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"
];

const Diet = () => {
    const router = useRouter();
  
    const handleDietClick = (diet: string) => {
      router.push(`/recipes?diet=${diet}`);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-8">
          {diets.map((diet) => (
            <div
              key={diet}
              className="cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center items-center text-center shadow hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => handleDietClick(diet)}
            >
              <span className="text-sm font-medium text-gray-900 dark:text-white">{diet}</span>
            </div>
          ))}
        </div>
    );
}

export default Diet;