import Header from "../components/EduNora/Header";
import HeroSection from "../components/EduNora/HeroSection";
import AboutSection from "../components/EduNora/AboutSection";
import FeaturesSection from "../components/EduNora/FeaturesSection";
import UsersSection from "../components/EduNora/UsersSection";
import PrototypeSection from "../components/EduNora/PrototypeSection";
import TestimonialsSection from "../components/EduNora/TestimonialsSection";
import Footer from "../components/EduNora/Footer";
import BackgroundAnimation from "../components/EduNora/BackgroundAnimation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] relative overflow-x-hidden">
      {/* Floating Background Animation */}
      <BackgroundAnimation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Sticky Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Users Section */}
        <UsersSection />

        {/* Prototype Note */}
        <PrototypeSection />

        {/* Testimonials/Feedback */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Global Styles for animations */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(106, 17, 203, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(37, 117, 252, 0.5);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .glass-dark {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-primary {
          background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
