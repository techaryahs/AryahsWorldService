import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import AppDevelopment from "./pages/services/app-development/AppDevelopment";
import WebDevelopment from "./pages/services/web-development/WebDevelopment";

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
      </Routes>
    </Router>
  );
}

export default App;
