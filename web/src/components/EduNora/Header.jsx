import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Users", href: "#users" },
    { name: "Feedback", href: "#feedback" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass dark:glass-dark shadow-lg" : "bg-transparent"
      }`}
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                width="40"
                height="40"
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
                    id="enGradient"
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
                  stroke="url(#enGradient)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M11.5 9.5H7.5V14.5H11.5M7.5 12H10.5"
                  stroke="url(#enGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M13.5 14.5V9.5L16.5 14.5V9.5"
                  stroke="url(#enGradient)"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gradient">EduNora</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
              onClick={() => window.open("#", "_blank")}
            >
              Start Now
            </button>
            <button
              className="px-6 py-2 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              onClick={() => window.open("#", "_blank")}
            >
              Give Feedback
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass dark:glass-dark rounded-lg">
            <nav className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <button
                  className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open("#", "_blank");
                  }}
                >
                  Start Now
                </button>
                <button
                  className="px-6 py-2 gradient-primary text-white rounded-full hover:opacity-90 transition-all duration-200 font-medium shadow-lg"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open("#", "_blank");
                  }}
                >
                  Give Feedback
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
