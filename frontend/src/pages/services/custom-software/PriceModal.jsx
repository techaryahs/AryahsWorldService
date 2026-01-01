import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBuilding,
    FaGraduationCap,
  FaHeartbeat,
  FaSearch,
  FaCalculator,
  FaCheckCircle,
  FaHandshake,
  FaShieldAlt,
  FaBook,
  FaTruck,
  FaPlane,
  FaMoneyBillWave,
  FaUtensils,
  FaIndustry,
  FaBroadcastTower,
  FaFilm,
  FaFootballBall,
  FaOilCan
} from "react-icons/fa";


const PricingModels = () => (
  <>
    {/* ================= PRICING MODELS ================= */}
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-700">
          Our Pricing Models
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* Fixed Price Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-6">
              <FaFileAlt className="text-5xl text-blue-700" />
              <h3 className="text-2xl font-extrabold text-gray-900">
                Fixed Price Model
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The team operates within a defined scope of work, adhering to
              specified timelines and costs. The project cost is agreed upon
              upfront and remains fixed throughout the project lifecycle.
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Key Features:
            </h4>

            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>The project scope is defined before the contract is signed.</li>
              <li>Total project cost is agreed upon in advance.</li>
              <li>Clear timelines and milestones are established.</li>
              <li>
                Any change or addition to deliverables is reviewed and
                renegotiated on a pro-rata basis.
              </li>
            </ol>
          </motion.div>

          {/* Onsite Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-6">
              <FaBuilding className="text-5xl text-blue-700" />
              <h3 className="text-2xl font-extrabold text-gray-900">
                Onsite Model
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The development team works directly at the client’s location by
              collaborating closely with the in-house team. This model enables
              face-to-face communication and faster decision-making throughout
              the development lifecycle.
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Key Features:
            </h4>

            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Better communication with the team physically present.</li>
              <li>The client directly oversees the project and goals.</li>
              <li>
                Complete visibility into every step of the development process
                with flexibility to adjust requirements.
              </li>
            </ol>
          </motion.div>

        </div>
      </div>
    </section>

    {/* ================= BEST PRACTICES ================= */}
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-700">
          Best Practices
        </h2>

        <p className="max-w-4xl text-gray-700 leading-relaxed mb-16">
          How we ensure success in custom software development services.
          AryahsWorld follows proven best practices to deliver high-quality,
          secure, and scalable software solutions while meeting timelines
          and budget constraints.
        </p>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">

          {[
            {
              icon: <FaSearch />,
              title: "Scoping",
              desc: "Structured requirement gathering ensures clear project planning and efficient handling of scope changes."
            },
            {
              icon: <FaCalculator />,
              title: "Cost Estimation",
              desc: "Early identification of cost drivers helps optimize budgets without compromising quality."
            },
            {
              icon: <FaCheckCircle />,
              title: "Quality Management",
              desc: "Robust KPIs and quality checks ensure consistent performance at every development stage."
            },
            {
              icon: <FaHandshake />,
              title: "Collaboration",
              desc: "Transparent communication ensures alignment between clients and development teams."
            },
            {
              icon: <FaShieldAlt />,
              title: "Security Management",
              desc: "Rigorous security practices protect applications throughout the development lifecycle."
            },
            {
              icon: <FaBook />,
              title: "Knowledge Management",
              desc: "Comprehensive documentation ensures transparency and long-term maintainability."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="text-4xl text-blue-700 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            className="px-10 py-4 border-2 border-blue-700 text-blue-700 
                       font-semibold rounded-md
                       hover:bg-blue-700 hover:text-white 
                       transition-all duration-300"
          >
            Get details about the approach to your project
          </button>
        </div>

      </div>
    </section>

{/* ================= BUSINESS VERTICALS ================= */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
      Business Verticals
    </h2>

    <p className="max-w-4xl text-gray-700 leading-relaxed mb-16">
      AryahsWorld is an experienced technology partner for fast-growing industries.
      We understand industry-specific challenges and deliver efficient, scalable,
      and custom software solutions.
    </p>

    {/* Verticals Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {[
        { label: "Education", icon: <FaGraduationCap /> },
        { label: "Healthcare", icon: <FaHeartbeat /> },
        { label: "Real Estate", icon: <FaBuilding /> },
        { label: "Logistics & Transportation", icon: <FaTruck /> },
        { label: "Travel & Hospitality", icon: <FaPlane /> },
        { label: "Fintech", icon: <FaMoneyBillWave /> },
        { label: "Food & Restaurant", icon: <FaUtensils /> },
        { label: "Manufacturing", icon: <FaIndustry /> },
        { label: "Telecommunication", icon: <FaBroadcastTower /> },
        { label: "Entertainment", icon: <FaFilm /> },
        { label: "Sports", icon: <FaFootballBall /> },
        { label: "Oil & Gas", icon: <FaOilCan /> }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-blue-900 text-white rounded-2xl 
                     h-36 flex flex-col items-center justify-center gap-3
                     shadow-lg hover:shadow-2xl
                     transition-all duration-300"
        >
          <div className="text-3xl text-white/90">
            {item.icon}
          </div>
          <span className="font-semibold text-center px-3">
            {item.label}
          </span>
        </motion.div>
      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-20">
      <button
        className="px-10 py-4 border-2 border-blue-700 text-blue-700 
                   font-semibold rounded-md
                   hover:bg-blue-700 hover:text-white 
                   transition-all duration-300"
      >
        Get details about the approach to your project
      </button>
    </div>

  </div>
</section>
<section className="py-15 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-blue-700">
      Tech Stack
    </h2>

    <div className="space-y-16">
      {[
        {
          category: "Back-end Programming Languages",
          techs: [
            { name: "PHP", logo: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
            { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
            { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
          ]
        },
        {
          category: "Front-end Programming Languages",
          techs: [
            { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
            { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
            { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
            { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
          ]
        },
        {
          category: "Mobile",
          techs: [
            { name: "Android", logo: "https://cdn.worldvectorlogo.com/logos/android-7.svg" },
            { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
            { name: "iOS", logo: "https://cdn.worldvectorlogo.com/logos/ios-apple.svg" },
          ]
        },
        {
          category: "DevOps",
          techs: [
            { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
            { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg" },
            { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
          ]
        }
      ].map((group, idx) => (
        <div key={idx} className="flex flex-col items-start">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-8">
            {group.category}
          </h3>

          <div className="flex flex-wrap gap-x-12 gap-y-10 items-center">
            {group.techs.map((tech, i) => (
              <div key={i} className="group flex flex-col items-center w-20">
                {/* Logo Container */}
                <div className="h-12 w-12 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="max-h-full max-w-full object-contain filter-blue"
                    /* Tip: Use a CSS filter in your global styles to make all logos blue */
                  />
                </div>
                <span className="text-gray-500 font-medium text-[11px] uppercase tracking-wider text-center group-hover:text-blue-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Optional CSS to force logos to a blue theme */}
  <style jsx>{`
    .filter-blue {
      filter: brightness(0) saturate(100%) invert(31%) sepia(94%) saturate(1147%) hue-rotate(196deg) brightness(96%) contrast(101%);
    }
  `}</style>
</section>


  </>
);

export default PricingModels;
