/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-myprimary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Explore Incredible India
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover amazing destinations, plan your next adventure
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search destinations..."
                className="p-3 border rounded"
              />
              <select className="p-3 border rounded">
                <option>Destination Type</option>
                <option>Beach</option>
                <option>Mountain</option>
                <option>City</option>
              </select>
              <select className="p-3 border rounded">
                <option>Budget Range</option>
                <option>Budget</option>
                <option>Mid-Range</option>
                <option>Luxury</option>
              </select>
              <select className="p-3 border rounded">
                <option>Duration</option>
                <option>Weekend</option>
                <option>3-5 Days</option>
                <option>Week+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-mytext">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hill Stations",
                places: ["Shimla", "Darjeeling", "Manali"],
                icon: "🏔️",
              },
              {
                title: "Beach Destinations",
                places: ["Goa", "Andaman", "Gokarna"],
                icon: "🏖️",
              },
              {
                title: "Cultural & Historical",
                places: ["Jaipur", "Varanasi", "Hampi"],
                icon: "🏛️",
              },
              {
                title: "Adventure Spots",
                places: ["Rishikesh", "Ladakh", "Meghalaya"],
                icon: "🏃",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-semibold mb-3 text-myprimary">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {category.places.map((place, i) => (
                    <li key={i}>{place}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-mytext">
            Featured Itineraries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Weekend Getaway in Mumbai",
              "5 Days in Kerala",
              "Rajasthan Heritage Tour",
            ].map((title, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-myprimary">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">
                  Curated travel plan with detailed day-by-day itinerary
                </p>
                <button className="text-myprimary font-semibold hover:underline">
                  View Itinerary →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-mytext">
            Inspiration Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Large Story */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="row-span-2 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
                  alt="Varanasi Ghats"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Dawn at Varanasi Ghats
                  </h3>
                  <p className="text-white/90 mb-4">
                    Experience the spiritual awakening at the holy banks of
                    Ganges
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://avatars.githubusercontent.com/u/77796776?v=4"
                        alt="Author"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-white">By Darling</span>
                    </div>
                    <button className="bg-white text-myprimary px-4 py-2 rounded-lg font-semibold hover:bg-yellow-50">
                      Read Story
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grid Stories */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Backwaters of Kerala",
                  image:
                    "https://images.pexels.com/photos/29568827/pexels-photo-29568827/free-photo-of-dramatic-sunset-with-boat-on-kerala-s-coast.jpeg",
                  author: "Dimple Pandey",
                  description:
                    "Serene boat rides through palm-fringed waterways",
                },
                {
                  title: "Ladakh's Monasteries",
                  image:
                    "https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg",
                  author: "Rahul Prajapati",
                  description: "Ancient Buddhist temples in the mountains",
                },
                {
                  title: "Rajasthan Forts",
                  image:
                    "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg",
                  author: "Vipin Patel",
                  description: "Majestic architecture of royal heritage",
                },
                {
                  title: "Goan Beaches",
                  image:
                    "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
                  author: "Kalua",
                  description: "Sun, sand and serene coastal vibes",
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {story.title}
                      </h4>
                      <p className="text-white/80 text-sm mb-2">
                        {story.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">
                          {story.author}
                        </span>
                        <button className="bg-white text-myprimary px-3 py-1 rounded text-sm font-semibold hover:bg-yellow-50">
                          Read Story
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
