import React from "react";
import { cn } from "../../lib/utils";

export default function NavActive({ backgroundColor }: { backgroundColor: string }) {
  return (
    <svg
      className={cn(
        `absolute bottom-0 left-1/2 w-[150%] h-full -translate-x-1/2 -z-1 opacity-25 dark:opacity-40 blur-sm`, // Increased opacity + blur for glow effect
        backgroundColor
      )}
      preserveAspectRatio="none"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="230"
        y="230"
        width="230"
        height="230"
        transform="rotate(-180 230 230)"
        fill="url(#paint0_radial_1_33)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_33"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(345 230) rotate(90) scale(230 115)"
        >
          <stop stopColor="currentColor" stopOpacity="0.8" /> 
          <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>
  );
}

