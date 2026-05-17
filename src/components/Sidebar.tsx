import React, { useState } from 'react';
import { cn } from './Button';
import { 
  GearSix, 
  SealQuestion, 
  X, 
  Sidebar as SidebarIcon
} from '@phosphor-icons/react';

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ mobileOpen = false, onClose }: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);
  const currentPath = window.location.pathname;

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (onClose) onClose();
  };



  const isExpanded = expanded || mobileOpen;

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={cn(
          "bg-[#F9F9F7] border-r border-[#BDCABD]/15 p-6 flex flex-col justify-start items-start gap-2 transition-all duration-300 shrink-0 z-50",
          // Desktop
          expanded ? "md:w-[280px]" : "md:w-[94px]",
          // Mobile
          "fixed inset-y-0 left-0 h-full w-[280px] md:sticky md:top-0 md:h-screen md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Top Section */}
        <div className="flex-1 flex flex-col justify-start items-center gap-2 w-full">
          {/* Header */}
          {isExpanded ? (
            <div className="w-full h-[52px] py-3 pl-4 flex justify-center items-center gap-[10px]">
              <div 
                className="flex-1 text-[#1A7A4A] text-[24px] font-switzer font-medium leading-[28px] cursor-pointer"
                onClick={() => navigateTo('/')}
              >
                Stride
              </div>
              <div 
                onClick={() => setExpanded(false)}
                className="h-[44px] p-3 bg-[#FAFAF8] rounded-lg flex justify-center items-center gap-3 cursor-pointer hover:bg-neutral-100 transition-colors"
              >
                <SidebarIcon className="w-5 h-5 text-[#7A7A70]" weight="regular" />
              </div>
            </div>
          ) : (
            <div className="w-[45px] h-[52px] flex justify-center items-center gap-[10px]">
              <div 
                onClick={() => setExpanded(true)}
                className="h-[44px] p-3 bg-[#FAFAF8] rounded-lg flex justify-center items-center gap-3 cursor-pointer hover:bg-neutral-100 transition-colors"
              >
                <span className="text-[#1A7A4A] text-[24px] font-switzer font-medium leading-[28px]">S</span>
              </div>
            </div>
          )}


        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-[#EFEFEB] flex flex-col justify-start items-center gap-1">
          {isExpanded ? (
            <>
              {/* Profile Expanded */}
              <div className="w-full p-4 flex justify-start items-center gap-3">
                <div className="w-[38px] h-[38px] bg-[#BFEEC9] rounded-full overflow-hidden flex justify-center items-center shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-full h-full object-cover" alt="Avatar" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="w-full h-[18px] flex flex-col justify-center text-[#1A1C1B] text-[16px] font-inter font-normal leading-[24px] tracking-[0.64px] truncate">
                    Stride Premium
                  </div>
                  <div className="w-full flex flex-col justify-center text-[rgba(62,74,64,0.70)] text-[12px] font-inter font-normal leading-[16px] tracking-[0.24px] truncate">
                    Digital Wealth Curator
                  </div>
                </div>
              </div>

              {/* Actions Expanded */}
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <div className="w-full px-4 py-3 bg-[#FAFAF8] rounded-lg flex justify-start items-center gap-3 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <GearSix className="w-5 h-5 text-[#7A7A70]" weight="regular" />
                  <div className="flex-1 flex flex-col justify-center text-[#7A7A70] text-[16px] font-inter font-normal leading-[24px] tracking-[0.64px]">
                    SETTINGS
                  </div>
                </div>
                <div className="w-full px-4 py-3 bg-[#FAFAF8] rounded-lg flex justify-start items-center gap-3 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <SealQuestion className="w-5 h-5 text-[#7A7A70]" weight="regular" />
                  <div className="flex-1 flex flex-col justify-center text-[#7A7A70] text-[16px] font-inter font-normal leading-[24px] tracking-[0.64px]">
                    SUPPORT
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Profile Collapsed */}
              <div className="w-full py-4 flex justify-center items-center gap-3">
                <div className="w-[38px] h-[38px] bg-[#BFEEC9] rounded-full overflow-hidden flex justify-center items-center shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-full h-full object-cover" alt="Avatar" />
                </div>
              </div>

              {/* Actions Collapsed */}
              <div className="w-full flex flex-col justify-center items-center gap-1">
                <div className="w-12 h-12 p-3 bg-[#FAFAF8] rounded-lg flex justify-center items-center gap-3 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <GearSix className="w-5 h-5 text-[#7A7A70]" weight="regular" />
                </div>
                <div className="w-12 h-12 p-3 bg-[#FAFAF8] rounded-lg flex justify-center items-center gap-3 cursor-pointer hover:bg-neutral-100 transition-colors">
                  <SealQuestion className="w-5 h-5 text-[#7A7A70]" weight="regular" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
