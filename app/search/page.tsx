"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getRecipeByQuery } from "./api";
import SearchCard from "../components/SearchResults/SearchCard";
import Hero from "../components/SearchHero/Hero";

interface Recipe {
  id: number;
  title: string;
  image: string;
  maxReadyTime: number;
}

const SearchPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (query) {
        setLoading(true);
        const results = await getRecipeByQuery(query);
        setRecipes(results);
        setLoading(false);
      }
    };

    if (query) fetchRecipes();
  }, [query]);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 py-0">
        <Hero />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Search Results for {query || "No query"}
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <SearchCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SearchPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;