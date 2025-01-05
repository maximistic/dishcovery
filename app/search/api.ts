const BASE_URL = "https://api.spoonacular.com/recipes";

const getRecipeByQuery = async (query:string) => {
    const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const endpoint = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&number=10`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok){
            throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        return data.results;
    }catch (error){
        console.error(error);
        return [];
    }
};

export {getRecipeByQuery};