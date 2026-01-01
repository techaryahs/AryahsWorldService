import { useEffect } from "react";

const SEO = () => {
  useEffect(() => {
    document.title =
      "Data Science Solutions | Predictive Analytics, ML, BI Dashboards | AryahsWorld";

    const metaDescription =
      "AryahsWorld provides enterprise-grade Data Science solutions including predictive analytics, machine learning models, BI dashboards, data engineering pipelines, automation, and AI-driven insights to accelerate business growth.";

    const metaKeywords =
      "data science services, predictive analytics, machine learning, BI dashboards, data engineering, ETL pipelines, forecasting models, AryahsWorld";

    setMeta("description", metaDescription);
    setMeta("keywords", metaKeywords);
    setLink("canonical", "https://www.aryahsworld.com/services/data-science");

    setOG("og:title", "Data Science Solutions | AryahsWorld");
    setOG(
      "og:description",
      "Enterprise AI & ML modeling, BI dashboards, predictive analytics & data engineering systems by AryahsWorld."
    );
    setOG("og:url", "https://www.aryahsworld.com/services/data-science");
    setOG("og:type", "website");
    setOG(
      "og:image",
      "https://www.aryahsworld.com/assets/datascience-banner.png"
    );

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Data Science Solutions | AryahsWorld");
    setMeta(
      "twitter:description",
      "Data science, ML solutions & BI dashboards tailored for enterprise needs."
    );

    injectJSONLD("service-schema", {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Data Science Solutions",
      provider: {
        "@type": "Organization",
        name: "AryahsWorld",
        url: "https://www.aryahsworld.com",
      },
      serviceType: "Data Science & Analytics",
      areaServed: "Global",
      url: "https://www.aryahsworld.com/services/data-science",
    });

    injectJSONLD("faq-schema", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What data science services does AryahsWorld offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer predictive analytics, BI dashboards, machine learning models, data engineering, automation pipelines, and real-time analytics.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build custom machine learning models?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we develop end-to-end ML models including forecasting, classification, clustering, anomaly detection, NLP models, and deployment pipelines.",
          },
        },
      ],
    });
  }, []);

  return null;
};

/* ---------- Helpers ---------- */

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOG(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function injectJSONLD(id, json) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(json);
}

export default SEO;
