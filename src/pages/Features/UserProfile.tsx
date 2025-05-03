
import React, { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 555-123-4567',
    emergencyContact: 'John Doe (+1 555-987-6543)',
    language: 'English'
  });
  
  const [formData, setFormData] = useState({ ...userData });
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ ...userData });
  };
  
  const handleSave = () => {
    setUserData({ ...formData });
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your information has been saved."
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out of AIDLY."
    });
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Profile" showBack={true} />
      
      <div className="p-4 space-y-6">
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <div className="h-20 w-20 rounded-full bg-aidly-gradient flex items-center justify-center text-white mb-3">
            <User className="h-10 w-10" />
          </div>
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-gray-500">{userData.email}</p>
        </div>
        
        <Card className="p-5 space-y-5">
          {isEditing ? (
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Emergency Contact</label>
                <Input 
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button 
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Cancel
                </Button>
                <Button 
                  type="button"
                  onClick={handleSave}
                  className="flex-1 btn-aidly"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                <p className="mt-1">{userData.name}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1">{userData.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                <p className="mt-1">{userData.phone}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Emergency Contact</h3>
                <p className="mt-1">{userData.emergencyContact}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Language</h3>
                <p className="mt-1">{userData.language}</p>
              </div>
              
              <Button
                onClick={handleEdit}
                className="w-full btn-aidly-outline"
              >
                Edit Profile
              </Button>
            </>
          )}
        </Card>
        
        <Card className="p-5 space-y-4">
          <Button
            className="w-full flex justify-between items-center text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </div>
            <span>→</span>
          </Button>
          
          <Button
            onClick={handleLogout}
            className="w-full flex justify-between items-center text-red-600 bg-white border border-gray-200 hover:bg-red-50"
          >
            <div className="flex items-center">
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </div>
            <span>→</span>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
