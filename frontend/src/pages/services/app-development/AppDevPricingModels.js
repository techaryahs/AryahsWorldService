import pricingImage from "../../../assets/pricingModel.jpg";

const AppDevPricingModels = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-6xl font-extrabold text-gray-900 mb-4">
            Our Pricing Models
          </h2>
          <p className="text-sm font-extrabold tracking-widest text-blue-600 uppercase">
            Models to harness our expertise in Mobile App Development
          </p>
        </div>

        {/* IMAGE */}
        <div className="mb-28">
          <img
            src={pricingImage}
            alt="Pricing Model"
            className="w-full rounded-lg"
          />
        </div>

        {/* FIXED + DEDICATED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-28">

          {/* Fixed Price */}
          <div className="group">
            <h3 className="flex items-center gap-3 text-2xl font-extrabold text-gray-900 mb-4 transition group-hover:text-blue-600">
              📄 Fixed Price Model
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The team operates within a defined scope of work, adhering to
              specified timelines and costs. The project cost is agreed upon
              upfront and remains fixed throughout the project.
            </p>

            <h4 className="font-bold text-gray-900 mb-3">
              Key Features:
            </h4>

            <ol className="list-decimal ml-6 text-gray-700 text-lg space-y-2">
              <li>The project scope is detailed before the contract is signed.</li>
              <li>We agree on the total cost.</li>
              <li>Timelines and milestones are established.</li>
              <li>Any change is renegotiated on a pro-rata basis.</li>
            </ol>
          </div>

          {/* Hire Dedicated */}
          <div className="group">
            <h3 className="flex items-center gap-3 text-2xl font-extrabold text-gray-900 mb-4 transition group-hover:text-blue-600">
              💳 Hire Dedicated Model
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The client hires a dedicated team or expert who works exclusively
              on the project. This team functions as an extension of your
              in-house staff.
            </p>

            <h4 className="font-bold text-gray-900 mb-3">
              Key Features:
            </h4>

            <ol className="list-decimal ml-6 text-gray-700 text-lg space-y-2">
              <li>Supports evolving requirements.</li>
              <li>Clients retain full control over priorities.</li>
              <li>Ideal for long-term development projects.</li>
            </ol>
          </div>

        </div>

        {/* ONSITE MODEL */}
        <div className="max-w-3xl group">
          <h3 className="flex items-center gap-3 text-2xl font-extrabold text-gray-900 mb-4 transition group-hover:text-blue-600">
            🏢 Onsite Model
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The development team works directly at the client’s location,
            collaborating closely with the in-house team. This enables
            face-to-face communication and faster decision-making.
          </p>

          <h4 className="font-bold text-gray-900 mb-3">
            Key Features:
          </h4>

          <ol className="list-decimal ml-6 text-gray-700 text-lg space-y-2">
            <li>Better communication due to physical presence.</li>
            <li>Clients closely monitor project progress.</li>
            <li>Complete transparency throughout development.</li>
          </ol>
        </div>

      </div>
    </section>
  );
};

export default AppDevPricingModels;
