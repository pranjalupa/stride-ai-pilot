import React from 'react';
import { cn } from './Button';
import { CaretRight, PlusCircle, Star } from '@phosphor-icons/react';

export interface FundCardListProps {
  title: string;
  meta: string;
  badge?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const FundCardList = ({ title, meta, badge, className, icon }: FundCardListProps) => {
  return (
    <div className={cn("flex items-center justify-between p-5 rounded-xl border transition-all cursor-pointer group", 
      className ? className : "bg-neutral-100 border-neutral-200 hover:bg-green-20 hover:border-green-500 shadow-sm hover:shadow-card"
    )}>
      <div className="flex items-center gap-4">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex flex-col gap-1">
          <h3 className="heading-3 text-neutral-900 group-hover:text-green-700 transition-colors">{title}</h3>
          <p className="label-text text-neutral-500">{meta}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {badge && (
          <span className="px-3 py-1 bg-[#C8EBD4] text-green-700 label-text rounded-lg uppercase tracking-wider font-semibold">
            {badge}
          </span>
        )}
        <CaretRight className="w-6 h-6 text-neutral-400 group-hover:text-green-500" />
      </div>
    </div>
  );
};

export interface FundCardGridProps {
  title: string;
  meta: string;
  logoUrl?: string; // Placeholder or actual
  rating?: number;
  returnPeriod?: string;
  returnVal?: string;
}

export const FundCardGrid = ({ title, meta, logoUrl, rating, returnPeriod, returnVal }: FundCardGridProps) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded-xl bg-neutral-100 border border-neutral-200 hover:border-green-500 transition-all cursor-pointer hover:shadow-card group min-h-[240px]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          {logoUrl ? (
             <img src={logoUrl} alt="Logo" className="w-12 h-12 rounded-lg object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-semantic-error flex items-center justify-center">
               {/* Red placeholder logo matching image */}
               <div className="w-6 h-6 bg-white rotate-45 transform origin-center"></div>
            </div>
          )}
          {rating && (
            <div className="flex items-center gap-1 bg-[#C8EBD4] px-2 py-1 rounded-lg">
              <span className="label-text text-green-900 font-bold">{rating}</span>
              <Star className="w-3 h-3 text-green-900 fill-green-900" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="heading-3 text-neutral-900 group-hover:text-green-700 transition-colors">{title}</h3>
          <p className="label-text text-neutral-500">{meta}</p>
        </div>
      </div>
      
      <div className="flex items-end justify-between mt-6">
        <div className="flex flex-col gap-1">
          <span className="label-text text-neutral-400 uppercase font-semibold">{returnPeriod}</span>
          <span className="body-large text-green-500 font-semibold">{returnVal}</span>
        </div>
        <PlusCircle className="w-8 h-8 text-green-600 group-hover:text-green-500 transition-colors" />
      </div>
    </div>
  );
};
