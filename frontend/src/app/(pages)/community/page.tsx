/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-orange-500 to-yellow-500 overflow-hidden"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Your Journey, Our Community
            <span className="block text-yellow-300">Share & Inspire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of travelers sharing their Indian adventures, tips,
            and stories
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white text-orange-500 px-8 py-3 rounded-md text-xl font-semibold hover:bg-yellow-50 transition-colors shadow-lg"
          >
            Share Your Story
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      </motion.section>

      {/* Community Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">500+</h3>
              <p className="text-gray-600">Stories Shared</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">2000+</h3>
              <p className="text-gray-600">Discussions Started</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">100+</h3>
              <p className="text-gray-600">Meetups Organized</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Top Contributors */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-mytext">
            Top Contributors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={`https://avatars.githubusercontent.com/u/77796776?v=4`}
                    alt="Contributor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-1">
                  Travel Expert {index + 1}
                </h4>
                <p className="text-sm text-gray-600">50+ Stories Shared</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Community Features */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Discussion Forums */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-orange-500 mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-mytext">
              Regional Forums
            </h3>
            <ul className="space-y-4 text-gray-600">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                North India Travel Tips
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                South Indian Cuisine Adventures
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Northeast Hidden Gems
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                Western India Cultural Exchange
              </motion.li>
            </ul>
          </motion.div>

          {/* Travel Meetups */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-yellow-500 mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-mytext">
              Travel Meetups
            </h3>
            <ul className="space-y-4 text-gray-600">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Monthly City Gatherings
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Photography Walks
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Food Trail Events
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Cultural Festivals
              </motion.li>
            </ul>
          </motion.div>

          {/* Travel Buddy Finder */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-red-500 mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-mytext">
              Find Travel Buddies
            </h3>
            <ul className="space-y-4 text-gray-600">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                Connect with Like-minded Travelers
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                Plan Group Trips
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                Share Travel Costs
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                Make Lifelong Friends
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Active Discussions */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-mytext">
            Trending Discussions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Best street food spots in Delhi",
                icon: "🍜",
              },
              {
                title: "Hidden beaches of Goa",
                icon: "🏖️",
              },
              {
                title: "Budget trip to Ladakh",
                icon: "🏔️",
              },
              {
                title: "Kerala backwaters experience",
                icon: "🚣",
              },
              {
                title: "Traditional festivals in Rajasthan",
                icon: "🎪",
              },
              {
                title: "Northeast India travel guide",
                icon: "🗺️",
              },
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{topic.icon}</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-mytext">
                      {topic.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Join the conversation with fellow travelers discussing
                      their experiences and tips
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
