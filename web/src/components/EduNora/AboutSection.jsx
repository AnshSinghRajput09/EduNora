import { useState, useEffect, useRef } from "react";
import { Lightbulb, BookOpen, Brain } from "lucide-react";

export default function AboutSection() {
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

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge AI technology",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning",
      description: "Personalized study experience",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence",
      description: "Smart academic assistance",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-all duration-1000 ${
              isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-8"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Why We Built <span className="text-gradient">EduNora</span>
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? "animate-slideInRight" : "opacity-0 translate-x-8"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            EduNora is a next-generation AI study assistant designed to
            revolutionize how students plan, learn, and grow smarter. Our
            mission is to make quality education accessible and personalized for
            every learner.
          </p>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-3 gradient-primary rounded-full flex items-center justify-center text-white shadow-lg animate-glow">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <div
          className={`glass dark:glass-dark rounded-3xl p-6 md:p-10 transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Empowering Students with AI
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  We believe that every student deserves access to personalized
                  learning tools that adapt to their unique needs and learning
                  style.
                </p>
                <p>
                  EduNora combines advanced artificial intelligence with
                  educational expertise to create an experience that feels like
                  having a personal tutor available 24/7.
                </p>
                <p>
                  From solving complex problems to creating study schedules,
                  EduNora is designed to support students at every step of their
                  academic journey.
                </p>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="relative glass dark:glass-dark rounded-2xl p-6 animate-float">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 text-center">
                    <span className="text-2xl mb-1 block">📚</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Study Plans
                    </span>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 text-center">
                    <span className="text-2xl mb-1 block">🤖</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      AI Tutor
                    </span>
                  </div>
                  <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3 text-center">
                    <span className="text-2xl mb-1 block">📊</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Progress
                    </span>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 text-center">
                    <span className="text-2xl mb-1 block">🎯</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Goals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
