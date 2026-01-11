
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoboAdvisorAutomation: React.FC = () => {
  const navigate = useNavigate();
  const [agreedRIA, setAgreedRIA] = useState(false);
  const [agreedApex, setAgreedApex] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Robo-Advisor Automation</span>
      </div>

      <main className="flex-grow flex flex-col pt-4 overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Automate your Investing with Robo-Advisor</h1>
        
        <div className="flex-1 overflow-y-auto no-scrollbar pr-1">
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>An automated ETF based Robo-Advisor supported by our proprietary algorithm and based on your personal risk profile. The easiest way to grow your investments.</p>
            
            <p>Start growing your money with just $100 — automatically, intelligently, and stress-free.</p>
            
            <div className="space-y-6">
              <label className="flex items-start group cursor-pointer">
                <div className="relative flex items-center mt-0.5">
                  <input 
                    type="checkbox" 
                    checked={agreedRIA} 
                    onChange={() => setAgreedRIA(!agreedRIA)}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 checked:bg-unifi-lime checked:border-unifi-lime transition-all"
                  />
                  <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
                </div>
                <span className="ml-3 text-sm">
                  I understand that Unifimoney RIA Inc. provides advisory services related to the 'Robo-Advisor' account only and I agree to the <a href="#" className="text-unifi-lime hover:underline font-medium">Unifimoney RIA Investment Advisory Agreement</a>
                </span>
              </label>

              <label className="flex items-start group cursor-pointer">
                <div className="relative flex items-center mt-0.5">
                  <input 
                    type="checkbox" 
                    checked={agreedApex} 
                    onChange={() => setAgreedApex(!agreedApex)}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 dark:border-gray-600 checked:bg-unifi-lime checked:border-unifi-lime transition-all"
                  />
                  <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
                </div>
                <span className="ml-3 text-sm">
                  I understand that Unifimoney will open accounts with Apex Clearing on my behalf, and I agree to the <a href="#" className="text-unifi-lime hover:underline">Apex Customer Account Agreement</a>, <a href="#" className="text-unifi-lime hover:underline">APEX Privacy Policy</a>, <a href="#" className="text-unifi-lime hover:underline">Client Relationship Summary Disclosures</a>, and <a href="#" className="text-unifi-lime hover:underline">NYSE Terms & Conditions</a>.
                </span>
              </label>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 pt-4">
              Investment advisory services provided by Unifimoney RIA, Inc., an SEC-registered investment advisor.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Apex Clearing is registered with the SEC, a member of FINRA, a participant in SIPC and licensed in 53 states and territories. FINRA BrokerCheck reports for Apex Clearing are available at https://www.finra.org/brokercheck. Certain services referenced on this site are provided through partnerships between Apex Clearing Corporation and third-parties.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Unifimoney RIA, Inc. maintains a Robo-Advisory product as an option for it's clients. The Unifimoney Robo-Advisory product uses APEX as its broker-dealer.
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white pt-2">
              Investment products are not FDIC or NCUA insured — no bank guarantee — may lose value.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-auto pb-4 pt-6 border-t border-gray-100 dark:border-gray-800">
        <button 
          onClick={() => agreedRIA && agreedApex && navigate('/annual-income')}
          disabled={!agreedRIA || !agreedApex}
          className={`w-full py-4 px-6 rounded-xl font-bold text-base text-white shadow-md transition-all duration-200 active:scale-[0.98] ${agreedRIA && agreedApex ? 'bg-unifi-lime hover:bg-opacity-90' : 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed opacity-60 shadow-none'}`}
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default RoboAdvisorAutomation;
