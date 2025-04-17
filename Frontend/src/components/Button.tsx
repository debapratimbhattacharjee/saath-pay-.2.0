
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  rightIcon?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  rightIcon = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saath-500/50 disabled:opacity-50 disabled:pointer-events-none rounded-full";
  
  const variantStyles = {
    primary: "bg-saath-600 text-white hover:bg-saath-700 active:bg-saath-800 shadow-sm",
    secondary: "bg-saath-100 text-saath-700 hover:bg-saath-200 active:bg-saath-300",
    outline: "bg-transparent border border-saath-300 text-saath-700 hover:bg-saath-50 active:bg-saath-100",
    ghost: "bg-transparent text-saath-700 hover:bg-saath-50 active:bg-saath-100",
    link: "bg-transparent text-saath-600 hover:text-saath-700 underline-offset-4 hover:underline p-0 h-auto",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const iconSizeStyles = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const iconSpacingStyles = {
    sm: rightIcon ? "ml-1.5" : "mr-1.5",
    md: rightIcon ? "ml-2" : "mr-2",
    lg: rightIcon ? "ml-2.5" : "mr-2.5",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'link' && sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && !rightIcon && (
        <span className={cn(iconSizeStyles[size], iconSpacingStyles[size])}>
          {icon}
        </span>
      )}
      {children}
      {icon && rightIcon && (
        <span className={cn(iconSizeStyles[size], iconSpacingStyles[size])}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
