"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🗺️",
    title: "Authentic Indian Experiences",
    description:
      "Discover real stories from fellow travelers exploring the diverse landscapes and cultures of India.",
    link: "Learn more",
    gradient: "from-myprimary to-myprimary",
  },
  {
    icon: "🏛️",
    title: "Cultural Immersion",
    description:
      "Deep dive into India's rich heritage, festivals, traditions, and local customs through firsthand accounts.",
    link: "Learn more",
    gradient: "from-mysecondary to-mysecondary",
  },
  {
    icon: "💎",
    title: "Local Insights",
    description:
      "Get trusted recommendations on Indian destinations, local cuisines, accommodations and hidden gems.",
    link: "Learn more",
    gradient: "from-myinfo to-myinfo",
  },
];

export default function WhyJourneyJunctionComponent() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-myprimary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full bg-myprimary/10 text-myprimary font-semibold mb-4"
          >
            Why Choose Journey Junction
          </motion.span>
          <h2 className="text-6xl font-bold mb-6">
            Discover India Like Never Before
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your gateway to authentic Indian travel experiences, where every
            story celebrates the incredible diversity of our beautiful country
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div
                  className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform -rotate-6 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <span className="text-4xl">{feature.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-mytext mb-4 group-hover:text-myprimary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {feature.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${feature.gradient} text-white font-semibold flex items-center gap-2 group w-full justify-center`}
                >
                  {feature.link}
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
