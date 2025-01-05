import Image from "next/image";
import React from "react";

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
}

const SearchCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
        width={500}
        height={500}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mt-2">Ready in {recipe.readyInMinutes} mins</p>
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