import { useState, useEffect, useRef } from "react";
import { GraduationCap, Users, BookOpen } from "lucide-react";

export default function UsersSection() {
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

  const userTypes = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "School Students",
      description:
        "From middle school to high school, get help with homework, exam prep, and building strong study habits.",
      emoji: "🎒",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Homework Help",
        "Exam Preparation",
        "Study Habits",
        "Subject Mastery",
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "College Learners",
      description:
        "Navigate complex coursework, research projects, and career planning with AI-powered guidance.",
      emoji: "🎓",
      gradient: "from-purple-500 to-indigo-500",
      features: [
        "Research Support",
        "Project Management",
        "Career Guidance",
        "Advanced Learning",
      ],
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Lifelong Learners",
      description:
        "Whether learning new skills or pursuing certifications, EduNora adapts to your learning journey.",
      emoji: "📚",
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Skill Development",
        "Certification Prep",
        "Professional Growth",
        "Personal Learning",
      ],
    },
  ];

  return (
    <section
      id="users"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
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
            Who Can Use <span className="text-gradient">EduNora</span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            EduNora is designed for learners at every stage of their educational
            journey
          </p>
        </div>

        {/* User Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className={`group glass dark:glass-dark rounded-3xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 animate-glow ${
                isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${userType.gradient} flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {userType.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-3xl">
                    {userType.emoji}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {userType.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {userType.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {userType.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group-hover:border-purple-200 dark:group-hover:border-purple-700 transition-all duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${userType.gradient}`}
                    ></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${userType.gradient} opacity-5`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Universal Appeal Section */}
        <div
          className={`glass dark:glass-dark rounded-3xl p-8 md:p-12 text-center transition-all duration-1000 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animationDelay: "1.4s" }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Learning Has No Boundaries
            </h3>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Whether you're a curious 13-year-old tackling algebra or a
              40-year-old learning data science, EduNora adapts to your pace,
              style, and goals. Our AI understands that every learner is unique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Personalized
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Adapts to your learning style and pace
                </p>
              </div>

              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Accessible
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available anytime, anywhere you need help
                </p>
              </div>

              <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Effective
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Proven methods backed by AI intelligence
                </p>
              </div>
            </div>

            <button
              className="group px-8 py-4 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2 mx-auto"
              onClick={() => window.open("#", "_blank")}
            >
              Join EduNora Today
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
