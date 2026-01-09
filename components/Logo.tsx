
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
      {/* Main circular O shape */}
      <path
        d="M50 10
           A40 40 0 1 0 82 30"
        stroke="#4f46e5"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow extending from circle */}
      <path
        d="M75 35
           Q85 25 90 15"
        stroke="#4f46e5"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head */}
      <polygon
        points="90,3 99,18 83,22"
        fill="#4f46e5"
      />
      {/* Growth bars - 4 vertical bars */}
      <rect x="24" y="62" width="10" height="18" rx="2" fill="#818cf8" />
      <rect x="38" y="52" width="10" height="28" rx="2" fill="#818cf8" />
      <rect x="52" y="42" width="10" height="38" rx="2" fill="#818cf8" />
      <rect x="66" y="30" width="10" height="50" rx="2" fill="#818cf8" />
    </svg>
  );
};
