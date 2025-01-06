"use client";
import * as React from 'react'
import { useRouter } from "next/navigation";

const cuisines = [
    "African", "Asian", "American", "British", "Chinese", "French",
    "German", "Greek", "Indian", "Irish", "Italian", "Japanese",
    "Mexican", "Spanish", "Thai", "Vietnamese"
];

const Cuisine = () => {
    const router = useRouter();
    
    const handleCuisineClick = (cuisine:string) => {
        router.push(`/recipes?cuisine=${cuisine}`);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-8">
            
            {cuisines.map((cuisine) => (
            <div
                key={cuisine}
                className="cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-center items-center text-center shadow hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCuisineClick(cuisine)}
            >
                <span className="text-sm font-medium text-gray-900 dark:text-white">{cuisine}</span>
            </div>
            ))}
        </div>
    )
}

export default Cuisine