
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TextChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "Hello, I'm your AIDLY health assistant. How can I help you today?", isUser: false },
    { text: "You can ask me about symptoms, health advice, or medical information.", isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Clear input and show loading
    setIsLoading(true);
    const userMessage = message;
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I'm here to help with your health questions. Could you provide more details?";
      
      if (userMessage.toLowerCase().includes("headache")) {
        response = "Headaches can have many causes, from tension and dehydration to more serious conditions. How long have you been experiencing this headache? Any other symptoms?";
      } else if (userMessage.toLowerCase().includes("fever")) {
        response = "A fever is often a sign your body is fighting an infection. What's your temperature? Any other symptoms like cough, body aches, or fatigue?";
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="h-full flex flex-col bg-white">
      <Header title="Text Chat" showBack={true} />
      
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <div className="space-y-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.isUser
                    ? 'bg-aidly-gradient text-white'
                    : 'bg-gray-100 text-gray-800'
                } animate-fade-in`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[80%]">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your health question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-white border-gray-200 rounded-full py-3 px-4"
          />
          <Button 
            type="submit"
            disabled={!message.trim() || isLoading}
            className="bg-aidly-gradient text-white rounded-full p-3 h-12 w-12"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TextChat;
