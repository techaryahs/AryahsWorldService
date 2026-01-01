import React from "react";

// ✅ Correct imports (same folder, correct names)
import SEO from "./SEO";
import HeroSection from "./HeroSection";
import WhatWeDeliver from "./WhatWeDeliver";
import WhyChooseUs from "./WhyChooseUs";
import SubService from "./SubService";
import Benefits from "./Benefits";
import PriceModal from "./PriceModal";
import FAQs from "./FAQ";
import Workflow from "./Workflow";
import CaseStudies from "./CaseStudies";
import ProjectInquirySection from "./ProjectInquirySection";
import NewsletterSection from "./NewsletterSection";
import CTASection from "./CTASection";

const CustomSoftwareDevelopment = () => {
  return (
    <div className="bg-gradient-to-br from-white via-[#eef2ff] to-[#e8f0ff]">
      <SEO />
      <HeroSection />
      <WhatWeDeliver />
      <WhyChooseUs />
      <Benefits />
      <SubService />
      <FAQs />
      <PriceModal />
      <Workflow />
      <CaseStudies />
      <ProjectInquirySection />
      <NewsletterSection />
      <CTASection />
    </div>
  );
};

export default CustomSoftwareDevelopment;
