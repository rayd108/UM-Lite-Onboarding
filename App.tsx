
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ImportantNotice from './pages/ImportantNotice';
import PhoneVerification from './pages/PhoneVerification';
import ContactInfo from './pages/ContactInfo';
import PersonalDetails from './pages/PersonalDetails';
import InvestmentJourney from './pages/InvestmentJourney';
import AccountSetup from './pages/AccountSetup';
import CitizenshipStatus from './pages/CitizenshipStatus';
import AddressInformation from './pages/AddressInformation';
import EmploymentInformation from './pages/EmploymentInformation';
import RegulatoryQuestions from './pages/RegulatoryQuestions';
import LegalAgreements from './pages/LegalAgreements';
import InvestmentProfileOverview from './pages/InvestmentProfileOverview';
import RoboAdvisorAutomation from './pages/RoboAdvisorAutomation';
import AnnualIncome from './pages/AnnualIncome';
import WithdrawalTimeframe from './pages/WithdrawalTimeframe';
import NetWorth from './pages/NetWorth';
import InvestmentPreference from './pages/InvestmentPreference';
import RiskTolerance from './pages/RiskTolerance';
import InvestmentKnowledge from './pages/InvestmentKnowledge';
import RiskToleranceResult from './pages/RiskToleranceResult';
import RoboInitialSetup from './pages/RoboInitialSetup';
import RoboAutomatedSetup from './pages/RoboAutomatedSetup';
import TradingExperience from './pages/TradingExperience';
import AccountProcessing from './pages/AccountProcessing';

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
          <Route path="/account-setup" element={<AccountSetup />} />
          <Route path="/citizenship" element={<CitizenshipStatus />} />
          <Route path="/address" element={<AddressInformation />} />
          <Route path="/employment" element={<EmploymentInformation />} />
          <Route path="/regulatory" element={<RegulatoryQuestions />} />
          <Route path="/legal-agreements" element={<LegalAgreements />} />
          <Route path="/investment-profile" element={<InvestmentProfileOverview />} />
          <Route path="/robo-advisor-automation" element={<RoboAdvisorAutomation />} />
          <Route path="/annual-income" element={<AnnualIncome />} />
          <Route path="/withdrawal-timeframe" element={<WithdrawalTimeframe />} />
          <Route path="/net-worth" element={<NetWorth />} />
          <Route path="/investment-preference" element={<InvestmentPreference />} />
          <Route path="/risk-tolerance" element={<RiskTolerance />} />
          <Route path="/investment-knowledge" element={<InvestmentKnowledge />} />
          <Route path="/risk-tolerance-result" element={<RiskToleranceResult />} />
          <Route path="/robo-initial-setup" element={<RoboInitialSetup />} />
          <Route path="/robo-automated-setup" element={<RoboAutomatedSetup />} />
          <Route path="/trading-experience" element={<TradingExperience />} />
          <Route path="/account-processing" element={<AccountProcessing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
