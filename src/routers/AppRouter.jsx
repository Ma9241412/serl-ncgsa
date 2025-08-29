import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/layout";

import Home from "../screens/Home";
import About from "../screens/About";
import SpaceOutreachScreen from "../screens/SpaceOutreachScreen";
import SpaceEducationScreen from "../screens/SpaceEducationScreen";
import CapacityBuildingScreen from "../screens/CapacityBuildingScreen";
import ResourcesPage from "../screens/ResourcesPage";
import ContactUs from "../screens/ContactUs";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/space-outreach" element={<SpaceOutreachScreen />} />
          <Route path="/space-education" element={<SpaceEducationScreen />} />
          <Route path="/capacity-building" element={<CapacityBuildingScreen />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
