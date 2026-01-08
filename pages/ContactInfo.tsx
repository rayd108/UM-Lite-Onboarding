import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100 min-h-screen flex flex-col p-6">
      <header>
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      </header>
      
      <main className="flex-grow pt-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your contact information</h1>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">We'll use this for account verification and communication</p>
        
        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/personal-details'); }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">Email Address</label>
            <div className="relative rounded-md shadow-sm">
              <input 
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white dark:placeholder-gray-500 focus:border-unifi-sage focus:ring-unifi-sage py-3 pl-4 pr-10 sm:text-sm transition-colors outline-none ring-1 ring-transparent focus:ring-2" 
                id="email" 
                name="email" 
                placeholder="user@example.com" 
                type="email" 
                defaultValue="thao@example.com"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="material-icons-outlined text-green-500 dark:text-green-400 text-lg">verified_user</span>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="mobile">Mobile Number</label>
            <div className="relative rounded-md shadow-sm">
              <input 
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white dark:placeholder-gray-500 focus:border-unifi-sage focus:ring-unifi-sage py-3 pl-4 sm:text-sm transition-colors outline-none ring-1 ring-transparent focus:ring-2" 
                id="mobile" 
                name="mobile" 
                placeholder="(877) 700-2703" 
                type="tel" 
                defaultValue="(832) 200-5763"
              />
            </div>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
              We use your phone number for account security and verification purposes only.
            </p>
          </div>
        </form>
      </main>
      
      <footer className="mt-auto pt-6">
        <button 
          onClick={() => navigate('/personal-details')}
          className="w-full bg-unifi-sage text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Continue
        </button>
      </footer>
    </div>
  );
};

export default ContactInfo;