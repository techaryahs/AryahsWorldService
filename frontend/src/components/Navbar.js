import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-900">
          MyCompany
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-gray-800 font-medium">

          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About Us
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition">
              Our Services ▾
            </span>

            {/* Dropdown */}
            <ul
              className="
                absolute left-0 mt-3 w-72 bg-white rounded-lg shadow-xl
                border border-gray-100 overflow-hidden
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              "
            >
              <li>
                <Link
                  to="/services/app-development"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  App Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/web-development"
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  Website Design & Development
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/blogs" className="hover:text-blue-600 transition">
              Blogs
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
