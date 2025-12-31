import WebDevHero from "./WebDevHero";
import WebDevStats from "./WebDevStats";
import WebDesignServices from "./WebDesignServices";
import WebDesignQuote from "./WebDesignQuote";
import WebDevelopmentServices from "./WebDevelopmentServices";


const WebDevelopment = () => {
  return (
    <main className="w-full overflow-hidden">
      <WebDevHero />
        <WebDevStats />
        <WebDesignServices />
        <WebDesignQuote />
        <WebDevelopmentServices />
    </main>
  );
};

export default WebDevelopment;
