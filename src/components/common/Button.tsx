import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  variant?: 'yellow' | 'red' | 'white' | 'navy' | 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    variant = 'yellow',
    size = 'md',
    href,
    type = 'button',
    children,
    onClick,
    className,
    ariaLabel,
    external = false,
  }) => {
    const baseStyles =
      'font-poppins font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantStyles = {
      yellow: 'bg-yellow-400 text-navy-800 hover:bg-yellow-500 hover:border-yellow-600 border border-transparent',
      red: 'bg-red-500 text-white hover:bg-red-600 hover:border-red-700 border border-transparent',
      white: 'bg-white text-navy-800 hover:bg-gray-100 hover:border-yellow-400 border border-yellow-400',
      navy: 'bg-navy-800 text-white hover:bg-navy-900 hover:border-navy-700 border border-transparent',
      primary: 'bg-primary-600 text-white hover:bg-primary-700 border border-transparent',
      outline: 'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50',
    };
    const sizeStyles = {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-4 py-1.5 text-sm',
      lg: 'px-6 py-2 text-base',
    };

    const classes = twMerge(`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`, className);

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          role="button"
        >
          {children}
        </a>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={type !== 'button' && !onClick}
      >
        {children}
      </button>
    );
  }
);
