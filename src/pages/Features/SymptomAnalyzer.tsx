
import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AnalysisResult {
  condition: string;
  confidence: number;
  description: string;
  recommendation: string;
}

const SymptomAnalyzer = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  const handleCapture = () => {
    // In a real app, this would open the camera
    setImage('/placeholder.svg'); // Using a placeholder image
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        condition: "Mild Skin Rash",
        confidence: 89,
        description: "The image shows signs of a mild allergic skin reaction with localized redness and small bumps.",
        recommendation: "Apply cold compress to reduce inflammation. Consider using an over-the-counter antihistamine cream. If symptoms worsen, consult a dermatologist."
      });
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        
        setIsAnalyzing(true);
        setTimeout(() => {
          setResult({
            condition: "Potential Eczema",
            confidence: 78,
            description: "The image shows skin patches that might indicate mild eczema, characterized by dry, itchy skin with some redness.",
            recommendation: "Keep the area moisturized. Avoid harsh soaps and hot water. Consider using a hypoallergenic moisturizer. Consult a dermatologist for proper diagnosis."
          });
          setIsAnalyzing(false);
        }, 2500);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const resetAnalysis = () => {
    setImage(null);
    setResult(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Symptom Analyzer" showBack={true} />
      
      <div className="p-4 space-y-6">
        <Card className="p-5">
          <h2 className="text-xl font-semibold mb-3 text-aidly-dark">Capture or Upload</h2>
          <p className="text-gray-600 mb-6">
            Take a photo or upload an image of the affected area for analysis.
            Our AI will analyze and provide potential health insights.
          </p>
          
          {!image ? (
            <div className="flex gap-4">
              <Button 
                onClick={handleCapture} 
                className="flex-1 btn-aidly flex items-center gap-2"
              >
                <Camera className="h-5 w-5" />
                <span>Camera</span>
              </Button>
              
              <Button
                className="flex-1 btn-aidly-outline flex items-center gap-2"
                asChild
              >
                <label>
                  <Upload className="h-5 w-5" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </label>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative border border-gray-200 rounded-xl overflow-hidden">
                <img 
                  src={image} 
                  alt="Uploaded" 
                  className="w-full h-60 object-cover"
                />
                
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                    <div className="h-12 w-12 rounded-full border-4 border-white border-t-transparent animate-spin mb-3"></div>
                    <p>Analyzing image...</p>
                  </div>
                )}
              </div>
              
              {result && (
                <div className="border border-gray-200 rounded-xl p-4 animate-fade-in">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-bold text-lg text-aidly-dark">{result.condition}</h3>
                    <div className="bg-aidly-red/10 px-2 py-1 rounded-md text-xs font-medium text-aidly-red">
                      {result.confidence}% Confidence
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{result.description}</p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                    <p className="text-sm font-medium text-blue-800">RECOMMENDATION</p>
                    <p className="text-sm text-blue-700">{result.recommendation}</p>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    Note: This is not a medical diagnosis. Always consult a healthcare professional.
                  </div>
                </div>
              )}
              
              <div className="flex gap-4">
                <Button 
                  onClick={resetAnalysis}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800"
                  disabled={isAnalyzing}
                >
                  Reset
                </Button>
                
                {result && (
                  <Button
                    className="flex-1 btn-aidly"
                  >
                    Get Help Now
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
        
        <Card className="p-5">
          <h3 className="font-semibold mb-2">How it works</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Upload or capture an image of the affected area</li>
            <li>Our AI analyzes the image to identify potential conditions</li>
            <li>Receive insights and recommendations</li>
            <li>Always follow up with a medical professional</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default SymptomAnalyzer;
