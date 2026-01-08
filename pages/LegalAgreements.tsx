import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LegalAgreements: React.FC = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    risks: false,
    patriot: false
  });

  const allAgreed = Object.values(agreements).every(Boolean);

  const toggle = (key: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-white dark:bg-gray-900 font-display">
      <header className="flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-icons-outlined">arrow_back_ios_new</span>
        </button>
      </header>
      
      <main className="flex-1 flex flex-col mt-6 overflow-hidden">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Legal Agreements</h1>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">Please review and accept these terms to continue</p>
        
        <div className="flex-1 overflow-y-auto no-scrollbar mt-6 space-y-8 pb-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Terms & Conditions</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border border-gray-100 dark:border-gray-700">
              <p>By accessing and using Unifimoney's services, you agree to comply with and be bound by the following terms and conditions:</p>
              <div className="space-y-3 pl-2">
                <p><strong className="text-gray-900 dark:text-gray-100">1. Service Agreement:</strong> You acknowledge that Unifimoney provides investment services subject to financial regulations.</p>
                <p><strong className="text-gray-900 dark:text-gray-100">2. Risk Disclosure:</strong> All investments involve risk, including the possible loss of principal. Past performance does not guarantee future results.</p>
                <p><strong className="text-gray-900 dark:text-gray-100">3. Privacy Policy:</strong> Your personal information will be handled in accordance with our Privacy Policy.</p>
                <p><strong className="text-gray-900 dark:text-gray-100">4. Electronic Communications:</strong> By using our services, you consent to receive communications electronically.</p>
                <p><strong className="text-gray-900 dark:text-gray-100">5. Governing Law:</strong> These terms are governed by and construed in accordance with the laws of the United States.</p>
              </div>
              <p className="text-xs text-gray-500 italic mt-2 border-t border-gray-200 dark:border-gray-700 pt-2">
                  You also consent to receive one-time passcodes (OTPs) for secure transactions and promotional messages via SMS. Consent is not a condition of purchase.
              </p>
            </div>
            
            <div className="mt-4 space-y-4">
              <label className="flex items-start group cursor-pointer">
                <div className="relative flex items-center">
                    <input 
                        type="checkbox" 
                        checked={agreements.terms} 
                        onChange={() => toggle('terms')}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 checked:bg-unifi-olive checked:border-unifi-olive transition-all"
                    />
                    <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
                </div>
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    I have read, understand, and agree to the <a href="#" className="text-unifi-olive font-medium hover:underline">Terms and Conditions</a>
                </span>
              </label>
              
              <label className="flex items-start group cursor-pointer">
                 <div className="relative flex items-center">
                    <input 
                        type="checkbox" 
                        checked={agreements.privacy} 
                        onChange={() => toggle('privacy')}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 checked:bg-unifi-olive checked:border-unifi-olive transition-all"
                    />
                    <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
                </div>
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    I acknowledge and accept the <a href="#" className="text-unifi-olive font-medium hover:underline">Privacy Policy</a>
                </span>
              </label>

               <label className="flex items-start group cursor-pointer">
                 <div className="relative flex items-center">
                    <input 
                        type="checkbox" 
                        checked={agreements.risks} 
                        onChange={() => toggle('risks')}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 checked:bg-unifi-olive checked:border-unifi-olive transition-all"
                    />
                    <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
                </div>
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    I understand the investment risks associated with this account
                </span>
              </label>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">USA Patriot Act Notice</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border border-gray-100 dark:border-gray-700">
              <p className="font-bold text-gray-900 dark:text-white">Important Information About Procedures for Opening a New Account.</p>
              <p>To help the government fight the funding of terrorism and money laundering activities, Federal Law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
              <p>What this means for you is when you open an account, we will ask for your name, address, date of birth, and other information that will allow us to see your driver's license or other identifying documents.</p>
            </div>
            
            <div className="mt-4">
               <label className="flex items-start group cursor-pointer">
                 <div className="relative flex items-center">
                    <input 
                        type="checkbox" 
                        checked={agreements.patriot} 
                        onChange={() => toggle('patriot')}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 checked:bg-unifi-olive checked:border-unifi-olive transition-all"
                    />
                    <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
                </div>
                <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    I understand and acknowledge the USA Patriot Act requirements
                </span>
              </label>
            </div>
          </section>
          
        </div>
      </main>
      
      <footer className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
        <button 
          onClick={() => allAgreed && navigate('/')} // Loop back to home for demo
          disabled={!allAgreed}
          className={`w-full text-lg font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg ${allAgreed ? 'bg-unifi-olive text-white hover:opacity-90 hover:shadow-xl transform hover:-translate-y-0.5' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'}`}
        >
          Accept and Continue
        </button>
      </footer>
    </div>
  );
};

export default LegalAgreements;