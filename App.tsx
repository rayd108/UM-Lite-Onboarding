import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ImportantNotice from './pages/ImportantNotice';
import PhoneVerification from './pages/PhoneVerification';
import ContactInfo from './pages/ContactInfo';
import PersonalDetails from './pages/PersonalDetails';
import InvestmentJourney from './pages/InvestmentJourney';
import LegalAgreements from './pages/LegalAgreements';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl overflow-hidden relative">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notice" element={<ImportantNotice />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/investment-journey" element={<InvestmentJourney />} />
          <Route path="/legal-agreements" element={<LegalAgreements />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;