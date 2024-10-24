import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
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
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      {" "}
      {/* Ensure your app is wrapped here */}
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
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
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
