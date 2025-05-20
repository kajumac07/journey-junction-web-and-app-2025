"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-mysecondary to-mysecondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl font-bold text-white mb-8 drop-shadow-lg bg-gradient-to-r from-white to-white/80 bg-clip-text"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto "
          >
            <p className="text-2xl text-white leading-relaxed">
              Have questions or want to share your travel stories? We&apos;d
              love to hear from you.{" "}
              <span className="font-semibold text-yellow-300">
                Your journey is our inspiration.
              </span>
            </p>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-mysecondary">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-mysecondary/50 focus:border-mysecondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-mysecondary/50 focus:border-mysecondary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-mysecondary/50 focus:border-mysecondary">
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-mysecondary/50 focus:border-mysecondary"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button className="w-full bg-mysecondary text-white py-3 rounded-lg font-semibold hover:bg-mysecondary/90 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-mysecondary">
                Contact Information
              </h2>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span>atult8556@gmail.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span>+91 8960290289</span>
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="p-3 bg-mysecondary/10 rounded-full hover:bg-mysecondary/20">
                    <span className="text-xl">📸</span>
                  </button>
                  <button className="p-3 bg-mysecondary/10 rounded-full hover:bg-mysecondary/20">
                    <span className="text-xl">🐦</span>
                  </button>
                  <button className="p-3 bg-mysecondary/10 rounded-full hover:bg-mysecondary/20">
                    <span className="text-xl">👥</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-mysecondary">FAQs</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How can I join the community?
                  </h3>
                  <p className="text-gray-600">
                    Simply sign up on our platform and start engaging with
                    fellow travelers!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How do I share my travel story?
                  </h3>
                  <p className="text-gray-600">
                    Navigate to the community section and click on &quot;Share
                    Your Story&quot; to get started.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
