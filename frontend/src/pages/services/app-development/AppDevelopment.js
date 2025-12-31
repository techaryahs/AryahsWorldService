import ScrollReveal from "../../../components/ScrollReveal";

import AppDevHero from "./AppDevHero";
import AppDevStats from "./AppDevStats";
import AppDevOverview from "./AppDevOverview";
import AppDevBenefits from "./AppDevBenefits";
import AppDevHighlightAndSubServices from "./AppDevHighlightAndSubServices";
import AppDevSubServices from "./AppDevSubServices";
import AppDevPricingIntro from "./AppDevPricingIntro";
import AppDevPricingModels from "./AppDevPricingModels";
import BestPractices from "./BestPractices";
import BusinessVerticals from "./BusinessVerticals";
import TechStack from "./TechStack";
import WorkProcess from "./WorkingProcess";
import CaseStudies from "./CaseStudies";
import CTASection from "./CTASection";
import ProjectInquirySection from "./ProjectInquirySection";
import NewsletterSection from "./NewsletterSection";

const AppDevelopment = () => {
  return (
    <>
      <ScrollReveal y={0}>
        <AppDevHero />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevStats />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevOverview />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevBenefits />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevHighlightAndSubServices />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevSubServices />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevPricingIntro />
      </ScrollReveal>

      <ScrollReveal>
        <AppDevPricingModels />
      </ScrollReveal>

      <ScrollReveal>
        <BestPractices />
      </ScrollReveal>

      <ScrollReveal>
        <BusinessVerticals />
      </ScrollReveal>

      <ScrollReveal>
        <TechStack />
      </ScrollReveal>

      <ScrollReveal>
        <WorkProcess />
      </ScrollReveal>

      <ScrollReveal>
        <CaseStudies />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectInquirySection />
      </ScrollReveal>

      <ScrollReveal y={40}>
        <NewsletterSection />
      </ScrollReveal>
    </>
  );
};

export default AppDevelopment;
