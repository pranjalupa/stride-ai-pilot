import React from 'react';
import { cn } from './Button';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'green' | 'neutral';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  active?: boolean;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant = 'neutral', active = false, leftIcon, rightIcon, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg h-8 px-3 gap-2 font-inter text-[12px] font-medium transition-colors cursor-pointer";
    
    // Using Green-100 / Green-200 for green variant, Neutral-100 / Neutral-200 for neutral
    const variants = {
      green: active 
        ? "bg-green-300 text-green-900 hover:bg-green-400" 
        : "bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-card",
      neutral: active
        ? "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:shadow-card",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {leftIcon && <span className="flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">{rightIcon}</span>}
      </div>
    );
  }
);
Chip.displayName = 'Chip';
