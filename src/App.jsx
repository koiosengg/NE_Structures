import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PreEngineeredBuildings from "./components/PreEngineeredBuildings";
import HighRiseSteelStructures from "./components/HighRiseSteelStructures";
import RoofingSheets from "./components/RoofingSheets";
import CZPurlins from "./components/CZPurlins";
import StructuralEngineeringServices from "./components/StructuralEngineeringServices";
import BuildingInformationModelling from "./components/BuildingInformationModelling";
import Infrastructure from "./components/Infrastructure";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route
                path="PreEngineeredBuildings"
                element={<PreEngineeredBuildings />}
              />
              <Route
                path="HighRiseSteelStructures"
                element={<HighRiseSteelStructures />}
              />
              <Route path="RoofingSheets" element={<RoofingSheets />} />
              <Route path="CZPurlins" element={<CZPurlins />} />
              <Route
                path="StructuralEngineeringServices"
                element={<StructuralEngineeringServices />}
              />
              <Route
                path="BuildingInformationModelling"
                element={<BuildingInformationModelling />}
              />
              <Route path="Infrastructure" element={<Infrastructure />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="TermsOfService" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
