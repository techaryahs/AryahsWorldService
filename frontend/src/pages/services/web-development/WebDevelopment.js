import WebDevHero from "./WebDevHero";
import WebDevStats from "./WebDevStats";
import WebDesignServices from "./WebDesignServices";
import WebDesignQuote from "./WebDesignQuote";
import WebDevelopmentServices from "./WebDevelopmentServices";
import WorkingProcess from "./WorkingProcess";
import PricingModels from "./PricingModels";
import SuccessFactors from "./SuccessFactors";
import WebDevFAQs from "./WebDevFAQs";
import FinalCTA from "./FinalCTA";
import ProjectInquiry from "./ProjectInquiry";
import NewsletterSection from "./NewsletterSection";


const WebDevelopment = () => {
  return (
    <main className="w-full overflow-hidden">
      <WebDevHero />
        <WebDevStats />
        <WebDesignServices />
        <WebDesignQuote />
        <WebDevelopmentServices />
        <WorkingProcess />
        <PricingModels />
        <SuccessFactors />
        <WebDevFAQs />
        <FinalCTA />
        <ProjectInquiry />
        <NewsletterSection />
    </main>
  );
};

export default WebDevelopment;
