import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImportantNotice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-400/50 dark:bg-gray-900/90 font-inter min-h-screen flex items-end sm:items-center justify-center p-4 backdrop-blur-sm relative">
      {/* Page Reference */}
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-500/60 uppercase tracking-widest">Screen: Important Notice</span>
      </div>

      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Unifimoney Important Notice</h1>
          
          <div className="mt-4 space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              You are now leaving Garden. By transitioning to <a className="text-unifi-lime dark:text-unifi-lime hover:underline cursor-pointer">Unifimoney.com</a>, you are entering Unifimoney Tech QOBZ, LLC and Unifimoney RIA QOBZ, LLC. Unifimoney RIA QOBZ, LLC is an SEC-registered investment advisor. You acknowledge and consent that certain personal data and Garden account data will be shared with <a className="text-unifi-lime dark:text-unifi-lime hover:underline cursor-pointer">Unifimoney.com</a> in accordance with all applicable privacy policies, customer agreements and terms of service. For more information regarding these other <a className="text-unifi-lime dark:text-unifi-lime hover:underline cursor-pointer">Unifimoney.com</a> policies, agreements and terms of service, please refer to <a className="text-unifi-lime dark:text-unifi-lime hover:underline cursor-pointer">Legal - Documents | Unifimoney</a>
            </p>
            
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-unifi-lime">
              <p className="font-bold text-gray-800 dark:text-gray-100 text-xs">
                Investment Products: Are Not FDIC/NCUA Insured, Are Not Bank Guaranteed, May Lose Value, Are Not Deposits, Are Not Insured by Any Federal Government Agency, Are Not a Condition to Any Banking Service or Activity of Garden. Nothing contained on our Sites constitute investment, legal or tax advice.
              </p>
            </div>
            
            <p className="text-xs">
              The opinions of Unifimoney Tech QOBZ, LLC and Unifimoney RIA QOBZ, LLC expressed on this website represent its good faith views and are provided for limited purposes, are not definitive investment advice, and should not be relied upon as such. Information and opinions provided by third parties have been obtained from sources believed to be reliable, but accuracy and completeness cannot be guaranteed.
            </p>
            
            <p className="text-xs">
              The content of this website is not designed or intended to provide authoritative financial, accounting, investment, legal or other professional advice, which may be reasonably relied on by its readers. If expert assistance in this area is required, the services of a qualified professional should be sought.
            </p>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
          <button 
            onClick={() => navigate('/phone-verification')}
            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotice;