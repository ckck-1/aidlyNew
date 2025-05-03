
import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const VoiceAgent = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "Hello, I'm your AIDLY health assistant. How can I help you today?", isUser: false }
  ]);
  
  const toggleListening = () => {
    setIsListening(!isListening);
    
    // Simulate a response if started listening
    if (!isListening) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I'm listening... Say something about your health concerns.", 
          isUser: false 
        }]);
      }, 1000);
    }
  };
  
  return (
    <div className="h-full flex flex-col bg-white">
      <Header title="Voice Assistant" showBack={true} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-6 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.isUser
                    ? 'bg-aidly-gradient text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t">
        <div className="flex justify-center">
          <div className="voice-container">
            {isListening && (
              <>
                <div className="voice-ripple h-20 w-20"></div>
                <div className="voice-ripple h-20 w-20"></div>
                <div className="voice-ripple h-20 w-20"></div>
              </>
            )}
            <Button
              className={`h-16 w-16 rounded-full shadow-lg ${
                isListening 
                  ? 'bg-aidly-red' 
                  : 'bg-aidly-gradient'
              }`}
              onClick={toggleListening}
            >
              {isListening ? (
                <MicOff className="h-8 w-8 text-white" />
              ) : (
                <Mic className="h-8 w-8 text-white" />
              )}
            </Button>
          </div>
        </div>
        <div className="text-center mt-3 text-sm text-gray-500">
          {isListening ? 'Tap to stop' : 'Tap to speak to AIDLY'}
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;
