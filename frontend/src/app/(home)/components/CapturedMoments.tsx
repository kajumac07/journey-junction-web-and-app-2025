/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const moments = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg",
    title: "Cultural Festivities in Varanasi",
    description:
      "Experience the essence of Indian spirituality along the ghats of Ganga...",
    photographer: "Meera Sharma",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg",
    title: "Adventures in Ladakh",
    description: "Biking through high passes and discovering monasteries...",
    photographer: "Aryan Singh",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg",
    title: "Taste of Royalty in Jaipur",
    description:
      "Living like kings and queens amidst forts and palaces of the Pink City...",
    photographer: "Ananya Verma",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/29548656/pexels-photo-29548656.jpeg",
    title: "Exploring the Backwaters of Kerala",
    description:
      "A serene journey through houseboats, lush greenery, and tranquil waters...",
    photographer: "Ravi Kumar",
  },
];

export default function CapturedMoments() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-8 py-3 rounded-full bg-myprimary/10 text-myprimary font-semibold mb-3"
          >
            CAPTURED MOMENTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-mytext"
          >
            Visual Stories from India
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Large Story */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="row-span-2 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-[4/5] relative">
              <img
                src={moments[0].image}
                alt={moments[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {moments[0].title}
                </h3>
                <p className="text-white/90 mb-4">{moments[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/77796776?v=4"
                      alt="Author"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-white">
                      By {moments[0].photographer}
                    </span>
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
            {moments.slice(1).map((moment) => (
              <motion.div
                key={moment.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-square relative">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {moment.title}
                    </h4>
                    <p className="text-white/80 text-sm mb-2">
                      {moment.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm">
                        {moment.photographer}
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
  );
}
