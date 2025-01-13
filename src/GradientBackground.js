import React from "react";

const GradientBackground = () => {
  return (
    <div className="">
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 593"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffcc00" />
              <stop offset="100%" stopColor="#8000ff" />
            </linearGradient>
          </defs>

          {/* 1st wave */}
          <path
            d="
              M 0 10
              C 300 0, 900 600, 1200 500
            "
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* 2nd wave */}
          <path
            d="
              M 0 30
              C 300 20, 900 620, 1200 520
            "
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* 3rd wave */}
          <path
            d="
              M 0 50
              C 300 40, 900 640, 1200 540
            "
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* 4th wave */}
          <path
            d="
              M 0 70
              C 300 60, 900 660, 1200 560
            "
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* 5th wave */}
          <path
            d="
              M 0 90
              C 300 80, 900 680, 1200 580
            "
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default GradientBackground;
