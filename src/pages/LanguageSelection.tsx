
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

const LanguageSelection = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const navigate = useNavigate();
  
  const handleContinue = () => {
    // In a real app, save language preference
    navigate('/voice');
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="h-40 bg-aidly-gradient flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Choose Your Language</h1>
      </div>
      
      <div className="flex-1 px-6 py-8">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={cn(
                "relative h-16 flex items-center px-4 rounded-xl border-2 transition-all duration-300",
                selectedLang === lang.code
                  ? "border-aidly-red bg-aidly-red/5"
                  : "border-gray-200"
              )}
              onClick={() => setSelectedLang(lang.code)}
            >
              <span className="text-xl mr-3">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              
              {selectedLang === lang.code && (
                <Check className="absolute right-3 text-aidly-red h-5 w-5 animate-zoom-in" />
              )}
            </button>
          ))}
        </div>
        
        <Button 
          onClick={handleContinue}
          className="w-full btn-aidly"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelection;
