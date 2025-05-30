"use client";
import React from "react";
import { cn } from "@/utility/tm";
import { radiusClasses, sizeClasses } from "@/utility/globalClassName";

function Input({
  label = "username",
  placeholder = "",
  type = "text", // "text", "email", "password","tel","url","search","number",
  size = "md",
  radius = "md",
  disabled = false,
  error = false,
  helperText,
  fullWidth = false,
  showLabel = true,
  showHelperText = false,
  showPlaceHolderText = false,
  labelTextColor = "text-neutral-700",
  focusBorderColor = "border-blue-500",
  borderColor = "border-neutral-200 ",
}) {
  return (
    <div className={cn(fullWidth ? "w-full" : "max-w-md")}>
      {label && (
        <label
          htmlFor={label}
          className={`block text-sm font-medium ${labelTextColor} mb-1`}
        >
          {showLabel && label}
        </label>
      )}
      <input
        type={type}
        disabled={disabled}
        placeholder={showPlaceHolderText ? placeholder : undefined}
        id={label}
        className={cn(
          "shadow-sm border text-neutral-900 focus:outline-none focus:ring-2 w-full",
          sizeClasses[size],
          radiusClasses[radius],
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50"
            : ` ${borderColor} ${GenerateFocusBorderColor(focusBorderColor)} bg-white`,
          disabled && "bg-gray-100 text-gray-500 cursor-not-allowed"
        )}
      />
      {helperText && (
        <p
          className={cn(
            "text-xs mt-1",
            error ? "text-red-600" : "text-gray-500"
          )}
        >
          {showHelperText && helperText}
        </p>
      )}
    </div>
  );
}
export function GenerateFocusBorderColor(borderColor) {
  const parts = borderColor.split("-");
  if (parts.length < 3) return "border-indigo-500"; // fallback
  const [, hue, shade] = parts;
  return cn(`focus:border-${hue}-${shade} focus:ring-${hue}-${shade}`);
}

export default Input;
