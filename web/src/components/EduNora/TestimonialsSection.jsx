import { useState, useEffect, useRef } from "react";
import { Star, Users, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
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
      id="feedback"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Be the First to Shape <span className="text-gradient">EduNora</span>
            !
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Your feedback is invaluable in building the future of AI-powered
            education. Join our early community and help us create something
            amazing together.
          </p>
        </div>

        {/* Main CTA Card */}
        <div
          className={`glass dark:glass-dark rounded-3xl p-8 md:p-12 text-center mb-16 border-2 border-purple-200 dark:border-purple-800 shadow-2xl transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          {/* Central Icon */}
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 mx-auto gradient-primary rounded-full flex items-center justify-center shadow-xl animate-glow">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 text-4xl">💭</div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Your Voice Matters
          </h3>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're not just building another app – we're creating a movement.
            Your insights, suggestions, and experiences will directly influence
            how EduNora evolves.
          </p>

          <button
            className="group px-10 py-5 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-3 mx-auto"
            onClick={() => window.open("#", "_blank")}
          >
            <Star className="w-6 h-6" />
            Share Your Ideas
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>

        {/* Community Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center p-6 glass dark:glass-dark rounded-2xl">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Early Access
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Be among the first to experience EduNora's revolutionary features
            </p>
          </div>

          <div className="text-center p-6 glass dark:glass-dark rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Direct Impact
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Your feedback shapes features, design, and the overall user
              experience
            </p>
          </div>

          <div className="text-center p-6 glass dark:glass-dark rounded-2xl">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Exclusive Community
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Join a select group of educators, students, and AI enthusiasts
            </p>
          </div>
        </div>

        {/* What We Want to Know */}
        <div
          className={`glass dark:glass-dark rounded-3xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            What We'd Love to Hear About
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Your Learning Challenges
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    What struggles do you face in studying or teaching?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Feature Requests
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    What tools would make your learning more effective?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    User Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    How can we make EduNora more intuitive and enjoyable?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    AI Preferences
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    How would you like AI to assist in your learning journey?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Integration Ideas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    What platforms or tools should EduNora work with?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    General Thoughts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Any ideas, concerns, or suggestions you'd like to share?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to be part of the EduNora journey?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 glass dark:glass-dark text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2 justify-center"
              onClick={() => window.open("#", "_blank")}
            >
              <Users className="w-5 h-5" />
              Join the Community
            </button>

            <button
              className="px-8 py-4 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2 justify-center"
              onClick={() => window.open("#", "_blank")}
            >
              <MessageSquare className="w-5 h-5" />
              Submit Feedback Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
