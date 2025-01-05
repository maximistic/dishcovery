import Image from "next/image";
import React from "react";

interface Recipe {
  id: number;
  title: string;
  image: string;
  maxReadyTime: number;
}

const SearchCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
        width={250}
        height={250}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-600 dark:text-gray-600">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mt-2">Ready in {recipe.maxReadyTime} mins</p>
        <a
          href={`/recipe/${recipe.id}`}
          className="text-orange-600 mt-4 inline-block hover:underline"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default SearchCard;