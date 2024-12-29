# For Developer's Reference (Temporary File)

## Project Overview
This app should allow the users to:
    - Search recipes by ingredients they have at home.
    - View recipe details including instructions, nutrition, and ratings.
    - Save recipes as favorites (local storage or user account).
    - Generate random recipes or get recommendations based on user preferences.
    - Filter recipes by dietary preferences (e.g., vegan, keto).

## Features (MVP + Advanced Features)

### MVP
    - Ingredient-based search.
    - Recipe listing with pagination.
    - Detailed recipe view (instructions, ingredients).
    - Simple state management using React Context.
### Advanced 
    - Favorites & Bookmarks (localStorage or Firebase).
    - User authentication (using NextAuth.js or Firebase).
    - Shopping list generator from selected recipes.
    - Meal planner for weekly planning.
    - Voice search for ingredient input.
    - AI-based recommendations (use OpenAI for suggestions).
    - Offline mode (cache recipes using Service Workers).

## API's 
    - Spoonacular API
        - Most popular
        - ingridient based search
        - nutritional facts and dietary filters (huge W)
        - 150 reqs/day (huge W too)
    - Edamam API
        - diet filters (Vegan, gluten-free, etc)
        - can be used for advanced version (if planning to develop more than MVPs)

## TechStack
    - Next.js
    - Typescript + Tailwind
    - React Context API
    - Axios - API calls to the DB
    - Firebase - Authentication