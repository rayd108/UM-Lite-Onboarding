import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegulatoryQuestions: React.FC = () => {
  const navigate = useNavigate();
  const [hasStatement, setHasStatement] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Regulatory Questions</span>
      </div>

      <header>
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      </header>

      <main className="flex-grow mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">Do any of the following apply?</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">Required for regulatory compliance</p>

        <div className="mt-10">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-6">Are you, your spouse or any other immediate family member (parents, in-laws, siblings or dependents):</h2>
          
          <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <li className="pb-4 border-b border-gray-100 dark:border-gray-800">
              A control person (e.g. a major shareholder of a publicly traded company) ?
            </li>
            <li className="pb-4 border-b border-gray-100 dark:border-gray-800">
              A government official or politician ?
            </li>
            <li className="pb-4 border-b border-gray-100 dark:border-gray-800">
              Affiliated with an exchange or FINRA ?
            </li>
            <li className="pb-4 border-b border-gray-100 dark:border-gray-800">
              Would you like to include a trusted contact?
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-6">Do any of the above statements apply to you?</p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => setHasStatement(true)}
              className={`w-28 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-200 ${hasStatement === true ? 'bg-white border-unifi-lime text-unifi-lime shadow-sm' : 'bg-white border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500'}`}
            >
              Yes
            </button>
            <button 
              onClick={() => setHasStatement(false)}
              className={`w-28 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-200 ${hasStatement === false ? 'bg-unifi-lime border-unifi-lime text-white shadow-sm' : 'bg-white border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500'}`}
            >
              No
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-auto pb-4">
        <button 
          onClick={() => navigate('/legal-agreements')}
          disabled={hasStatement === null}
          className={`w-full py-4 px-6 rounded-xl font-bold text-base text-white shadow-md transition-all duration-200 active:scale-[0.98] ${hasStatement !== null ? 'bg-unifi-lime hover:bg-opacity-90' : 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed opacity-60 shadow-none'}`}
        >
          Submit and Continue
        </button>
      </footer>
    </div>
  );
};

export default RegulatoryQuestions;