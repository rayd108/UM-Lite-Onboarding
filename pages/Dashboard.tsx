import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-display pb-20">
      {/* Header Area */}
      <div 
        className="bg-gray-800 text-white relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(39, 56, 50, 0.9), rgba(39, 56, 50, 1)), url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)`
        }}
      >
        <header className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="relative cursor-pointer">
              <span className="material-icons-outlined text-3xl">menu</span>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500"></span>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold">
              TH
            </div>
          </div>
          <h1 className="text-3xl font-bold">Hi, Thao_Hong</h1>
        </header>

        {/* Accounts Card */}
        <div className="px-6 pb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Accounts</h2>
            <span className="material-icons-outlined cursor-pointer">more_horiz</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Greens 0001</p>
                <p className="text-sm opacity-80">x0605</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">$590,941.32</p>
                <p className="text-sm opacity-80">Available</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <button className="material-icons-outlined text-sm text-white/70">chevron_left</button>
              <div className="flex space-x-1.5 items-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              </div>
              <button className="material-icons-outlined text-sm text-white/70">chevron_right</button>
            </div>
            <a className="text-sm font-semibold hover:underline cursor-pointer">View all</a>
          </div>
        </div>
      </div>

      <main className="p-4 space-y-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 text-center">
          <button className="bg-garden-action text-gray-800 rounded-xl p-2 flex flex-col items-center justify-center space-y-1 hover:bg-opacity-90 transition">
            <span className="material-icons-outlined text-2xl">swap_horiz</span>
            <span className="text-[10px] font-medium">Transfer</span>
          </button>
          <button className="bg-garden-action text-gray-800 rounded-xl p-2 flex flex-col items-center justify-center space-y-1 hover:bg-opacity-90 transition">
            <span className="material-icons-outlined text-2xl">chat_bubble_outline</span>
            <span className="text-[10px] font-medium">Message</span>
          </button>
          <button className="bg-garden-action text-gray-800 rounded-xl p-2 flex flex-col items-center justify-center space-y-1 hover:bg-opacity-90 transition">
            <span className="material-icons-outlined text-2xl">paid</span>
            <span className="text-[10px] font-medium leading-tight">Send money with Zelle®</span>
          </button>
          <button className="bg-garden-action text-gray-800 rounded-xl p-2 flex flex-col items-center justify-center space-y-1 hover:bg-opacity-90 transition">
            <span className="material-icons-outlined text-2xl">description</span>
            <span className="text-[10px] font-medium">e-statements</span>
          </button>
        </div>

        {/* Investment Banner */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 dark:text-white">Investments with Unifimoney</h3>
            <span className="material-icons-outlined text-gray-400 cursor-pointer">more_horiz</span>
          </div>
          
          <div className="relative bg-gradient-to-br from-cyan-400 to-blue-600 text-white p-6 overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <p className="text-sm font-medium tracking-wide opacity-90">unifimoney</p>
              <h4 className="text-3xl font-bold mt-2 leading-tight">Time to Fund Your Future!</h4>
              <p className="mt-3 text-sm opacity-90 leading-relaxed max-w-[80%]">
                Add funds to your Unifimoney account to start investing in Stocks, ETFs, Crypto, Metals and more.
              </p>
              <button className="bg-cyan-300/80 hover:bg-cyan-300 text-cyan-900 font-bold text-sm py-2 px-6 rounded-full mt-5 transition-colors">
                COMPLETE
              </button>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2 opacity-80">
               {/* Floating icons */}
              <div className="w-10 h-10 bg-cyan-400/50 rounded-full flex items-center justify-center text-xl backdrop-blur-sm">฿</div>
              <div className="w-10 h-10 bg-cyan-400/50 rounded-full flex items-center justify-center backdrop-blur-sm"><span className="material-icons-outlined">show_chart</span></div>
            </div>
          </div>
          
          <div className="p-4 bg-white dark:bg-gray-800">
            <p className="text-[10px] text-gray-400 leading-normal">
              Not FDIC/NCUA insured. May lose value. Not guaranteed by your bank or credit union. Investment services via SEC-registered Unifimoney RIA. Banking by First Fidelity Bank. SIPC protection on brokerage accounts. Crypto by Gemini. Disclosures: <a className="underline cursor-pointer">unifimoney.com/legal</a>. Review our <a className="underline cursor-pointer">Form CRS</a> and <a className="underline cursor-pointer">ADV filings</a> for more information.
            </p>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700 p-4">
            <button 
              onClick={() => navigate('/notice')}
              className="w-full text-garden-primary font-bold py-3 rounded-full border border-garden-primary hover:bg-garden-primary hover:text-white transition-colors uppercase tracking-wide text-sm"
            >
              Go to Unifimoney
            </button>
          </div>
        </div>

        {/* Garden Bottom Nav Area */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
          <p className="text-3xl font-thin tracking-[0.2em] text-gray-800 dark:text-white">GARDEN</p>
          <div className="flex justify-around mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:opacity-80">
              <span className="material-icons-outlined text-garden-primary">call</span>
              <span className="text-xs font-semibold text-garden-primary">Call</span>
            </div>
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:opacity-80">
              <span className="material-icons-outlined text-garden-primary">chat_bubble_outline</span>
              <span className="text-xs font-semibold text-garden-primary">Message</span>
            </div>
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:opacity-80">
              <span className="material-icons-outlined text-garden-primary">info</span>
              <span className="text-xs font-semibold text-garden-primary">Info</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;