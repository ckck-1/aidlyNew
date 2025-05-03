
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mic, MessageCircle, Camera, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/voice', icon: Mic, label: 'Voice' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/analyzer', icon: Camera, label: 'Analyzer' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-t-2xl z-50">
      <div className="flex justify-around items-center py-3 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center px-3 py-2 rounded-xl transition-colors',
                isActive
                  ? 'text-aidly-red bg-aidly-red/10'
                  : 'text-gray-500 hover:text-aidly-red'
              )}
            >
              <item.icon
                className={cn('h-6 w-6', isActive && 'animate-pulse-light')}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
