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
import "./assets/style/index.css";
import "./assets/style/font.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/grant-program" element={<GrantProgram />} />
          <Route path="/data-provider" element={<DataProvider />} />
          <Route path="/price-feeds" element={<PriceFeeds />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
