
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TradingExperience: React.FC = () => {
  const navigate = useNavigate();
  const [isProfessional, setIsProfessional] = useState(true); // Default to "No" -> Professional based on screenshot logic, though usually "No" means Non-professional. Following screenshot visual where "No" is selected and result is "Professional".
  // Correction: The screenshot shows:
  // Option 1: Yes, I'm using it for personal use
  // Option 2: No, I'm using it for professional use... (Selected)
  // Box says: subscriber status is: Professional.
  // So selecting the second option (No) makes you Professional.

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 font-display relative p-4">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Trading Experience</span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl h-full flex flex-col p-6 shadow-xl">
        <header>
            <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
            <span className="material-icons-outlined">chevron_left</span>
            </button>
        </header>

        <main className="flex-grow mt-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">Trading experience</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            In order to facilitate a decision as to whether you qualify as a 'non-professional' subscriber, please answer the following question.
            </p>

            <p className="mt-8 font-medium text-gray-900 dark:text-white text-sm">
            Are you opening this account for your personal use, or are you opening it for your professional use as a trader/financial institution?
            </p>

            <div className="mt-6 space-y-6">
            <label className="flex items-start cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                <input 
                    type="radio" 
                    name="use-type"
                    className="peer sr-only"
                    checked={!isProfessional}
                    onChange={() => setIsProfessional(false)}
                />
                <div className="w-5 h-5 rounded-full border border-gray-300 peer-checked:border-unifi-lime peer-checked:border-2 relative flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-unifi-lime opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                </div>
                <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Yes, I'm using it for personal use</span>
            </label>

            <label className="flex items-start cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                <input 
                    type="radio" 
                    name="use-type"
                    className="peer sr-only"
                    checked={isProfessional}
                    onChange={() => setIsProfessional(true)}
                />
                <div className="w-5 h-5 rounded-full border border-gray-300 peer-checked:border-unifi-lime peer-checked:border-2 relative flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-unifi-lime opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                </div>
                <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">No, I'm using it for professional use as a trader/financial institution</span>
            </label>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm text-gray-800 dark:text-gray-200">
                Based on your answers, your subscriber status is: <br/>
                <span className="font-bold text-unifi-lime">{isProfessional ? 'Professional' : 'Non-Professional'}</span>
            </p>
            </div>
        </main>

        <footer className="mt-auto pt-4">
            <button 
            onClick={() => navigate('/account-processing')}
            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
            >
            Continue
            </button>
        </footer>
      </div>
    </div>
  );
};

export default TradingExperience;
