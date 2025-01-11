import Image from "next/image";
import * as  React from "react";


function Hero() {
  return (
    <section className="bg-beige-100 px-6 py-12 md:py-24 mt-72">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div>
          <span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-sm">
            Welcome to FoodyDots 😊
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            Food you love, <br /> delivered to you
          </h1>
          <p className="text-gray-600 mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-600 transition">
              Explore Menu
            </button>
            <button className="flex items-center gap-2 text-gray-800">
              <span className="material-icons">play_circle</span> Watch Video
            </button>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <Image
              src="/images/reviews.jpg"
              alt="Customer Reviews"
              className="h-10 w-10 rounded-full object-cover"
              width={240}
              height={240}
            />
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-800">4.7</span> (12.3k Reviews)
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <Image
            src="/images/salad.jpg"
            alt="Salad"
            className="rounded-lg shadow-lg"
            width={240}
            height={240}
          />
          {/* Overlays */}
          <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg">
            <p className="text-sm font-bold text-gray-800">Salad with salmon</p>
            <p className="text-gray-600 text-sm">$7.50</p>
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
            <p className="text-sm font-bold text-gray-800">American burger</p>
            <p className="text-gray-600 text-sm">$5.70</p>
          </div>
          <div className="absolute bottom-8 right-8 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2">
            <Image
              src="/images/courier.jpg"
              alt="Food Courier"
              className="h-8 w-8 rounded-full object-cover"
              width={240}
              height={240}
            />
            <p className="text-sm font-bold text-gray-800">Brooklyn Simmons</p>
            <p className="text-gray-600 text-sm">Food Courier</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
