"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const featuredExperiences = [
  {
    id: 1,
    title: "Exploring the Backwaters of Kerala",
    author: "Darling",
    snippet:
      "A serene journey through houseboats, lush greenery, and tranquil waters...",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Nature",
  },
  {
    id: 2,
    title: "Cultural Festivities in Varanasi",
    author: "Riddhi Mishra",
    snippet:
      "Experience the essence of Indian spirituality along the ghats of Ganga...",
    image:
      "https://images.pexels.com/photos/20518303/pexels-photo-20518303/free-photo-of-ganga-aarti-ceremony-on-street-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cultural",
  },
  {
    id: 3,
    title: "Adventures in Ladakh",
    author: "Vipin Patel",
    snippet: "Biking through high passes and discovering monasteries...",
    image:
      "https://images.pexels.com/photos/27775799/pexels-photo-27775799/free-photo-of-frozen-pangong-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Adventure",
  },
  {
    id: 4,
    title: "Taste of Royalty in Jaipur",
    author: "Kalua Singh",
    snippet:
      "Living like kings and queens amidst forts and palaces of the Pink City...",
    image:
      "https://images.pexels.com/photos/19149580/pexels-photo-19149580/free-photo-of-gaitor-ki-chhatriyan-in-jaipur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Luxury",
  },
  {
    id: 5,
    title: "Road Trip Through the Konkan Coast",
    author: "Nikhil Joshi",
    snippet:
      "Discovering hidden beaches, temples, and local cuisines on the scenic coast...",
    image:
      "https://images.pexels.com/photos/24742027/pexels-photo-24742027/free-photo-of-train-passing-through-a-forest-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Adventure",
  },
  {
    id: 6,
    title: "Mysore Palace: Royal Heritage of Karnataka",
    author: "Dimple Pandey",
    snippet:
      "Experience the grandeur and opulence of one of India's most magnificent palaces...",
    image:
      "https://images.pexels.com/photos/17353476/pexels-photo-17353476/free-photo-of-a-baroque-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Heritage",
  },
];

export default function FeaturedComponent() {
  return (
    <section className="py-20 px-6 bg-mybg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-myprimary text-white px-8 py-3 rounded-full text-sm tracking-wider shadow-lg hover:shadow-myprimary/50 transition-all duration-300">
              FEATURED STORIES
            </span>
          </div>
          <h2 className="text-5xl font-semibold text-mytext mb-6 tracking-tight">
            Featured Travel Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Discover inspiring journeys and unique experiences shared by our
            global community of travelers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${experience.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="px-6 py-2 bg-myprimary text-white rounded-full text-sm font-bold shadow-xl hover:shadow-myprimary/50 transition-all duration-300">
                        {experience.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-8 py-6">
                  <h3 className="text-2xl font-bold text-mytext mb-4 hover:text-myprimary transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {experience.snippet}
                  </p>
                </CardBody>
                <CardFooter className="px-8 py-5 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-myprimary text-white flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold">
                        {experience.author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">
                      {experience.author}
                    </span>
                  </div>
                  <button className="ml-auto flex items-center space-x-2 bg-white border-2 border-myprimary text-myprimary hover:bg-myprimary hover:text-white px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-sm group">
                    <span>Read More</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
