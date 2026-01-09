
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
      {/* Main circular O shape - starts from bottom, wraps around */}
      <path
        d="M30 80
           C10 65 5 40 20 20
           C35 0 65 0 80 20"
        stroke="#4f46e5"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Diagonal line through circle continuing to arrow */}
      <path
        d="M25 85 L55 45"
        stroke="#4f46e5"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow curve from top of circle */}
      <path
        d="M80 20 C90 30 95 15 88 8"
        stroke="#4f46e5"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head */}
      <path
        d="M88 8 L97 12 L92 3 Z"
        fill="#4f46e5"
      />
      <path
        d="M88 8 L80 18"
        stroke="#4f46e5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M88 8 L95 18"
        stroke="#4f46e5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Growth bars - positioned at angle in bottom left */}
      {/* Smallest bar */}
      <rect
        x="22"
        y="62"
        width="8"
        height="16"
        rx="1"
        fill="#818cf8"
        transform="rotate(-25 26 70)"
      />
      {/* Medium bar */}
      <rect
        x="34"
        y="54"
        width="8"
        height="24"
        rx="1"
        fill="#818cf8"
        transform="rotate(-25 38 66)"
      />
      {/* Tallest bar */}
      <rect
        x="46"
        y="44"
        width="8"
        height="34"
        rx="1"
        fill="#818cf8"
        transform="rotate(-25 50 61)"
      />
    </svg>
  );
};
