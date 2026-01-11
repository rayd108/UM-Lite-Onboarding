
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RiskToleranceResult: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-6 overflow-hidden">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Risk Tolerance Result</span>
      </div>

      <main className="flex-grow flex flex-col items-center pt-2 overflow-y-auto no-scrollbar pb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Your risk tolerance</h1>
        
        <div className="w-16 h-16 rounded-full bg-unifi-lime flex items-center justify-center mb-6 shadow-sm">
          <span className="material-icons-outlined text-white text-3xl">pie_chart</span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-6 leading-tight">
          Based on your answers, here is the recommended portfolio allocation
        </h2>

        <div className="w-full space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <p className="font-medium text-center">Moderate Allocation (Balanced Risk Tolerance)</p>
          
          <div className="space-y-1">
            <p><span className="font-bold">Objective:</span> Balance between growth and capital preservation.</p>
          </div>

          <div className="space-y-2">
            <p className="font-bold">Typical Allocation:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <span className="text-blue-600 dark:text-blue-400 font-bold">Stocks: 70-80%</span> (blend of large-cap, mid-cap, and international stocks)
              </li>
              <li>
                <span className="font-bold text-teal-700 dark:text-teal-400">Fixed Income</span>
                <ul className="list-disc pl-5 mt-1 text-gray-600 dark:text-gray-400">
                  <li>Bonds + Cash/Cash Equivalents: 20-30% (e.g., government and high-quality corporate bonds, money market funds, CDs)</li>
                </ul>
              </li>
            </ul>
          </div>

          <p className="text-[10px] text-gray-500 leading-tight">
            Disclosure - This portfolio allocation is for informational purposes only and not personalized advice. Consider your financial situation, goals, and risk tolerance. A deviation from the allocation may suit personal or market changes.
          </p>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-4 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="font-bold text-base mb-4">Moderate Target Allocation</h3>
            
            <div className="flex flex-col items-center mb-4">
              {/* CSS Pie Chart */}
              <div 
                className="w-32 h-32 rounded-full relative"
                style={{ 
                  background: 'conic-gradient(#1f618d 0% 30%, #5dade2 30% 100%)' 
                }}
              >
                <div className="absolute top-8 right-6 text-[10px] text-white font-bold leading-none text-right">Fixed<br/>Income</div>
                <div className="absolute bottom-8 left-6 text-[10px] text-white font-bold leading-none">Stocks</div>
              </div>
              <p className="mt-4 text-xs font-medium">Stocks: 70% Fixed Income: 30%</p>
            </div>

            <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Robo Advisor</p>
                <p>Your robo advisor will automatically invest in a bucket of stocks and ETFs matching this target allocation.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Self-elected stocks</p>
                <p>We recommend this target allocation for your self-elected stock account. You can view your allocation on the My Stocks page.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto pt-4 space-y-3 flex-shrink-0 bg-white dark:bg-gray-900 z-10">
        <button 
          onClick={() => navigate('/robo-initial-setup')}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Next
        </button>
        <button 
          onClick={() => navigate(-1)}
          className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Change Investment Profile
        </button>
      </footer>
    </div>
  );
};

export default RiskToleranceResult;
