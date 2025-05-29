import { alertStyles, widthClass } from "@/utility/AlertClasses";
import { radiusClasses } from "@/utility/globalClassName";
import React from "react";

function Alert({
  type = "success",
  message = "Operation completed successfully!",
  showIcon = true,
  showDismiss = true,
  padding = "md",
  borderAccent = "left",
  width = "lg",
  radius = "none",
}) {
  const style = alertStyles[type];
  const paddingClass = padding === "md" ? "p-4" : "p-3";
  const borderClass =
    borderAccent === "left"
      ? `border-l-4 ${style.border}`
      : borderAccent === "top"
        ? `border-t-4 ${style.border}`
        : borderAccent === "none"
          ? "border-none"
          : "";

  return (
    <div
      className={`${style.bg} ${borderClass} ${paddingClass} ${widthClass[width] || "w-full"} 
      ${radiusClasses[radius]}`}
    >
      <div className="flex items-center">
        {showIcon && (
          <div className={`flex-shrink-0 ${style.text} text-sm`}>
            {style.icon}
          </div>
        )}
        <div className="ml-3 flex-1">
          <p className={`text-sm ${style.text}`}>{message}</p>
        </div>
        {showDismiss && (
          <button className={`${style.text} ml-3`} aria-label="Dismiss">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x w-4 h-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Alert;
