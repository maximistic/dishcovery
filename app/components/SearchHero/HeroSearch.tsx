"use client";
import * as React from "react";
import { useRouter } from 'next/navigation'

const HeroSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchTerm){
            router.push(`/search?query=${searchTerm}`);
        }
    }

    return (
        <div className="flex items-center bg-white rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Search recipes/cusines/diet.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-l-lg focus:outline-none text-gray-700 dark:bg-white"
            >
            </input>
            <button
                onClick={handleSearch}
                className="bg-orange-600 text-white px-6 py-3 rounded-r-lg hover:bg-orange-500 transition"
            >
                Search
            </button>
        </div>
    )
}

export default HeroSearch;