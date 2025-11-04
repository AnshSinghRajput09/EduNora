import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Welcome Badge */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 glass dark:glass-dark rounded-full mb-6 transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles className="w-5 h-5 text-purple-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Welcome to EduNora Prototype 🚀
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-4 leading-tight transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            animationDelay: "0.4s",
          }}
        >
          Smarter study.{" "}
          <span className="text-gradient">Personalized AI help.</span> Designed
          for students.
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            animationDelay: "0.6s",
          }}
        >
          Your AI-Powered Academic Mentor
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <button
            className="group px-8 py-4 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
            onClick={() => window.open("#", "_blank")}
          >
            Start Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            className="px-8 py-4 glass dark:glass-dark text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-lg border border-gray-200 dark:border-gray-700"
            onClick={() => window.open("#", "_blank")}
          >
            Give Feedback
          </button>
        </div>

        {/* Compact Hero Illustration */}
        <div
          className={`relative max-w-3xl mx-auto transition-all duration-1200 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <div className="relative glass dark:glass-dark rounded-2xl p-6 md:p-8 animate-float">
            <div className="flex flex-row items-center justify-center gap-8">
              {/* Student */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-4xl">👨‍🎓</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Student
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Learning with AI
                </p>
              </div>

              {/* Connecting element */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 gradient-primary rounded"></div>
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                <div className="w-8 h-0.5 gradient-primary rounded"></div>
              </div>

              {/* AI Mentor */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center mb-3 shadow-lg animate-glow">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  AI Mentor
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Smart guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Scroll to explore
            </span>
            <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-transparent rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
