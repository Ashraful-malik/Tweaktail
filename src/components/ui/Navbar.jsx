import { shadowClasses } from "@/utility/globalClassName";
import React from "react";

function Navbar({
  links = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "Services", active: false },
    { name: "Contact", active: false },
  ],
  bgColor = "bg-stone-50",
  textColor = "text-neutral-500",
  buttonColor = "bg-blue-800",
  activeLinkColor = "text-blue-600",
  showActionButton = true,
  showLogo = true,
  showLinks = true,
  shadow = "md",
}) {
  return (
    <nav className={`${bgColor} ${shadowClasses[shadow]}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* <!-- Logo and main menu --> */}

          <div className="flex space-x-7">
            {showLogo && (
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-semibold text-gray-500 text-lg">
                    BrandName
                  </span>
                </a>
              </div>
            )}

            {/* <!-- Primary Navbar items --> */}
            {showLinks && (
              <div className="hidden md:flex items-center space-x-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`py-4 px-2 font-semibold ${textHoverColor(activeLinkColor)}
                     transition duration-300 ${
                       link.active
                         ? `border-b-4 ${borderColor(activeLinkColor)} ${activeLinkColor}`
                         : `${textColor}`
                     }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* <!-- Secondary Navbar items --> */}
          {showActionButton && (
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#"
                className={`py-2 px-2 font-medium ${textColor} rounded hover:${getDarkerShade(buttonColor)}
                   hover:text-white transition duration-300`}
              >
                Log In
              </a>
              <a
                href="#"
                className={`py-2 px-2 font-medium text-white ${buttonColor} rounded
                   hover:${getDarkerShade(buttonColor)} transition duration-300`}
              >
                Sign Up
              </a>
            </div>
          )}

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className={`w-6 h-6 ${textColor} ${textHoverColor(activeLinkColor)} transition duration-300`}
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu (hidden by default) --> */}
      {/* Use javascript to toggle the 'hidden' class on both the menu and the background */}
      <div className="hidden mobile-menu">
        <ul>
          <li>
            {showLinks && (
              <div className="hidden md:flex items-center space-x-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`py-4 px-2 font-semibold ${textHoverColor(activeLinkColor)}
                     transition duration-300 ${
                       link.active
                         ? `border-b-4 ${borderColor(activeLinkColor)} ${activeLinkColor}`
                         : `${textColor}`
                     }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>
        {showActionButton && (
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className={`py-2 px-2 font-medium ${textColor} rounded hover:${getDarkerShade(buttonColor)}
                   hover:text-white transition duration-300`}
            >
              Log In
            </a>
            <a
              href="#"
              className={`py-2 px-2 font-medium text-white ${buttonColor} rounded
                   hover:${getDarkerShade(buttonColor)} transition duration-300`}
            >
              Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// border color based on active link
function borderColor(textColor) {
  const parts = textColor.split("-");
  if (parts.length < 3) return "border-indigo-500"; // fallback
  const [, hue, shade] = parts;
  return `border-${hue}-${shade}`;
}

function textHoverColor(buttonColor) {
  const parts = buttonColor.split("-");
  if (parts.length < 3) return "text-indigo-500"; // fallback
  const [, hue, shade] = parts;
  return `hover:text-${hue}-${shade}`;
}
function getDarkerShade(buttonColor) {
  const parts = buttonColor.split("-");
  if (parts.length < 3) return bgColor;

  const [prefix, hue, shade] = parts;
  const numericShade = parseInt(shade);

  if (isNaN(numericShade)) return bgColor;

  if (numericShade >= 900) {
    return `${prefix}-${hue}-800`; // slightly lighter on hover
  }
  return `${prefix}-${hue}-${numericShade + 100}`;
}
export default Navbar;
