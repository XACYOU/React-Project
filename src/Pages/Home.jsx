import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import DropdownList from "../Components/DropdownList";
import Carousel_Banner from "../Components/Carousel_Banner";
import HeroSection from "../Components/HeroSection";
import HealthConcernCategory from "../Components/HealthConcernCategory";
import HealthCheckupCategory from "../Components/HealthCheckupCategory";
import FeaturedBrand from "../Components/FeaturedBrands";
import CollagenSupplement from "../Components/CollagenSupplement";
import PersonalCareSection from "../Components/PersonalCareSection";
import ContentSection from "../Components/ContentSection";
import FeatureSection from "../Components/FeatureSection";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
import FooterFeature from "../Components/FooterFeature";

const Home = () => {
  return (
    <>
      <Box maxW="100%" bg="#ffffff" pb={6} boxShadow="base">
        <Navbar />
        <SearchBar />
        <DropdownList />
        <Carousel_Banner />
      </Box>

      <HeroSection />
      <HealthConcernCategory />
      <HealthCheckupCategory />
      <FeaturedBrand />
      <CollagenSupplement />
      <PersonalCareSection />

      <Box maxW="100%" bg="#ffffff" boxShadow="base">
        <ContentSection />
        <FeatureSection />
        <CallToAction />
      </Box>

      <Box maxW="100%" bg="#fffcf8">
        <Footer />
      </Box>
    </>
  );
};

export default Home;
