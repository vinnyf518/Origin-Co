
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main circular O shape with arrow */}
      <path
        d="M50 8C27.909 8 10 25.909 10 48C10 70.091 27.909 88 50 88C60.5 88 70 84 77 77"
        stroke="#4f46e5"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow stem curving up */}
      <path
        d="M77 77C82 72 86 65 88 57C90 49 90 41 87 34"
        stroke="#4f46e5"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head */}
      <path
        d="M87 34L95 22L78 28"
        stroke="#4f46e5"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Growth bars - smallest */}
      <rect
        x="28"
        y="58"
        width="10"
        height="18"
        rx="2"
        fill="#818cf8"
      />
      {/* Growth bars - medium */}
      <rect
        x="44"
        y="48"
        width="10"
        height="28"
        rx="2"
        fill="#818cf8"
      />
      {/* Growth bars - tallest */}
      <rect
        x="60"
        y="36"
        width="10"
        height="40"
        rx="2"
        fill="#818cf8"
      />
    </svg>
  );
};
