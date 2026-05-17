import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'neutral' | 'ghost';
  size?: 'default' | 'large' | 'icon';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'green', size = 'default', leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-inter font-medium transition-all duration-200 ease-in-out gap-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed";
    
    const variants = {
      green: "bg-green-500 text-white hover:bg-green-600 hover:shadow-card active:bg-green-700 disabled:bg-green-200 disabled:text-green-50",
      neutral: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 hover:shadow-card active:bg-neutral-400 disabled:bg-neutral-100 disabled:text-neutral-400",
      ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100 hover:shadow-card active:bg-neutral-200 disabled:text-neutral-400 disabled:hover:bg-transparent disabled:hover:shadow-none"
    };

    const sizes = {
      default: "h-10 px-4 text-[16px]",
      large: "h-12 px-6 text-[16px]",
      icon: "h-10 w-10 p-0 flex items-center justify-center"
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {leftIcon && <span className="flex items-center justify-center">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {rightIcon && <span className="flex items-center justify-center">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';
