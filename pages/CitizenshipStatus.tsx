import React from 'react';
import { useNavigate } from 'react-router-dom';

const CitizenshipStatus: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Citizenship Status</span>
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">What's your citizenship status?</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">This information is required for tax and regulatory purposes</p>

        <div className="mt-10">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="citizenship">
            Citizenship
          </label>
          <select 
            id="citizenship"
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-unifi-lime outline-none text-gray-900 dark:text-white appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='Length 19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
          >
            <option value="">Select your citizenship</option>
            <option value="us">United States Citizen</option>
            <option value="resident">Permanent Resident</option>
            <option value="visa">Visa Holder</option>
          </select>
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Additional information about your citizenship status may be required depending on your selection.
        </p>
      </main>

      <footer className="mt-auto pb-4">
        <button 
          onClick={() => navigate('/address')}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default CitizenshipStatus;