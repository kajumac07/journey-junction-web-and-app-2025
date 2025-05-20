/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@nextui-org/react";

const categories = [
  "All",
  "Nature",
  "Cultural",
  "Adventure",
  "Luxury",
  "Budget",
] as const;

type JourneyLocation = {
  id: number;
  title: string;
  location: {
    lat: number;
    lng: number;
  };
  thumbnail: string;
  category: string;
  snippet: string;
};

const journeyLocations: JourneyLocation[] = [
  {
    id: 1,
    title: "Exploring the Backwaters of Kerala",
    location: { lat: 9.9312, lng: 76.2673 },
    thumbnail:
      "https://images.pexels.com/photos/29548656/pexels-photo-29548656/free-photo-of-stunning-view-of-kerala-beach-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Nature",
    snippet: "A serene journey through houseboats and tranquil waters...",
  },
  {
    id: 2,
    title: "Cultural Festivities in Varanasi",
    location: { lat: 25.3176, lng: 82.9739 },
    thumbnail:
      "https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cultural",
    snippet: "Experience the essence of Indian spirituality...",
  },
  {
    id: 3,
    title: "Adventures in Ladakh",
    location: { lat: 34.1526, lng: 77.5771 },
    thumbnail:
      "https://images.pexels.com/photos/3392154/pexels-photo-3392154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Adventure",
    snippet: "Biking through high passes and monasteries...",
  },
  {
    id: 4,
    title: "Royal Palaces of Jaipur",
    location: { lat: 26.9124, lng: 75.7873 },
    thumbnail:
      "https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Luxury",
    snippet: "Experience the royal heritage of the Pink City...",
  },
  {
    id: 5,
    title: "Beaches of Goa",
    location: { lat: 15.2993, lng: 74.124 },
    thumbnail:
      "https://images.pexels.com/photos/29592232/pexels-photo-29592232/free-photo-of-woman-meditating-on-arambol-beach-in-goa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Budget",
    snippet: "Sun, sand and seafood in India's party capital...",
  },
  {
    id: 6,
    title: "Trekking in Himachal",
    location: { lat: 31.1048, lng: 77.1734 },
    thumbnail:
      "https://images.pexels.com/photos/27970045/pexels-photo-27970045/free-photo-of-nanital.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Adventure",
    snippet: "Scenic trails through pine forests and snow peaks...",
  },
  {
    id: 7,
    title: "Coastal Paradise of Visakhapatnam",
    location: { lat: 17.6868, lng: 83.2185 },
    thumbnail:
      "https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Nature",
    snippet: "Beautiful beaches and scenic hill views of the port city...",
  },
  {
    id: 8,
    title: "Heritage of Mysore",
    location: { lat: 12.2958, lng: 76.6394 },
    thumbnail:
      "https://images.pexels.com/photos/18711386/pexels-photo-18711386/free-photo-of-mysore-palace-karnataka-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Heritage",
    snippet: "Royal palaces and rich cultural heritage of Karnataka...",
  },
  {
    id: 9,
    title: "Cultural Capital Kolkata",
    location: { lat: 22.5726, lng: 88.3639 },
    thumbnail:
      "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cultural",
    snippet: "Art, literature and colonial architecture...",
  },
  {
    id: 10,
    title: "Sacred Shores of Puri",
    location: { lat: 19.8135, lng: 85.8312 },
    thumbnail:
      "https://images.pexels.com/photos/15351642/pexels-photo-15351642/free-photo-of-jagannath-temple-puri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Spiritual",
    snippet: "Ancient temples and pristine beaches of Odisha...",
  },
];

const mapContainerStyle = {
  width: "calc(100vw - 40px)", // Added padding of 20px on each side
  height: "500px",
  margin: "0 20px", // Center the map with margin
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const mapOptions = {
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#a8d5e5" }], // Lighter blue for water
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }], // Light gray for landscape
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 100 }], // White roads
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#e8e8e8" }], // Light gray for points of interest
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#e8e8e8" }], // Light gray for transit
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 2 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#666666" }], // Dark gray text
    },
  ],
  disableDefaultUI: true,
  zoomControl: true,
};

export default function MapStoryComponent() {
  const [selectedLocation, setSelectedLocation] =
    useState<JourneyLocation | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const onMapLoad = useCallback(() => {
    setIsMapLoaded(true);
  }, []);

  const filteredLocations = journeyLocations.filter(
    (location) =>
      activeCategory === "All" || location.category === activeCategory
  );

  return (
    <section className="py-12 bg-gradient-to-b from-white to-myprimary/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full bg-myprimary/10 text-myprimary font-semibold mb-3 shadow-lg hover:shadow-myprimary/30 transition-all"
          >
            Journey Map
          </motion.span>
          <h2 className="text-4xl font-bold mb-6">
            Discover Stories Across India
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                className={`px-6 py-1 rounded-full transition-all transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-myprimary text-white shadow-lg shadow-myprimary/30"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
          loadingElement={<div className="h-full" />}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={5}
            options={mapOptions}
            onLoad={onMapLoad}
          >
            {isMapLoaded &&
              window.google &&
              filteredLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.location}
                  onClick={() => setSelectedLocation(location)}
                  icon={{
                    url: "/marker.png",
                    scaledSize: window.google?.maps?.Size
                      ? new window.google.maps.Size(40, 40)
                      : undefined,
                  }}
                  animation={window.google?.maps?.Animation?.DROP}
                />
              ))}

            {selectedLocation && (
              <InfoWindow
                position={selectedLocation.location}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <Card className="w-72 bg-white shadow-xl">
                  <div className="h-40 w-full relative">
                    <img
                      src={selectedLocation.thumbnail}
                      alt={selectedLocation.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-3 py-1 bg-myprimary text-white text-sm rounded-full shadow-lg">
                        {selectedLocation.category}
                      </span>
                    </div>
                  </div>
                  <CardBody className="p-4">
                    <h3 className="text-lg font-bold mb-2">
                      {selectedLocation.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {selectedLocation.snippet}
                    </p>
                    <Button
                      className="w-full bg-myprimary text-white hover:bg-myprimary/90 transform hover:scale-105 transition-all"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </motion.div>
    </section>
  );
}
