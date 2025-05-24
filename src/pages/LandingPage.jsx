// pages/LandingPage.jsx
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import HeroSection from "../components/landing/HeroSection";
import FeatureHighlights from "../components/landing/FeatureHighlights";
import HowItWorks from "../components/landing/HowItWorks";
import CallToAction from "../components/landing/CallToAction";
import TestimonialSection from "../components/landing/TestimonialSection";

import { checkExistingData } from "../utils/localStorageHelpers";
import scrollToTop from "../utils/scrollToTop";

export default function LandingPage() {
  useEffect(() => {
    scrollToTop(); // Scroll to top on mount
  }, []);

  const hasData = checkExistingData("shopping-list-app-data");

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection hasData={hasData} />
        <FeatureHighlights />
        <HowItWorks />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
