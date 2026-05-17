import React, { useState } from 'react';
import { cn } from './Button';
import { Gear, Question, List } from '@phosphor-icons/react';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div 
      className={cn(
        "sticky top-0 h-screen bg-[#FAFAF8] border-r border-neutral-200 flex flex-col justify-between transition-all duration-300 shrink-0 z-50",
        expanded ? "w-[240px] px-5 py-8 hidden md:flex" : "w-[72px] px-4 py-8 flex items-center"
      )}
    >
      <div className="flex flex-col gap-8 w-full">
        {/* Header */}
        <div className={cn("flex items-center", expanded ? "justify-between" : "justify-center")}>
          {expanded ? (
            <h2 className="font-switzer font-bold text-[24px] text-green-600 tracking-[-0.02em]">Stride</h2>
          ) : (
            <h2 className="font-switzer font-bold text-[24px] text-green-600 tracking-[-0.02em]">S</h2>
          )}
          {expanded && (
            <button onClick={() => setExpanded(false)} className="text-neutral-400 hover:text-green-500">
              <List className="w-5 h-5" weight="bold" />
            </button>
          )}
          {!expanded && (
             <button onClick={() => setExpanded(true)} className="absolute w-full h-12 top-6 opacity-0"></button> // invisible toggle for demo
          )}
        </div>
        
        {/* Navigation - keeping it simple for the documentation page */}
        <nav className="flex flex-col gap-2 w-full mt-4">
           {/* Primary nav items would go here */}
        </nav>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <button className={cn(
            "flex items-center gap-3 py-2 rounded-lg text-neutral-500 hover:text-green-600 hover:bg-green-50 transition-colors w-full",
            !expanded && "justify-center"
          )}>
            <Gear className="w-5 h-5" weight="fill" />
            {expanded && <span className="label-text font-semibold uppercase tracking-wider">Settings</span>}
          </button>
          <button className={cn(
            "flex items-center gap-3 py-2 rounded-lg text-neutral-500 hover:text-green-600 hover:bg-green-50 transition-colors w-full",
            !expanded && "justify-center"
          )}>
            <Question className="w-5 h-5" weight="fill" />
            {expanded && <span className="label-text font-semibold uppercase tracking-wider">Support</span>}
          </button>
        </div>
        
        {/* Profile */}
        <div className={cn("flex items-center gap-3 border-t border-neutral-200 pt-6", !expanded && "justify-center")}>
          <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
             {/* Placeholder Avatar */}
             <div className="w-full h-full bg-neutral-300"></div>
          </div>
          {expanded && (
            <div className="flex flex-col overflow-hidden">
              <span className="body-text font-medium text-neutral-900 truncate">Stride Premium</span>
              <span className="caption-text text-neutral-500 truncate">Digital Wealth Curator</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
