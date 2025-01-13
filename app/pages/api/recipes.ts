import type { NextApiRequest, NextApiResponse } from "next";
import { fetchRecipesByCuisine } from "@/app/lib/Home";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cuisine } = req.query;

  try {
    const recipes = await fetchRecipesByCuisine(cuisine as string);
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}
