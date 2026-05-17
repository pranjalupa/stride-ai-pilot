import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { PaperPlaneRight, List } from '@phosphor-icons/react';
import { useStrideStore, BufferOption, HorizonOption } from '../store/useStrideStore';
import { cn } from '../components/Button';

export const ClarifyingQuestions = () => {
  const { amount, intentText, buffer, setBuffer, horizon, setHorizon } = useStrideStore();
  const [q1Answered, setQ1Answered] = useState(buffer !== null);
  const [q2Answered, setQ2Answered] = useState(horizon !== null);
  const [otherBuffer, setOtherBuffer] = useState('');
  const [otherHorizon, setOtherHorizon] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleQ1Select = (val: BufferOption) => {
    setBuffer(val);
    setQ1Answered(true);
  };

  const handleQ1SubmitOther = () => {
    if (otherBuffer.trim()) {
      setBuffer("other");
      setQ1Answered(true);
    }
  };

  const navigateToRecommendation = () => {
    setTimeout(() => {
      window.history.pushState(null, '', '/recommendation');
      window.dispatchEvent(new Event('popstate'));
    }, 400); // slight delay to show selection
  };

  const handleQ2Select = (val: HorizonOption) => {
    setHorizon(val);
    setQ2Answered(true);
    navigateToRecommendation();
  };

  const handleQ2SubmitOther = () => {
    if (otherHorizon.trim()) {
      setHorizon("other");
      setQ2Answered(true);
      navigateToRecommendation();
    }
  };

  const getQ1Label = () => {
    if (buffer === 'none') return 'None';
    if (buffer === '0-1L') return 'Around 0–1L';
    if (buffer === '1-10L') return 'Around 1–10L';
    if (buffer === '10L+') return 'More than 10L';
    if (buffer === 'other') return otherBuffer;
    return '';
  };
  
  const getQ2Label = () => {
    if (horizon === '3-6m') return '3–6 months';
    if (horizon === '6m-3y') return '6 months–3 years';
    if (horizon === '3-5y') return '3–5 years';
    if (horizon === '5y+') return 'More than 5 years';
    if (horizon === 'other') return otherHorizon;
    return '';
  };

  const q1Options = [
    { id: 'none', title: 'None', desc: 'This is your only financial cushion right now. We\'ll prioritise keeping it safe and accessible.' },
    { id: '0-1L', title: 'Around 0–1L', desc: 'You have a small buffer. We\'ll balance safety with some room to grow.' },
    { id: '1-10L', title: 'Around 1–10L', desc: 'You have a reasonable safety net. We can explore moderate growth options.' },
    { id: '10L+', title: 'More than 10L', desc: 'You\'re well covered. We can afford to be more growth-focused with this money.' }
  ] as const;

  const q2Options = [
    { id: '3-6m', title: '3–6 months', desc: 'Short window. We\'ll focus on stable, liquid instruments with predictable returns.' },
    { id: '6m-3y', title: '6 months–3 years', desc: 'Medium term. A balanced mix of safety and steady growth.' },
    { id: '3-5y', title: '3–5 years', desc: 'Good horizon. Room for growth-oriented instruments to work in your favour.' },
    { id: '5y+', title: 'More than 5 years', desc: 'Long term. We can maximize compounding and growth potential.' }
  ] as const;

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-50 font-inter">
      <Sidebar mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="flex-1 flex flex-col relative items-center h-full min-h-0">
        
        {/* Sleek Mobile Header */}
        <header className="md:hidden w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-[#FAFAF8] shrink-0 z-30">
          <h2 className="font-switzer font-bold text-[20px] text-green-600 tracking-[-0.02em]">Stride</h2>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="text-neutral-500 hover:text-green-600 hover:bg-neutral-100 p-2 rounded-lg transition-colors"
            aria-label="Open navigation menu"
          >
            <List size={22} weight="bold" />
          </button>
        </header>
        
        {/* Progression Blur Top Mask */}
        <div className="absolute top-0 w-full h-[80px] bg-gradient-to-b from-neutral-50 via-neutral-50/80 to-transparent z-10 pointer-events-none" />

        <div className="flex-1 flex flex-col w-full max-w-[800px] h-full min-h-0">
          
          {/* TOP: Scrollable Chat Bubbles Area */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 pb-[20px] pt-[80px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col-reverse">
            <div className="flex flex-col-reverse gap-[20px] w-full shrink-0">
              
              {/* Answered Q2 (Newest) */}
              {q2Answered && (
                <div className="flex flex-col gap-[20px] animate-bubble-up">
                  <h2 className="body-large text-neutral-900">
                    How long are you planning to invest this money?
                  </h2>
                  <div className="flex justify-end w-full">
                    <div className="bg-neutral-100 rounded-xl rounded-br-sm px-5 py-3 shadow-sm border border-transparent">
                      <p className="body-text text-neutral-900">{getQ2Label()}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Answered Q1 (Middle) */}
              {q1Answered && (
                <div className="flex flex-col gap-[20px] animate-bubble-up">
                  <h2 className="body-large text-neutral-900">
                    Do you have any savings outside this ₹{amount}?
                  </h2>
                  <div className="flex justify-end w-full">
                    <div className="bg-neutral-100 rounded-xl rounded-br-sm px-5 py-3 shadow-sm border border-transparent">
                      <p className="body-text text-neutral-900">{getQ1Label()}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Intent Capture Initial Bubble (Oldest) */}
              <div className="flex justify-end w-full animate-bubble-up">
                <div className="bg-neutral-100 rounded-xl rounded-br-sm px-5 py-3 shadow-sm border border-transparent">
                  <p className="body-text text-neutral-900">
                    {intentText}
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          {/* BOTTOM: Fixed Active Question Area */}
          <div className="w-full shrink-0 px-6 md:px-12 pb-[80px]">

            {/* Active Q1 */}
            {!q1Answered && (
              <div className="flex flex-col gap-[28px] animate-fade-in-up">
                <div className="flex flex-col gap-2">
                  <h2 className="heading-2 text-neutral-900">
                    Do you have any savings outside this ₹{amount}?
                  </h2>
                  <p className="body-text text-neutral-500">
                    I need this to find out the real risk capacity you have.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <p className="body-text text-neutral-400 text-[14px]">Choose or type an option</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q1Options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleQ1Select(opt.id as BufferOption)}
                        className={cn(
                          "p-6 rounded-xl text-left transition-all duration-300 ease-in-out border flex flex-col gap-1",
                          buffer === opt.id 
                            ? "bg-green-20 border-green-500" 
                            : "bg-neutral-100 border-transparent hover:border-neutral-300 hover:bg-neutral-200"
                        )}
                      >
                        <span className="body-large text-neutral-900">{opt.title}</span>
                        <span className="body-text text-neutral-500">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={cn(
                  "w-full bg-neutral-20 rounded-[24px] border pl-6 pr-3 py-3 flex items-center gap-4 transition-colors shadow-sm",
                  buffer === 'other' ? "border-green-500 ring-1 ring-green-500" : "border-neutral-200 focus-within:border-green-500"
                )}>
                  <input 
                    type="text" 
                    placeholder="Other (please specify)"
                    value={otherBuffer}
                    onChange={(e) => setOtherBuffer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleQ1SubmitOther()}
                    className="flex-1 bg-transparent border-none outline-none text-[18px] text-neutral-900 placeholder:text-neutral-300 font-inter"
                  />
                  <button 
                    onClick={handleQ1SubmitOther}
                    className="w-10 h-10 rounded-[12px] bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors shrink-0"
                  >
                    <PaperPlaneRight size={18} weight="bold" />
                  </button>
                </div>
              </div>
            )}

            {/* Active Q2 */}
            {q1Answered && !q2Answered && (
              <div className="flex flex-col gap-[28px] animate-fade-in-up">
                <div className="flex flex-col gap-2">
                  <h2 className="heading-2 text-neutral-900">
                    How long are you planning to invest this money?
                  </h2>
                  <p className="body-text text-neutral-500">
                    I need to know this so I can recommend the best instrument, specific to you.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <p className="body-text text-neutral-400 text-[14px]">Choose an option</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q2Options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleQ2Select(opt.id as HorizonOption)}
                        className={cn(
                          "p-6 rounded-xl text-left transition-all duration-300 ease-in-out border flex flex-col gap-1",
                          horizon === opt.id 
                            ? "bg-green-20 border-green-500" 
                            : "bg-neutral-100 border-transparent hover:border-neutral-300 hover:bg-neutral-200"
                        )}
                      >
                        <span className="body-large text-neutral-900">{opt.title}</span>
                        <span className="body-text text-neutral-500">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={cn(
                  "w-full bg-neutral-20 rounded-[24px] border pl-6 pr-3 py-3 flex items-center gap-4 transition-colors shadow-sm",
                  horizon === 'other' ? "border-green-500 ring-1 ring-green-500" : "border-neutral-200 focus-within:border-green-500"
                )}>
                  <input 
                    type="text" 
                    placeholder="Other (please specify)"
                    value={otherHorizon}
                    onChange={(e) => setOtherHorizon(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleQ2SubmitOther()}
                    className="flex-1 bg-transparent border-none outline-none text-[18px] text-neutral-900 placeholder:text-neutral-300 font-inter"
                  />
                  <button 
                    onClick={handleQ2SubmitOther}
                    className="w-10 h-10 rounded-[12px] bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors shrink-0"
                  >
                    <PaperPlaneRight size={18} weight="bold" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Post Q2 Chat Input */}
            {q2Answered && (
              <div className="flex flex-col gap-[28px] animate-fade-in-up">
                <div className="w-full bg-neutral-20 rounded-[24px] border border-neutral-200 pl-6 pr-3 py-3 flex items-center gap-4 transition-colors shadow-sm focus-within:border-green-500">
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent border-none outline-none text-[18px] text-neutral-900 placeholder:text-neutral-300 font-inter"
                  />
                  <button className="w-10 h-10 rounded-[12px] bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors shrink-0">
                    <PaperPlaneRight size={18} weight="bold" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
