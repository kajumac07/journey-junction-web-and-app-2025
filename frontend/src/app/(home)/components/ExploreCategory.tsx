/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";

const categories = [
  {
    icon: "🏖️",
    title: "Beach Escapes",
    description: "Discover serene coastal getaways and pristine beaches",
    bgColor: "bg-myprimary/5",
    iconBg: "bg-myprimary/20",
    borderColor: "border-myprimary/30",
  },
  {
    icon: "⛰️",
    title: "Mountain Adventures",
    description: "Explore majestic peaks and scenic mountain trails",
    bgColor: "bg-myprimary/5",
    iconBg: "bg-myprimary/20",
    borderColor: "border-myprimary/30",
  },
  {
    icon: "🏛️",
    title: "Cultural Trips",
    description: "Immerse yourself in rich traditions and heritage",
    bgColor: "bg-myprimary/5",
    iconBg: "bg-myprimary/20",
    borderColor: "border-myprimary/30",
  },
  {
    icon: "🏃",
    title: "Adventure",
    description: "Thrilling experiences for the daring soul",
    bgColor: "bg-myprimary/5",
    iconBg: "bg-myprimary/20",
    borderColor: "border-myprimary/30",
  },
  {
    icon: "👑",
    title: "Luxury",
    description: "Indulge in premium travel experiences",
    bgColor: "bg-myprimary/5",
    iconBg: "bg-myprimary/20",
    borderColor: "border-myprimary/30",
  },
  {
    icon: "💰",
    title: "Budget",
    description: "Amazing experiences that won't break the bank",
    bgColor: "bg-myprimary/5",
    iconBg: "bg-myprimary/20",
    borderColor: "border-myprimary/30",
  },
];

export default function ExploreCategoryComponent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            EXPLORE CATEGORIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-gray-900"
          >
            Find Your Perfect Adventure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover travel experiences tailored to your interests and style
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.bgColor} p-8 rounded-2xl border ${category.borderColor} group hover:shadow-lg transition-all duration-300`}
            >
              <div
                className={`${category.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>

              <p className="text-gray-600 mb-6">{category.description}</p>

              <Button
                className="bg-myprimary text-white w-full hover:opacity-90 group rounded-md"
                size="lg"
                radius="lg"
              >
                <span className="flex items-center gap-2">
                  Explore more
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
