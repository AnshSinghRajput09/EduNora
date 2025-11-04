import { useState, useEffect, useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

export default function PrototypeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-[#0a0a0f] relative overflow-hidden"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="w-96 h-96 rounded-full absolute top-10 left-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(106, 17, 203, 0.3) 0%, transparent 70%)",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="w-72 h-72 rounded-full absolute bottom-10 right-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(37, 117, 252, 0.3) 0%, transparent 70%)",
              animation: "float 6s ease-in-out infinite reverse",
            }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Prototype Banner */}
        <div
          className={`glass dark:glass-dark rounded-3xl p-8 md:p-12 border-2 border-purple-200 dark:border-purple-800 shadow-2xl transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Header with Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                Prototype v1
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              This is a <span className="text-gradient">Prototype</span> (v1)
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're collecting feedback to make EduNora even better — join our
              mission!
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Early Stage
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We're in active development and learning from early users
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Your Input Matters
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every piece of feedback helps shape the future of EduNora
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Rapid Innovation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Regular updates and new features based on user needs
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              className="group px-8 py-4 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2 mx-auto"
              onClick={() => window.open("#", "_blank")}
            >
              Share Your Feedback
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* What We're Building */}
        <div
          className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          {/* Left Side - Current State */}
          <div className="glass dark:glass-dark rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              What's Available Now
            </h3>

            <div className="space-y-4">
              {[
                "Core AI doubt solving functionality",
                "Basic study planning tools",
                "Initial note-taking features",
                "Prototype user interface",
                "Essential learning mechanics",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Coming Soon */}
          <div className="glass dark:glass-dark rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Coming Soon
            </h3>

            <div className="space-y-4">
              {[
                "Advanced AI tutoring capabilities",
                "Comprehensive career guidance",
                "Enhanced gamification system",
                "Mobile app optimization",
                "Community features & collaboration",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Be part of shaping the future of AI-powered education
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 glass dark:glass-dark text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium border border-gray-200 dark:border-gray-700"
              onClick={() => window.open("#", "_blank")}
            >
              Try EduNora Now
            </button>

            <button
              className="px-6 py-3 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-medium shadow-lg"
              onClick={() => window.open("#", "_blank")}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
