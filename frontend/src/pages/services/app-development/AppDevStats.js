const AppDevStats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

        {/* Block 1 */}
        <div className="flex gap-6 group">
          <div className="text-5xl">⏳</div>
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition">
              12+ Years Of Experience In <br /> Mobile App Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Develop Mobile App with a team of highly skilled and efficient
              mobile app developers with an experience of 12+ years.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex gap-6 group">
          <div className="text-5xl">👥</div>
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition">
              50+ Mobile App Developers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team of top-notch and dynamic mobile app developers make it
              easy to turn your mobile app development vision into reality.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex gap-6 group">
          <div className="text-5xl">🚀</div>
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition">
              120+ Successful Mobile App Projects
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We have worked on over 120+ mobile app development projects and
              have a deep understanding of client requirements.
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex gap-6 group">
          <div className="text-5xl">🏭</div>
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition">
              Mobile App Development <br /> For 50+ Industries
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We have successfully provided mobile app development services
              across 50+ industries, each with unique visions and ideas.
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <button className="border-2 border-blue-600 text-gray-900 px-10 py-4 font-bold tracking-wide hover:bg-blue-600 hover:text-white transition">
          Click here to avail the Best Mobile App Development Services
        </button>
      </div>
    </section>
  );
};

export default AppDevStats;
