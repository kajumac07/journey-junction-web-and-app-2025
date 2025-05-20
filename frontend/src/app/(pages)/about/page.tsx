/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-myprimary to-myprimary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-44 h-44 mx-auto mb-8 rounded-full border-4 border-white shadow-2xl overflow-hidden hover:border-yellow-300 transition-all duration-300"
          >
            <img
              src="https://avatars.githubusercontent.com/u/77796776?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Journey Junction is my vision to bring India&apos;s travel
            enthusiasts together, inspire them, and create an unforgettable
            experience for all explorers. Built from the ground up with love,
            passion, and code!
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-8 mb-8"
          ></motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" />
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-myprimary/10"
          >
            <h2 className="text-4xl font-bold mb-8 text-mytext bg-gradient-to-r from-myprimary to-myprimary bg-clip-text text-transparent">
              My Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Hi, I&apos;m Atul (Kaju), a passionate full-stack developer and
              avid traveler based in India. With over 2 years of experience in
              App Development and Web Development, I&apos;ve combined my love
              for coding and exploration to create Journey Junction. What
              started as a personal blog has evolved into a thriving community
              of travel enthusiasts.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-myprimary">
              Why I Built This
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              When I&apos;m not immersed in code, you&apos;ll find me exploring
              hidden gems across India. From the bustling streets of Delhi to
              the serene beaches of Kerala, each journey has shaped my
              perspective and fueled my passion for creating this platform. I
              believe in authentic travel experiences and meaningful
              connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts About Me Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-myprimary/10"
          >
            <h2 className="text-4xl font-bold mb-12 text-mytext bg-gradient-to-r from-myprimary to-myprimary bg-clip-text text-transparent text-center">
              Fun Facts About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 hover:bg-gradient-to-br hover:from-myprimary/5 hover:to-yellow-500/5 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  🚀
                </motion.div>
                <h3 className="font-bold text-xl mb-3 text-myprimary">
                  Solo Developer
                </h3>
                <p className="text-gray-600">
                  Built Journey Junction from scratch with passion
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 hover:bg-gradient-to-br hover:from-myprimary/5 hover:to-yellow-500/5 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  🏖️
                </motion.div>
                <h3 className="font-bold text-xl mb-3 text-myprimary">
                  Beach Lover
                </h3>
                <p className="text-gray-600">
                  Find peace in coastal sunrises and long walks
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 hover:bg-gradient-to-br hover:from-myprimary/5 hover:to-yellow-500/5 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  💻
                </motion.div>
                <h3 className="font-bold text-xl mb-3 text-myprimary">
                  Tech Enthusiast
                </h3>
                <p className="text-gray-600">
                  Always learning new technologies
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 hover:bg-gradient-to-br hover:from-myprimary/5 hover:to-yellow-500/5 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  🗺️
                </motion.div>
                <h3 className="font-bold text-xl mb-3 text-myprimary">
                  Explorer
                </h3>
                <p className="text-gray-600">Visited 15 states and counting</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
