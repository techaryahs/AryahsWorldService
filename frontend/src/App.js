import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import AppDevelopment from "./pages/services/app-development/AppDevelopment";
import WebDevelopment from "./pages/services/web-development/WebDevelopment";
import CustomSoftwareDevelopment from "./pages/services/custom-software/CustomSoftwareDevelopment";
import Aboutus from "./pages/about/aboutus";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/services/app-development"
          element={<AppDevelopment />}
        />
        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />
        <Route
          path="/services/custom-software"
          element={<CustomSoftwareDevelopment />}
        />
        <Route
          path="/about"
          element={<Aboutus />}
        />
      </Routes>


    </Router>
  );
}

export default App;
