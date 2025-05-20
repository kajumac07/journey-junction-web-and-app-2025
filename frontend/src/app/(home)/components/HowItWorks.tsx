"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Sign up or log in",
    description:
      "Create your account in seconds and join our community of travelers",
    icon: "👤",
    color: "from-myprimary to-myprimary",
  },
  {
    number: "2",
    title: "Create your travel story",
    description:
      "Share your journey with photos, tips and memorable experiences",
    icon: "✍️",
    color: "from-mysecondary to-mysecondary",
  },
  {
    number: "3",
    title: "Share with the world",
    description: "Inspire others and connect with fellow travelers worldwide",
    icon: "🌏",
    color: "from-myinfo to-myinfo",
  },
];

export default function HowItWorksComponent() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
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
            Simple Process
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-mytext mb-6 ">
            How It Works
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-mytext mb-6">
            Share Your Journey In Three Simple Steps
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start sharing your travel experiences and inspire others with your
            unique stories. Join our growing community of passionate travelers!
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-myprimary via-blue-400 to-myprimary/50 -translate-y-1/2 z-0 rounded-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
                    >
                      {step.number}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-7xl mb-8 transform transition-transform"
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-mytext mb-4 text-center group-hover:text-myprimary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="hidden md:block absolute top-1/2 -right-6 text-myprimary text-5xl font-bold z-20"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
