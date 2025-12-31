const AppDevSubServices = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-6xl font-extrabold text-gray-900 mb-6">
          Sub Services
        </h2>

        <p className="text-sm font-extrabold text-red-600 tracking-widest uppercase mb-24">
          Refer to the diverse range of mobile app development services that we offer:
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-28 text-center">

          {/* Item */}
          {[
            { icon: "📐", title: "PRODUCT DESIGN" },
            { icon: "💡", title: "MOBILE APP CONSULTING" },
            { icon: "🧩", title: "MOBILE APP DESIGN" },
            { icon: "📱", title: "MOBILE APP DEVELOPMENT" },
            { icon: "🔗", title: "MOBILE APP INTEGRATION" },
            { icon: "⭐", title: "TESTING AND QA" },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer transition"
            >
              <div className="text-5xl mb-6 transition group-hover:text-blue-600">
                {item.icon}
              </div>

              <h3 className="text-sm font-extrabold tracking-widest text-gray-900 transition group-hover:text-blue-600">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AppDevSubServices;
