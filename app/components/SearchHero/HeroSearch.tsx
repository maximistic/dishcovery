"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

const HeroSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [diet, setDiet] = React.useState("none");
  const [excludeIngredients, setExcludeIngredients] = React.useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const queryParams = new URLSearchParams({
        query: searchTerm.trim(),
        ...(diet !== "none" && { diet }), 
        ...(excludeIngredients && { excludeIngredients }),
      }).toString();

      router.push(`/recipes?${queryParams}`); 
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md mt-12">
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <input
            type="text"
            placeholder="Search Recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 rounded-lg px-5 py-3 text-gray-700 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-900"
          />
          <button
            type="submit"
            className="mt-4 md:mt-0 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="diet"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Diet
            </label>
            <select
              id="diet"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="mt-2 w-full rounded-lg px-5 py-3 text-gray-700 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-900"
            >
              {[
                "none",
                "pescetarian",
                "lacto vegetarian",
                "ovo vegetarian",
                "vegan",
                "vegetarian",
              ].map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="exclude-ingredients"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Exclude Ingredients
            </label>
            <input
              id="exclude-ingredients"
              type="text"
              value={excludeIngredients}
              onChange={(e) => setExcludeIngredients(e.target.value)}
              placeholder="E.g., coconut, nuts"
              className="mt-2 w-full rounded-lg px-5 py-3 text-gray-700 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-900"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeroSearch;