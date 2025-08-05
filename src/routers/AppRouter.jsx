import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/layout';
import Home from '../screens/Home';
import About from '../screens/About';
import SpaceEducationScreen from '../screens/SpaceEducationScreen';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/space-outreach" element={<SpaceEducationScreen />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
