import React from "react";
import HeroSearch from "../SearchHero/HeroSearch";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative bg-cover bg-center text-center h-80 lg:h-96">
      <div className="absolute inset-0 bg-black opacity-50 dark:bg-opacity-50 dark:bg-gray-700"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="flex items-center justify-center space-x-4">
          <button
            className="bg-orange-600 px-4 py-2 text-white rounded hover:bg-orange-500 transition"
            onClick={() => router.push("/search")}
          >
            Search Recipes
          </button>
          <button
            className="bg-gray-600 px-4 py-2 text-white rounded hover:bg-gray-500 transition"
            onClick={() => alert("Cook with what you have feature is under development!")}
          >
            Cook with what I have
          </button>
        </div>
        <div className="mt-6 w-full max-w-2xl">
          <HeroSearch />
        </div>
      </div>
    </div>
  );
};

export default Hero;
