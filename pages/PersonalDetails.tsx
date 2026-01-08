import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-900 font-display min-h-screen flex flex-col">
      <main className="flex-grow p-6">
        <header className="mb-8">
            <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
            <span className="material-icons-outlined">chevron_left</span>
            </button>
        </header>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Information about yourself</h1>
          <p className="text-gray-600 dark:text-gray-400">We need a few details to set up your account</p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/investment-journey'); }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="first-name">First name</label>
            <input 
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-unifi-light focus:ring-unifi-light py-3 px-4 outline-none ring-1 ring-transparent focus:ring-2 transition-all shadow-sm" 
              id="first-name" 
              name="first-name" 
              placeholder="First name" 
              type="text" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="last-name">Last name</label>
            <input 
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-unifi-light focus:ring-unifi-light py-3 px-4 outline-none ring-1 ring-transparent focus:ring-2 transition-all shadow-sm" 
              id="last-name" 
              name="last-name" 
              placeholder="Last name" 
              type="text" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="date-of-birth">Date of birth</label>
            <input 
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-unifi-light focus:ring-unifi-light py-3 px-4 outline-none ring-1 ring-transparent focus:ring-2 transition-all shadow-sm" 
              id="date-of-birth" 
              name="date-of-birth" 
              placeholder="MM/DD/YYYY" 
              type="text" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="ssn">Social security number</label>
            <div className="relative">
              <input 
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-unifi-light focus:ring-unifi-light py-3 pl-4 pr-10 outline-none ring-1 ring-transparent focus:ring-2 transition-all shadow-sm" 
                id="ssn" 
                name="ssn" 
                placeholder="***-**-****" 
                type="password" 
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">
                  shield
                </span>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Required for identity verification and tax reporting.</p>
          </div>
        </form>
      </main>
      
      <footer className="p-6 text-center mt-auto">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 px-4">Your information is encrypted and secure. We adhere to strict privacy policies.</p>
        <button 
          onClick={() => navigate('/investment-journey')}
          className="w-full bg-unifi-light text-gray-900 font-bold py-4 px-4 rounded-xl hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default PersonalDetails;