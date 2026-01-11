
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoboAutomatedSetup: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('5');
  const [confirmed, setConfirmed] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Robo Automated Setup</span>
      </div>

      <header>
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      </header>

      <main className="flex-grow mt-6 overflow-y-auto no-scrollbar">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">Setup your Robo-Advisor automated investments</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          Configure your automated investment amounts and we will do all the hard work. You can always change these at a later time.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Monthly investment amount (min. $5)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-unifi-lime outline-none shadow-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Select monthly deposit date</label>
            <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-unifi-lime outline-none text-gray-900 dark:text-white appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}>
              <option value="5th">5th of the month</option>
              <option value="15th">15th of the month</option>
              <option value="25th">25th of the month</option>
            </select>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-lg p-4">
            <p className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-3">Please confirm your investment plan</p>
            <div className="flex items-start">
              <div className="relative flex items-center mt-0.5">
                <input 
                  type="checkbox" 
                  checked={confirmed} 
                  onChange={() => setConfirmed(!confirmed)}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-unifi-lime checked:border-unifi-lime transition-all"
                />
                <span className="material-icons-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none left-0.5">check</span>
              </div>
              <p className="ml-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                A <span className="text-green-600 font-bold">${amount}</span> monthly investment will be withdrawn from your <span className="text-purple-600 dark:text-purple-400 font-bold">savings account ending in 5483</span> on the <span className="text-blue-600 font-bold">5th</span> of each month. The first withdrawal will be on <span className="text-blue-600 font-bold">06/05/2024</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto pb-4 pt-6 space-y-4">
        <div className="text-center">
          <button 
            onClick={() => navigate('/trading-experience')}
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            Skip Monthly Investment Setup
          </button>
        </div>
        <button 
          onClick={() => confirmed && navigate('/trading-experience')}
          disabled={!confirmed}
          className={`w-full py-4 px-6 rounded-xl font-bold text-base text-white shadow-md transition-all duration-200 active:scale-[0.98] ${confirmed ? 'bg-unifi-lime hover:bg-opacity-90' : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed shadow-none'}`}
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default RoboAutomatedSetup;
