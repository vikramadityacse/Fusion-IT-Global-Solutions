import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import IndustryPage from './pages/IndustryPage';
import SapS4HanaPage from './pages/services/SapS4HanaPage';
import HanaMigrationPage from './pages/services/HanaMigrationPage';
import SapSupportPage from './pages/services/SapSupportPage';
import OffshoreOnsitePage from './pages/services/OffshoreOnsitePage';
import CustomSapDevPage from './pages/solutions/CustomSapDevPage';
import IntegrationServicesPage from './pages/solutions/IntegrationServicesPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/sap-s4-hana-implementation" element={<SapS4HanaPage />} />
            <Route path="/services/hana-migration" element={<HanaMigrationPage />} />
            <Route path="/services/sap-support-ams" element={<SapSupportPage />} />
            <Route path="/services/offshore-onsite-developments" element={<OffshoreOnsitePage />} />
            <Route path="/solutions/custom-sap-development" element={<CustomSapDevPage />} />
            <Route path="/solutions/integration-services" element={<IntegrationServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industry" element={<IndustryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;