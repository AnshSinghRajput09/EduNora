import { Heart, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Discord",
      icon: "💬",
      href: "#",
      description: "Join our community",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "#",
      description: "View our code",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:feedback@edunora.com",
      description: "Send us a message",
    },
  ];

  return (
    <footer className="py-16 px-6 bg-white dark:bg-[#0a0a0f] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-glow"
              >
                <defs>
                  <linearGradient
                    id="enGradientFooter"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                  stroke="url(#enGradientFooter)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M11.5 9.5H7.5V14.5H11.5M7.5 12H10.5"
                  stroke="url(#enGradientFooter)"
                  strokeWidth="2"
                />
                <path
                  d="M13.5 14.5V9.5L16.5 14.5V9.5"
                  stroke="url(#enGradientFooter)"
                  strokeWidth="2"
                />
              </svg>
              <h2 className="text-3xl font-bold text-gradient">EduNora</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Your AI-Powered Academic Mentor, designed to make learning
              smarter, more personalized, and accessible to everyone.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Prototype v1 • In Development
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">
              {[
                { name: "About EduNora", href: "#about" },
                { name: "Core Features", href: "#features" },
                { name: "Who Can Use", href: "#users" },
                { name: "Give Feedback", href: "#feedback" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Connect With Us
            </h3>

            <div className="space-y-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-4 p-4 glass dark:glass-dark rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    {typeof social.icon === "string" ? (
                      <span className="text-lg">{social.icon}</span>
                    ) : (
                      social.icon
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {social.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {social.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Stay Updated
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get notified about new features and updates
              </p>
              <button
                className="w-full px-4 py-3 gradient-primary text-white rounded-xl hover:opacity-90 transition-all duration-200 font-medium"
                onClick={() => window.open("#", "_blank")}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Decnet | Prototype v1</span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>© {currentYear} EduNora. All rights reserved.</span>
          </div>
        </div>

        {/* Beta Notice */}
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
          <div className="flex items-center gap-3 text-yellow-800 dark:text-yellow-200">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-medium">Beta Software Notice</p>
              <p className="text-sm opacity-90">
                EduNora is currently in prototype/beta stage. Features may
                change, and some functionality may be limited. Your feedback
                helps us improve!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.5));
          }
        }
      `}</style>
    </footer>
  );
}
