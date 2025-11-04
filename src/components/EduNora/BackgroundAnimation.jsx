export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient spheres */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(106, 17, 203, 0.4) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-40 right-20 w-72 h-72 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 117, 252, 0.4) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-80 h-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-64 h-64 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          animation: "float 5s ease-in-out infinite reverse",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(106, 17, 203, 0.05) 100%)",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
