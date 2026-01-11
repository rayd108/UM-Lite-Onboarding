
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountProcessing: React.FC = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Simulate processing time
    const timer = setTimeout(() => {
      setIsSuccess(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isSuccess) {
    return (
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900 font-display relative p-8 items-center justify-center">
        <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
          <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Account Processing</span>
        </div>

        <div className="w-20 h-20 rounded-full border-4 border-unifi-lime border-t-transparent animate-spin mb-10"></div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Your account is being processed.
        </h1>

        <div className="w-full max-w-xs h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-unifi-lime w-2/3 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 font-display relative p-4">
      <div className="absolute top-1 left-0 right-0 flex justify-center pointer-events-none z-[100]">
        <span className="text-[8px] font-mono text-gray-400/60 uppercase tracking-widest">Screen: Success</span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-[2rem] h-full flex flex-col relative border-[3px] border-gray-400/30 dark:border-gray-600/30 shadow-2xl overflow-hidden">
        <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            
            <div className="absolute top-6 left-6">
                <button 
                onClick={() => navigate('/')} // Back to dashboard potentially? Or just disabled.
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                <span className="material-icons-outlined">chevron_left</span>
                </button>
            </div>

            <div className="w-24 h-24 rounded-full bg-lime-50 dark:bg-lime-900/30 flex items-center justify-center mb-8">
            <span className="material-icons-outlined text-unifi-lime text-5xl font-bold">check</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Congratulations!</h1>
            
            <p className="text-gray-900 dark:text-white font-medium text-base mb-6">
            Your application has been approved.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">
            You now have access to your Unifimoney account.
            </p>

            <div className="bg-lime-50 dark:bg-lime-900/20 rounded-xl p-6 text-left w-full mb-auto">
            <div className="flex items-start">
                <span className="material-icons-outlined text-green-600 dark:text-green-400 mr-3 mt-0.5 text-lg">info</span>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                We've also sent you a confirmation email with details about your new account. Check your inbox for more information.
                </p>
            </div>
            </div>

            <button 
            onClick={() => navigate('/')}
            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-unifi-lime shadow-md hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200 mt-6"
            >
            Go to Dashboard
            </button>
        </div>
      </div>
    </div>
  );
};

export default AccountProcessing;
