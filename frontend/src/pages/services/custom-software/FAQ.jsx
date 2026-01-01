const FAQ = () => (
 <section className="py-24">
  <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700">
    FAQs for Data Science Services
  </h2>

  <div className="max-w-4xl mx-auto px-6 space-y-4">
    {[
      {
        q: "What data science services do you offer?",
        a: "We provide predictive analytics, machine learning models, BI dashboards, and data engineering solutions."
      },
      {
        q: "Do you build custom ML models?",
        a: "Yes, all our models are custom-built based on business requirements."
      },
      {
        q: "Can you work with existing data systems?",
        a: "Absolutely. We integrate seamlessly with your existing infrastructure."
      },
      {
        q: "How long does a data science project take?",
        a: "Project timelines vary, but most engagements range from 4–12 weeks."
      }
    ].map((faq, i) => (
      <details
        key={i}
        className="group bg-white border rounded-xl p-5 shadow-sm"
      >
        <summary className="cursor-pointer font-medium text-gray-800">
          {faq.q}
        </summary>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {faq.a}
        </p>
      </details>
    ))}
  </div>
</section>

);

export default FAQ;
