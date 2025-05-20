"use client";

import CapturedMoments from "./components/CapturedMoments";
import ExploreCategoryComponent from "./components/ExploreCategory";
import FeaturedComponent from "./components/FeaturedComp";
import HeroComponent from "./components/HeroComp";
import HowItWorksComponent from "./components/HowItWorks";
import MapStoryComponent from "./components/MapStoryComponent";
import TestimonalComponent from "./components/Testimonal";
import WhyJourneyJunctionComponent from "./components/WhyJourneyJunction";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroComponent />
      <FeaturedComponent />
      <WhyJourneyJunctionComponent />
      <HowItWorksComponent />
      <MapStoryComponent />
      <TestimonalComponent />
      <ExploreCategoryComponent />
      <CapturedMoments />
    </div>
  );
}
