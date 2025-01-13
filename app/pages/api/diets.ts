import type { NextApiRequest, NextApiResponse } from "next";
import { fetchRecipesByDiet } from "@/app/lib/Home";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { diet } = req.query;

  try {
    const diets = await fetchRecipesByDiet(diet as string);
    res.status(200).json(diets);
  } catch (error) {
    console.error("Error fetching diets:", error);
    res.status(500).json({ error: "Failed to fetch diets" });
  }
}
