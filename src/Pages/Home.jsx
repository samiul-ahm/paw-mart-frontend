import React from "react";
import Popular from "../components/Popular";
import max from "../assets/max.jpg";
import bella from "../assets/bella.avif";
import luna from "../assets/luna.jpg";
import RecentListings from "../components/RecentListing";

const Home = () => {
  return (
    <div className="py-16">
      <Popular></Popular>
      <div className="mx-auto  p-10 text-center bg-linear-65 from-purple-500 to-pink-500 text-white  my-16">
        <h2
          className="text-4xl font-bold
         mb-5"
        >
          Find Your Furry Friend Today
        </h2>
        <p className="text-2xl font-semibold">
          Adopt, Don’t Shop — Give a Pet a Home.
        </p>
        <p className="text-xl font-semibold mt-4">
          Because Every Pet Deserves Love and Care.
        </p>
      </div>
      <div>
        <RecentListings></RecentListings>
      </div>
      {/* how your purchase helps */}
      <section className="bg-pink-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-pink-600">
          How Your Purchase Helps
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Every toy, treat, and accessory you buy from PawMart helps support
          local shelters and rescue programs. A portion of every purchase goes
          toward food, medical care, and finding forever homes for pets in need.
          When you shop with us, you’re not just spoiling your pet — you’re
          saving another.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-white rounded-xl shadow p-6 w-64">
            <h3 className="text-2xl font-bold text-pink-500">$5</h3>
            <p className="text-gray-600 mt-2">Feeds a rescued pet for a day</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 w-64">
            <h3 className="text-2xl font-bold text-pink-500">1,284+</h3>
            <p className="text-gray-600 mt-2">Pets helped this year</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 w-64">
            <h3 className="text-2xl font-bold text-pink-500">100%</h3>
            <p className="text-gray-600 mt-2">Love-powered purchases</p>
          </div>
        </div>
      </section>
      {/* success story */}{" "}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Happy Tails & Success Stories
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Bella */}
          <div className="bg-gray-50 rounded-xl shadow-xl hover:shadow-lg transition p-6">
            <img
              src={bella}
              alt="Bella"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Bella</h3>
            <p className="text-gray-600 mb-2">
              Once abandoned, now a spoiled princess living her best life.
            </p>
            <span className="inline-block mt-2 text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              Adopted 6 months ago
            </span>
          </div>

          {/* Max */}
          <div className="bg-gray-50 rounded-xl shadow-xl hover:shadow-lg transition p-6">
            <img
              src={max}
              alt="Max"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Max</h3>
            <p className="text-gray-600 mb-2">
              From shy shelter pup to confident adventure buddy.
            </p>
            <span className="inline-block mt-2 text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              Adopted 1 year ago
            </span>
          </div>

          {/* Luna */}
          <div className="bg-gray-50 rounded-xl shadow-xl hover:shadow-lg transition p-6">
            <img
              src={luna}
              alt="Luna"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Luna</h3>
            <p className="text-gray-600 mb-2">
              Rescued from the streets and now ruling the house.
            </p>
            <span className="inline-block mt-2 text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              Adopted 4 months ago
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
