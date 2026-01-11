import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSetup: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    { number: 1, title: 'Terms & Conditions', description: 'Review and accept', completed: true },
    { number: 2, title: 'Identity Verification', description: 'USA Patriot Act requirements', completed: false },
    { number: 3, title: 'Citizenship Status', description: 'Your citizenship information', completed: false },
    { number: 4, title: 'Address Information', description: 'Your permanent residence', completed: false },
    { number: 5, title: 'Employment Information', description: 'Your occupation and employer', completed: false },
    { number: 6, title: 'Regulatory Questions', description: 'FINRA and compliance information', completed: false },
  ];

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      {/* Page Reference */}
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Account Setup Overview</span>
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">Let's setup your account</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">Complete these steps to get started</p>

        <div className="mt-10 space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mr-4 ${step.completed ? 'bg-unifi-lime text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                {step.number}
              </div>
              <div>
                <h3 className={`text-base font-bold leading-tight ${step.completed ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-auto space-y-4">
        <p className="text-center text-xs text-gray-400 dark:text-gray-500">
          This process takes approximately 5 minutes
        </p>
        <button 
          onClick={() => navigate('/citizenship')}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Begin Account Setup
        </button>
      </footer>
    </div>
  );
};

export default AccountSetup;