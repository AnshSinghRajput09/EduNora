import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Calendar,
  FileText,
  Target,
  Gamepad2,
  BookOpen,
  Brain,
  Youtube,
  HelpCircle,
  Search,
  BarChart3,
  Trophy,
} from "lucide-react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
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

  const coreFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Doubt Solver",
      description:
        "Get instant solutions via text, voice, or image upload with multiple response modes",
      color: "from-purple-500 to-indigo-500",
      emoji: "🤖",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Guide",
      description:
        "AI Dream Companion that guides students to their ideal career with personalized assessment",
      color: "from-cyan-500 to-blue-500",
      emoji: "🎯",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Notes AI",
      description:
        "Automatically summarizes and tags user-created notes for effortless organization",
      color: "from-indigo-500 to-purple-500",
      emoji: "📝",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Syllabus Manager",
      description:
        "Find and save the best YouTube videos for any topic, tailored to your curriculum",
      color: "from-green-500 to-teal-500",
      emoji: "📚",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Study Planner",
      description:
        "Receive personalized daily study schedules from an AI mentor",
      color: "from-blue-500 to-cyan-500",
      emoji: "📅",
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Quiz Generator",
      description:
        "Create custom quizzes on any topic to test knowledge and prepare for exams",
      color: "from-orange-500 to-red-500",
      emoji: "❓",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Resource Finder",
      description:
        "Discover articles, interactive simulations, and other learning materials",
      color: "from-teal-500 to-green-500",
      emoji: "🔍",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Revision Mentor",
      description:
        "AI Chapter Summarizer for long texts and AI Flashcard Generator for quick revision",
      color: "from-pink-500 to-purple-500",
      emoji: "🧠",
    },
  ];

  const engagementFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Progress Tracker",
      description:
        "Analyze performance with AI-generated reports or by uploading a picture of report card",
      color: "from-violet-500 to-purple-500",
      emoji: "📊",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamification Hub",
      description:
        "Central dashboard to track all game-related stats (XP, Rank, Coins, Streak)",
      color: "from-yellow-500 to-orange-500",
      emoji: "🏆",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-[#0a0a0f]"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Complete <span className="text-gradient">Learning Suite</span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Everything you need for academic success, powered by AI
          </p>
        </div>

        {/* Core AI Learning Tools */}
        <div className="mb-16">
          <h3
            className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            🤖 Core AI Learning Tools
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group glass dark:glass-dark rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 text-lg">
                    {feature.emoji}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement & Progress Tracking */}
        <div className="mb-16">
          <h3
            className={`text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "1.4s" }}
          >
            📈 Engagement & Progress Tracking
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {engagementFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group glass dark:glass-dark rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${1.6 + index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {feature.emoji}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlight */}
        <div
          className={`glass dark:glass-dark rounded-3xl p-8 md:p-12 text-center transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "1.8s" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Your Complete AI Learning Companion
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            From solving doubts to tracking progress, EduNora provides every
            tool you need for academic success. Experience personalized learning
            like never before with our comprehensive AI-powered platform.
          </p>

          <button
            className="group px-8 py-4 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2 mx-auto"
            onClick={() => window.open("#", "_blank")}
          >
            Start Your Learning Journey
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
