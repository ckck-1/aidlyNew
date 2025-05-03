
import React from 'react';
import { cn } from '@/lib/utils';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Logo = ({ size = 'md', className }: LogoProps) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };
  
  return (
    <div className={cn('font-bold flex items-center', sizes[size], className)}>
      <span className="text-aidly-red">AID</span>
      <span className="text-aidly-dark">LY</span>
      <div className="ml-1 relative top-[2px]">
        <span className="text-[10px] text-aidly-red font-light bg-white/80 px-1 py-0.5 rounded-md">
          VISION ASSIST
        </span>
      </div>
    </div>
  );
};

export default Logo;
