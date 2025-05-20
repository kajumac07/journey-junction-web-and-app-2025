/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function HeroComponent(): JSX.Element {
  return (
    <section className="relative h-[calc(100vh-64px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 mb-8"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-myprimary text-white text-sm font-medium tracking-wider">
              DISCOVER INCREDIBLE INDIA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Your Journey Through
            <span className="block text-mysecondary">Incredible India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-12"
          >
            Embark on a magical journey through India&apos;s rich heritage,
            vibrant culture, and breathtaking landscapes. Share your stories,
            connect with fellow travelers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-8 py-4 bg-myprimary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-8 py-4 bg-mysecondary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all"
            >
              Explore Stories
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-white/60 text-sm mb-2">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
