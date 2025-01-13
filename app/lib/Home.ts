// Fetch Recipes by Cuisine
export const fetchRecipesByCuisine = async (cuisine: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=4&fillIngredients=true&apiKey=${API_KEY}`;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();
  return data.results;
};

// Fetch Recipes by Diet
export const fetchRecipesByDiet = async (diet: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?type=${diet}&number=4&apiKey=${API_KEY}`;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch diets");
  }

  const data = await response.json();
  return data.results;
};
