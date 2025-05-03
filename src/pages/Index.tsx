
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Add a slight delay for animation effect
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-aidly-gradient">
      <div className="animate-pulse-light text-center">
        <Logo size="lg" className="text-white mb-4" />
        <p className="text-white/90 text-lg font-light">AI-Powered Health Assistant</p>
      </div>
    </div>
  );
};

export default Index;
