import React from "react";

const GradientBackground = () => {
  return (
    <div className="relative h-screen">
      {/* Curved Gradient Lines */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffcc00" />
              <stop offset="100%" stopColor="#8000ff" />
            </linearGradient>
          </defs>
          <path
            d="M 0 300 Q 200 250, 400 300 T 800 300 T 1200 300"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 0 320 Q 200 270, 400 320 T 800 320 T 1200 320"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 0 340 Q 200 290, 400 340 T 800 340 T 1200 340"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 0 360 Q 200 310, 400 360 T 800 360 T 1200 360"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default GradientBackground;
