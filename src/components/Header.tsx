
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

type HeaderProps = {
  showBack?: boolean;
  title?: string;
  showLanguage?: boolean;
  className?: string;
};

const Header = ({ showBack = false, title, showLanguage = false, className }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const handleLanguage = () => {
    navigate('/language');
  };
  
  // Don't render header on auth screens
  const isAuthScreen = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/';
  
  if (isAuthScreen) return null;
  
  return (
    <header className={cn('px-4 py-3 flex items-center justify-between z-10', className)}>
      <div className="flex items-center">
        {showBack && (
          <button 
            onClick={handleBack}
            className="mr-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10"
          >
            <ArrowLeft className="h-5 w-5 text-aidly-dark" />
          </button>
        )}
        
        {title ? (
          <h1 className="text-xl font-semibold text-aidly-dark">{title}</h1>
        ) : (
          <Logo size="sm" />
        )}
      </div>
      
      {showLanguage && (
        <button 
          onClick={handleLanguage}
          className="h-9 w-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10"
        >
          <Globe className="h-5 w-5 text-aidly-dark" />
        </button>
      )}
    </header>
  );
};

export default Header;
