import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Chip } from '../components/Chip';
import { PaperPlaneRight, X, ArrowRight } from '@phosphor-icons/react';
import { cn } from '../components/Button';
import { useStrideStore } from '../store/useStrideStore';

export const IntentCapture = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const setIntentText = useStrideStore(state => state.setIntentText);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setIntentText(inputValue.trim());
    }
    window.history.pushState({}, '', '/clarifying-questions');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="flex min-h-screen bg-neutral-50 font-inter">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Pilot Banner */}
        {isBannerVisible && (
          <div className="py-2.5 bg-semantic-warning/10 w-full flex items-center px-4 relative">
             <div className="flex-1 flex items-center justify-center gap-2">
               <p className="text-[12px] text-semantic-warning font-inter uppercase tracking-widest">
                 Pilot Program • Beta v1.0 • Experimental Financial Intelligence
               </p>
             </div>
             <button 
               onClick={() => setIsBannerVisible(false)}
               className="absolute right-4 text-semantic-warning hover:text-semantic-warning/80"
             >
               <X size={16} />
             </button>
          </div>
        )}

        {/* Centered Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 overflow-y-auto">
          <div className="max-w-[800px] w-full flex flex-col my-auto py-12">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-[120px]">
              <h1 className="display-text text-neutral-900">
                What's your financial <br />
                goal, <span className="text-green-500">Shashank?</span>
              </h1>
              <p className="body-large text-neutral-500">
                Tell us what you're hoping to achieve, we'll handle the rest.
              </p>
            </div>

            {/* Input Molecule */}
            <div className="w-full flex flex-col gap-6">
              <div className="w-full bg-neutral-20 rounded-[24px] border border-neutral-200 pl-6 pr-3 py-3 flex items-center gap-4 focus-within:border-green-500 transition-colors shadow-sm">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="e.g. Build a retirement fund for my parents"
                  className="flex-1 bg-transparent border-none outline-none text-[18px] text-neutral-900 placeholder:text-neutral-300 font-inter"
                />
                <button 
                  onClick={handleSubmit}
                  className="w-10 h-10 rounded-[12px] bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                >
                  <PaperPlaneRight size={18} weight="bold" />
                </button>
              </div>

              {/* Suggestions */}
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setInputValue("I have extra money")}
                  className="h-auto py-2 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 body-text transition-colors"
                >
                  I have extra money
                </button>
                <button 
                  onClick={() => setInputValue("Grow my savings")}
                  className="h-auto py-2 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 body-text transition-colors"
                >
                  Grow my savings
                </button>
                <button 
                  onClick={() => setInputValue("Save to buy a home")}
                  className="h-auto py-2 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 body-text transition-colors"
                >
                  Save to buy a home
                </button>
              </div>
            </div>

            {/* Skip Button */}
            <div className="mt-12">
               <button 
                 onClick={() => {
                   window.history.pushState({}, '', '/clarifying-questions');
                   window.dispatchEvent(new PopStateEvent('popstate'));
                 }}
                 className="py-3 px-4 bg-neutral-200 text-neutral-700 body-text rounded-lg hover:bg-neutral-300 transition-colors flex items-center gap-2"
               >
                 Skip, I know what I want <ArrowRight size={20} weight="regular" />
               </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
