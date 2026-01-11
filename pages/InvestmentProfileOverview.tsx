import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentProfileOverview: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    { number: 1, title: 'Income Information', description: 'Tell us about your annual income and sources', completed: true },
    { number: 2, title: 'Investment Timeline', description: 'Tell us about your withdrawal timeframe', completed: false },
    { number: 3, title: 'Financial Information', description: 'Your net worth information', completed: false },
    { number: 4, title: 'Risk Assessment', description: 'Understand your investment preferences and risk tolerance', completed: false },
    { number: 5, title: 'Investment Strategy', description: 'Finalize your personalized investment approach', completed: false },
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Investment Profile Overview</span>
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">Next let's setup your investment profile</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">Complete these steps to personalize your investments</p>

        <div className="mt-10 space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mr-4 ${step.completed ? 'bg-unifi-lime text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                {step.number}
              </div>
              <div>
                <h3 className={`text-base font-bold leading-tight ${step.completed ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-auto pb-4 pt-4">
        <button 
          onClick={() => navigate('/robo-advisor-automation')}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default InvestmentProfileOverview;