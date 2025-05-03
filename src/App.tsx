
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import LanguageSelection from "./pages/LanguageSelection";
import VoiceAgent from "./pages/Features/VoiceAgent";
import TextChat from "./pages/Features/TextChat";
import SymptomAnalyzer from "./pages/Features/SymptomAnalyzer";
import UserProfile from "./pages/Features/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          
          {/* Language Selection */}
          <Route path="/language" element={<LanguageSelection />} />
          
          {/* Main App Routes */}
          <Route element={<MainLayout />}>
            <Route path="/voice" element={<VoiceAgent />} />
            <Route path="/chat" element={<TextChat />} />
            <Route path="/analyzer" element={<SymptomAnalyzer />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
