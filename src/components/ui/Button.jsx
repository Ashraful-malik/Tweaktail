"use client";
import { cn } from "@/utility/tm";
import React from "react";
import {
  sizeClasses,
  radiusClasses,
  borderClasses,
  shadowClasses,
} from "@/utility/buttonPresets";
function Button({
  size = "md",
  width = "auto",
  radius = "md",
  bgColor = "bg-indigo-500",
  textColor = "white",
  text = "Click Me",
  isDisabled = false,
  shadow = "none",
  border = "none",
}) {
  return (
    <button
      className={cn(
        sizeClasses[size],
        width === "auto" ? "w-auto" : "w-full",
        radiusClasses[radius],
        textColor,
        bgColor,
        shadowClasses[shadow],
        borderClasses[border],
        border !== "none" && `border-${bgColor}`,
        `hover:${getDarkerShade(bgColor)}`,
        `focus:outline-none focus:ring-2`,
        getRingColor(bgColor),
        `transition-colors duration-200 flex items-center justify-center cursor-pointer`,
        isDisabled && "cursor-not-allowed opacity-50" // Disable button styles
      )}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
function getDarkerShade(bgColor) {
  const parts = bgColor.split("-");
  if (parts.length < 3) return bgColor;

  const [prefix, hue, shade] = parts;
  const numericShade = parseInt(shade);

  if (isNaN(numericShade)) return bgColor;

  if (numericShade >= 900) {
    return `${prefix}-${hue}-800`; // slightly lighter on hover
  }
  return `${prefix}-${hue}-${numericShade + 100}`;
}

// focus ring
function getRingColor(bgColor) {
  const parts = bgColor.split("-");
  if (parts.length < 3) return "ring-indigo-300"; // fallback
  const [, hue] = parts;
  return `focus:ring-${hue}-300`;
}

export default Button;
