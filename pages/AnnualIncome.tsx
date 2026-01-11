
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnnualIncome: React.FC = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState('');

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-8">
      <header>
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      </header>

      <main className="flex-grow mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">What's your annual income?</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
          This information helps us provide appropriate financial recommendations
        </p>

        <div className="mt-10">
          <label className="block text-sm font-bold text-gray-900 dark:text-gray-100 mb-3" htmlFor="income">
            Gross Annual Income
          </label>
          <div className="relative">
            <select 
              id="income"
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-unifi-lime rounded-xl focus:ring-0 outline-none text-gray-900 dark:text-white appearance-none transition-all shadow-sm"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
            >
              <option value="">Select income range</option>
              <option value="under25k">Less than $25k</option>
              <option value="25-50k">$25k-50k</option>
              <option value="50-100k">$50k-100k</option>
              <option value="100-250k">$100k-250k</option>
              <option value="250-500k">$250k-500k</option>
              <option value="500kplus">$500k or more</option>
            </select>
          </div>
        </div>
      </main>

      <footer className="mt-auto pb-4">
        <button 
          onClick={() => selection && navigate('/withdrawal-timeframe')}
          disabled={!selection}
          className={`w-full py-4 px-6 rounded-2xl font-bold text-base text-white shadow-lg transition-all duration-200 active:scale-[0.98] ${selection ? 'bg-unifi-lime' : 'bg-unifi-sage opacity-50 cursor-not-allowed shadow-none'}`}
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default AnnualIncome;
