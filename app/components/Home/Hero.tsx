import Image from "next/image";
import * as  React from "react";

function Hero() {
  return (
    <section className=" md:py-5 py-10">
      <div className="max-w-7xl mx-10 md:mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <span className="bg-yellow-300 text-yellow-900 py-2 px-4 rounded-full text-md shadow-md">
            Welcome to DishCovery 😊
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 dark:text-white leading-tight">
            Discover Recipes, <br /> 
            <span className="text-orange-600">Cook with Joy</span>
          </h1>
          <p className="text-gray-700 mt-6 dark:text-gray-300 text-lg leading-relaxed">
            Find the perfect recipe for every occasion and bring the magic of cooking
            to your kitchen. Let&apos;s make your culinary journey unforgettable!
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-orange-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-orange-500 transition">
              Explore Recipes ➤
            </button>
            <button className="bg-gray-200 text-gray-800 py-3 px-8 rounded-full shadow hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Watch Tutorials 🎥
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/foodplate4bg.png"
            alt="Salad"
            className="rounded-none shadow-none"
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;