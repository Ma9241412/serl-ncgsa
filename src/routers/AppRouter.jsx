import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import Layout from "../components/layouts/layout";

const Home = lazy(() => import("../screens/Home"));
const About = lazy(() => import("../screens/About"));
const SpaceEducationScreen = lazy(() =>
  import("../screens/SpaceEducationScreen")
);

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 0",
              }}
            >
              <Spin size="large" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/space-outreach" element={<SpaceEducationScreen />} />
            {/* Add more routes here as needed */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
