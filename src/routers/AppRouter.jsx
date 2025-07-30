import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/layout';
import Home from '../screens/Home';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
