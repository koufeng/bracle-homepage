import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "components/Layout";
import Home from "views/Home";
import Staking from "views/Staking";
import GrantProgram from "views/GrantProgram";
import DataProvider from "views/DataProvider";
import PriceFeeds from "views/PriceFeeds";
import PrivacyPolicy from "views/PrivacyPolicy";
import Terms from "views/Terms";

import "./assets/style/index.css";
import "./assets/style/font.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/ecosystem/grant-program" element={<GrantProgram />} />
          <Route path="/ecosystem/data-provider" element={<DataProvider />} />
          <Route path="/services/price-feeds" element={<PriceFeeds />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
