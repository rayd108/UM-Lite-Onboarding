import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhoneVerification: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col h-screen p-6 font-display bg-white dark:bg-gray-900">
      <main className="flex-grow flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Welcome to Unifimoney</h1>
          <div className="mt-3 h-1.5 w-24 bg-unifi-green rounded-full"></div>
          
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Your current phone number <span className="font-bold text-gray-900 dark:text-white">(832) 200-5763</span> will be used to onboard with us. Do you want to update this phone number?
          </p>
          
          <div className="mt-8 flex items-center space-x-2">
            <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-500 dark:text-gray-400 font-medium text-base shadow-sm">
              +1
            </div>
            <div className="relative flex-grow">
              <input 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-unifi-green focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 text-base shadow-sm"
                id="phone-number" 
                name="phone-number" 
                placeholder="(123) 456-7890" 
                type="tel" 
              />
            </div>
          </div>
          
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
            This phone number will be used to register with Unifimoney and receive OTP when trading in Unifimoney platform.
          </p>
        </div>
      </main>
      
      <footer className="w-full max-w-md mx-auto pb-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/contact-info')}
            className="flex-grow w-1/2 bg-unifi-green text-white font-bold py-3.5 px-4 rounded-xl text-base shadow-md hover:bg-opacity-90 active:transform active:scale-95 transition-all"
          >
            Update
          </button>
          <button 
            onClick={() => navigate('/contact-info')}
            className="w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-3.5 px-8 rounded-xl text-base shadow-md hover:opacity-90 active:transform active:scale-95 transition-all"
          >
            No
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PhoneVerification;