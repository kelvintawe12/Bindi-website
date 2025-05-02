import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    variant = 'primary',
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
      'font-poppins font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantStyles = {
      primary: 'bg-green-600 text-white hover:bg-green-700',
      outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50',
      gradient:
        'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-glow',
    };
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3.5 text-lg',
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