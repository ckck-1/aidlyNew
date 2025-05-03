
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock signup - would connect to backend in real app
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created",
        description: "Welcome to AIDLY!",
      });
      navigate('/language');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-aidly-dark">Create an Account</h1>
        <p className="text-gray-500">Sign up to get started with AIDLY</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <Input 
            type="text"
            placeholder="John Doe"
            className="input-aidly"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
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
          <label className="text-sm font-medium text-gray-700">Password</label>
          <Input 
            type="password"
            placeholder="••••••••"
            className="input-aidly"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="text-sm text-gray-500">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </div>
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full btn-aidly"
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-aidly-red font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
