"use client";
import * as React from "react";
import { fetchRecipesByCuisine } from "@/app/lib/Home";
import Image from "next/image";

const cuisinesList = [
  "Asian",
  "American",
  "British",
  "Chinese",
  "French",
  "German",
  "Greek",
  "Indian",
];

interface Recipe {
  id: number;
  title: string;
  image: string;
  cookingTime: string; 
}

export default function Cuisines() {
  const [selectedCuisine, setSelectedCuisine] = React.useState<string>("Asian");
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const fetchedRecipes = await fetchRecipesByCuisine(selectedCuisine);
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [selectedCuisine]);

  return (
    <div className="flex flex-col dark:text-white h-screen pb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-700 dark:text-white text-center">
        We Offer You Different Tastes from Around the Globe
      </h2>

      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/4 p-3 space-y-4 overflow-hidden">
          <div className="flex flex-col space-y-2 mt-5 h-52 overflow-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-300">
            {cuisinesList.map((cuisine) => (
              <button
                key={cuisine}
                className={`py-3 rounded-md text-center text-md font-medium ${
                  selectedCuisine === cuisine
                    ? "bg-orange-500 text-white"
                    : "bg-white dark:bg-gray-500 dark:text-white dark:hover:bg-orange-300 text-gray-700 hover:bg-orange-200"
                }`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Display */}
        <div className="flex-1 p-6">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-white dark:bg-gray-500 shadow-md rounded-md overflow-hidden flex flex-col"
                >
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    className="object-cover w-full h-40"
                    width={150}
                    height={150}
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white mb-4">
                      Cooking Time: {recipe.cookingTime}
                    </p>
                    <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                      See Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}