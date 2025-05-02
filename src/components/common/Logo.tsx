import React from 'react';
interface LogoProps {
  className?: string;
}
export const Logo: React.FC<LogoProps> = ({
  className = ''
}) => {
  return <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
        <span className="text-blue-900 font-bold text-xl">
          <img src="/bindi.jpg" alt="" className="rounded-full" />
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-none">
          <span className="text-yellow-500">Bindi</span>
          <span className="text-white"> Books</span>
        </span>
        <span className="text-xs text-white opacity-75">
          Bindi Books
        </span>
      </div>
    </div>;
};