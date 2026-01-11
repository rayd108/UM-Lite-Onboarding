import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddressInformation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Address Information</span>
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">What's your address?</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">Please provide your permanent residential address</p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Street Address</label>
            <input 
              type="text" 
              placeholder="Enter your street address"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-unifi-lime outline-none shadow-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Apartment, suite, etc. (optional)</label>
            <input 
              type="text" 
              placeholder="Apt, suite, unit, building, floor, etc."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-unifi-lime outline-none shadow-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">City</label>
            <input 
              type="text" 
              placeholder="Enter your city"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-unifi-lime outline-none shadow-sm transition-all"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-grow">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">State</label>
              <input 
                type="text" 
                placeholder="Enter your state"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-unifi-lime outline-none shadow-sm transition-all"
              />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">ZIP Code</label>
              <input 
                type="text" 
                placeholder="Enter ZIP code"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-unifi-lime outline-none shadow-sm transition-all"
              />
            </div>
          </div>
        </form>
      </main>

      <footer className="mt-auto pb-4 pt-4">
        <button 
          onClick={() => navigate('/employment')}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default AddressInformation;