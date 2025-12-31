import AppDevImage from "../../../assets/AppDev.jpg";

const AppDevOverview = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6 hover:text-blue-700 transition">
            Develop Mobile App
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <span className="font-semibold">Aryahs World Infotech</span> is a
            blend of advanced programming expertise and creative thinking to
            develop mobile applications that meet modern industry standards.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Since 2018, we have successfully delivered
            <span className="font-semibold"> 120+ mobile applications </span>
            with stable performance, intuitive UI, and seamless user
            experience.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We build both
            <span className="font-semibold"> Native and Hybrid </span>
            mobile applications based on client requirements, following a
            quality-first approach and transparent communication throughout
            the development lifecycle.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={AppDevImage}
            alt="Mobile App Development - Aryahs World Infotech"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AppDevOverview;
