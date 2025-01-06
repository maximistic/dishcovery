"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const RecipesPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const diet = searchParams.get("diet");
  const excludeIngredients = searchParams.get("excludeIngredients");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const params = new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY || "",
        ...(query && { query }),
        ...(diet && { diet }),
        ...(excludeIngredients && { excludeIngredients }),
        number: "10",
      });

      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${params}`);
        const data = await response.json();
        setRecipes(data.results || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query, diet, excludeIngredients]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {query || diet || excludeIngredients
          ? `Recipes for ${query || diet || excludeIngredients}`
          : "All Recipes"}
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <Image 
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
              width={240}
              height={150}
              />
              <h2 className="text-lg font-bold mt-2">{recipe.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipesPage;