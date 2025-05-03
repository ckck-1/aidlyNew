
import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="h-64 bg-aidly-gradient rounded-b-[40px] flex flex-col items-center justify-center shadow-lg">
        <Logo size="lg" className="text-white mb-4" />
        <p className="text-white/90 text-sm font-light">AI-Powered Health Assistant</p>
      </div>
      <div className="flex-1 px-6 py-10 -mt-10 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
