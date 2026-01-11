import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentJourney: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['robo']);

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative">
      {/* Page Reference */}
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Investment Journey</span>
      </div>

      <main className="flex-grow p-6">
        <header className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="mb-6 w-10 h-10 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Where do you want to start your investment journey?</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Choose one or both options to fit your goals</p>
        </header>
        
        <div className="space-y-4">
          {/* Option 1 */}
          <div 
            onClick={() => toggleSelection('robo')}
            className={`cursor-pointer flex items-center p-4 border-2 rounded-xl transition-all duration-200 ${selected.includes('robo') ? 'border-unifi-bright bg-lime-50 dark:bg-lime-900/20' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}
          >
            <div className={`mr-4 p-3 rounded-xl ${selected.includes('robo') ? 'bg-lime-100 dark:bg-lime-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <span className={`material-symbols-outlined ${selected.includes('robo') ? 'text-unifi-bright' : 'text-gray-400'}`}>attach_money</span>
            </div>
            <div className="flex-grow">
              <h2 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Robo-Advisor</h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Automatic low-cost investing with a personalized portfolio suited to your needs</p>
            </div>
            <div className={`ml-4 w-6 h-6 flex items-center justify-center rounded transition-all ${selected.includes('robo') ? 'bg-unifi-bright text-white' : 'bg-gray-200 dark:bg-gray-700 text-transparent'}`}>
              <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
          </div>

          {/* Option 2 */}
          <div 
            onClick={() => toggleSelection('self')}
            className={`cursor-pointer flex items-center p-4 border-2 rounded-xl transition-all duration-200 ${selected.includes('self') ? 'border-unifi-bright bg-lime-50 dark:bg-lime-900/20' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}
          >
            <div className={`mr-4 p-3 rounded-xl ${selected.includes('self') ? 'bg-lime-100 dark:bg-lime-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <span className={`material-symbols-outlined ${selected.includes('self') ? 'text-unifi-bright' : 'text-gray-400'}`}>bar_chart</span>
            </div>
            <div className="flex-grow">
              <h2 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Self-selected investing & ETFs</h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Build a diversified portfolio</p>
            </div>
            <div className={`ml-4 w-6 h-6 flex items-center justify-center rounded transition-all ${selected.includes('self') ? 'bg-unifi-bright text-white' : 'bg-gray-200 dark:bg-gray-700 text-transparent'}`}>
              <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
          </div>
          
          {/* Option 3 (Disabled) */}
          <div className="flex items-center p-4 border border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800/50 opacity-60 cursor-not-allowed">
            <div className="mr-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">receipt_long</span>
            </div>
            <div className="flex-grow">
              <h2 className="font-semibold text-gray-500 dark:text-gray-400 text-sm sm:text-base">IRA & HSA</h2>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-1">Tax-advantaged accounts</p>
            </div>
            <div className="ml-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-full">
              Coming Soon
            </div>
          </div>
        </div>
      </main>
      
      <footer className="p-6 pt-0 bg-white dark:bg-gray-900 mt-auto">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">You can select multiple options to explore</p>
        <button 
          onClick={() => navigate('/account-setup')}
          disabled={selected.length === 0}
          className={`w-full py-4 px-6 rounded-xl font-bold text-base shadow-md transition-all duration-200 active:scale-[0.98] ${selected.length > 0 ? 'bg-unifi-bright text-white hover:bg-opacity-90' : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed shadow-none'}`}
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default InvestmentJourney;