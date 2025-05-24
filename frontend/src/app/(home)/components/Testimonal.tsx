/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function TestimonalComponent() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real adventurers who explored the magic of India
            with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-myprimary/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-myprimary text-white p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl text-gray-900">
                  Dimple Pandey
                </h3>
                <p className="text-myprimary font-medium">Nature Lover</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              &ldquo;An incredible journey through the heart of India. The local
              experiences and cultural immersion were beyond my
              expectations!&rdquo;
            </p>
            <div className="flex text-myprimary text-xl">★★★★★</div>
          </motion.div>

          {/* Testimonial Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-myprimary/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-myprimary text-white p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl text-gray-900">Darling</h3>
                <p className="text-myprimary font-medium">
                  Photography Enthusiast
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              &ldquo;The diversity of landscapes and rich cultural heritage made
              every moment picture-perfect. A photographer&apos;s
              paradise!&rdquo;
            </p>
            <div className="flex text-myprimary text-xl">★★★★★</div>
          </motion.div>

          {/* Testimonial Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-myprimary/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-myprimary text-white p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl text-gray-900">Jethalal</h3>
                <p className="text-myprimary font-medium">Food Explorer</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              &ldquo;The local cuisine and hospitality were outstanding. Every
              region offered unique flavors and unforgettable memories!&rdquo;
            </p>
            <div className="flex text-myprimary text-xl">★★★★★</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
