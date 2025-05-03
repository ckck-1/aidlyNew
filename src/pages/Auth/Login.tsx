
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock login - would connect to backend in real app
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to AIDLY",
      });
      navigate('/language');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-aidly-dark">Welcome Back</h1>
        <p className="text-gray-500">Sign in to continue to AIDLY</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input 
            type="email"
            placeholder="your@email.com"
            className="input-aidly"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <Link to="/forgot-password" className="text-sm text-aidly-red">Forgot Password?</Link>
          </div>
          <Input 
            type="password"
            placeholder="••••••••"
            className="input-aidly"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full btn-aidly"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-aidly-red font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
