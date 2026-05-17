import React from 'react';
import { cn } from './Button';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={cn(
        "flex items-center h-12 w-full rounded-lg bg-neutral-50 border border-neutral-200 px-4 gap-3 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-colors",
        className
      )}>
        {leftIcon && <div className="text-neutral-500 flex-shrink-0 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">{leftIcon}</div>}
        <input
          ref={ref}
          className="flex-1 bg-transparent border-none outline-none text-[16px] text-neutral-900 placeholder:text-neutral-400 font-inter"
          {...props}
        />
        {rightIcon && <div className="text-neutral-500 flex-shrink-0 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">{rightIcon}</div>}
      </div>
    );
  }
);
Input.displayName = 'Input';
