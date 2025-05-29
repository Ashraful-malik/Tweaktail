"use client";
import React from "react";
import {
  shadowClasses,
  borderClasses,
  radiusClasses,
  widthClasses,
  paddingClasses,
  gapClasses,
} from "@/utility/globalClassName";
import { clsx } from "clsx";
function Card({
  header = true,
  body = true,
  footer = true,
  width = "md",
  padding = "sm",
  gap = "none",
  bgColor = "bg-white",
  border = "none",
  borderColor = "none",
  title = "10 Tips for Better Productivity",
  description = "Discover proven strategies to boost your efficiency and get more done in less time.",
  shadow = "md",
  hoverEffect = "lg",
  radius = "xl",
}) {
  return (
    <>
      <div
        className={clsx(
          widthClasses[width],
          bgColor,
          radiusClasses[radius],
          shadowClasses[shadow],
          borderClasses[border],
          {
            [borderColor]: border !== "none",
            [`hover:${shadowClasses[hoverEffect]}`]: hoverEffect !== "none",
          },
          "overflow-hidden transition-shadow duration-300"
        )}
      >
        {header && (
          <img
            className="w-full h-48 object-cover"
            src="https://picsum.photos/1280/720"
            alt="Blog post"
          />
        )}

        <div
          className={`${paddingClasses[padding]} ${gapClasses[gap]} flex flex-col `}
        >
          {body && (
            <>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Jun 12, 2023</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2 overflow-hidden">
                {description}
              </p>
            </>
          )}
          {footer && (
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://avatar.iran.liara.run/public"
                  alt="Author"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sarah Johnson
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Read more →
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
