"use client";
import * as React from "react";
import Recipe from "../components/SearchBody/Recipe";
import Hero from "../components/SearchHero/Hero";

interface Recipe {
  id: number;
  title: string;
  image: string;
  maxReadyTime: number;
}

const SearchPageContent: React.FC = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 py-0">
        <Hero />
      </div>
      <div className="container mx-auto px-4 py-8">
        <Recipe />
      </div>
    </div>
  );
};

const SearchPage: React.FC = () => {
  return (
      <SearchPageContent />
  );
};

export default SearchPage;