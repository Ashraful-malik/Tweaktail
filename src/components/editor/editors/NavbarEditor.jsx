"use client";
import ColorPicker from "@/components/ui/ColorPicker";
import { useEditor } from "@/context/EditorContext";
import { shadowClasses } from "@/utility/globalClassName";
import { cn } from "@/utility/tm";
import React, { useEffect, useState } from "react";

function NavbarEditor() {
  const { setComponentProps, setComponentCode } = useEditor();

  const [config, setConfig] = useState({
    links: [
      { name: "Home", active: true },
      { name: "About", active: false },
      { name: "Services", active: false },
      { name: "Contact", active: false },
    ],
    bgColor: "bg-white",
    textColor: "text-neutral-500",
    buttonColor: "bg-blue-600",
    activeLinkColor: "text-blue-600",
    showActionButton: true,
    showLogo: true,
    showLinks: true,
    shadow: "md",
  });

  // dynamic classes
  const navbarClasses = cn(
    config.bgColor,
    shadowClasses[config.shadow],
    "w-full"
  );
  const linkBaseClass = "py-4 px-2 font-semibold transition duration-300";
  const linkTextClass = config.textColor;
  const activeLinkClass = cn(
    borderColor(config.activeLinkColor),
    config.activeLinkColor,
    "border-b-4"
  );
  const inactiveLinkHover = textHoverColor(config.buttonColor);
  const buttonClass = cn(
    "py-2 px-2 font-medium text-white rounded transition duration-300",
    config.buttonColor
  );
  const loginClass = cn(
    "py-2 px-2 font-medium rounded transition duration-300",
    config.textColor,
    textHoverColor(config.buttonColor)
  );
  const hamburgerMobileMenuButton = cn(
    textHoverColor(config.buttonColor),
    config.textColor
  );

  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    setComponentProps(config);

    const htmlLinks = config.links
      .map(
        (link) => `
    <a href="#" class="${cn(
      linkBaseClass,
      link.active ? activeLinkClass : cn(linkTextClass, inactiveLinkHover)
    )}">
      ${link.name}
    </a>`
      )
      .join("\n");

    // Generate the HTML for the navigation bar
    const html = `
  <nav class="${navbarClasses}">
   <div class="max-w-6xl mx-auto px-4">
   <div class="flex justify-between">
      <!-- Left: Logo and links -->
      <div class="flex space-x-7">
        ${
          config.showLogo
            ? `
        <div>
          <a href="#" class="flex items-center py-4 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="font-semibold text-gray-500 text-lg">BrandName</span>
          </a>
        </div>`
            : ""
        }
        
      <!-- Links -->
        ${
          config.showLinks
            ? `
        <div class="hidden md:flex items-center space-x-1">
          ${htmlLinks}
        </div>`
            : ""
        }
      </div>

      <!-- Right: Buttons -->
      ${
        config.showActionButton
          ? `
      <div class="hidden ${config.mobileBreakpoint}:flex items-center space-x-3">
        <a href="#" class="${loginClass}">Log In</a>
        <a href="#" class="${buttonClass}">Sign Up</a>
      </div>`
          : ""
      }

      
      <!-- Mobile button -->
      <div class="md:hidden flex items-center">
        <button class="outline-none mobile-menu-button">
          <svg class="w-6 h-6 ${hamburgerMobileMenuButton} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- mobile menu -->
  ${
    config.showLinks
      ? `
    <div class="hidden mobile-menu px-4 pb-4 md:hidden">
    <ul class="space-y-2">
      ${htmlLinks}
    </ul>
  </div>`
      : ""
  }
</nav>
    `;
    setComponentCode(html);
  }, [config]);

  return (
    <div className="flex flex-col gap-4 md:flex-row mb-5">
      <div className="w-full space-y-4">
        {/* Layout Section */}
        <div className="w-full space-y-2">
          <h2 className=" font-medium">Layout</h2>

          {/* active link */}
          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Active link</p>
              <select
                value={config.links.findIndex((link) => link.active)}
                onChange={(e) => {
                  const selectedIndex = Number(e.target.value);
                  handleChange(
                    "links",
                    config.links.map((link, index) => ({
                      ...link,
                      active: index === selectedIndex,
                    }))
                  );
                }}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="select active link"
              >
                {config.links.map((link, index) => (
                  <option key={index} value={index}>
                    {link.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Visibility</p>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="showLogo"
                    id="showLogo"
                    onChange={(e) => handleChange("showLogo", e.target.checked)}
                    checked={config.showLogo}
                  />
                  <label htmlFor="header"> Logo</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="links"
                    id="links"
                    checked={config.showLinks}
                    onChange={(e) =>
                      handleChange("showLinks", e.target.checked)
                    }
                  />
                  <label htmlFor="body">Links</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="footer"
                    id="footer"
                    checked={config.showActionButton}
                    onChange={(e) =>
                      handleChange("showActionButton", e.target.checked)
                    }
                  />
                  <label htmlFor="footer">Buttons</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Colors Section*/}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Colors</h2>
          <div
            className={`flex items-center gap-2 w-full flex-wrap ${config.border === "none" ? "opacity-20 cursor-not-allowed" : ""}`}
          >
            {/* bg color */}
            <ColorPicker
              label={"Background colour"}
              value={config.bgColor}
              type="bg"
              onChange={(color) => handleChange("bgColor", color)}
            />
            <ColorPicker
              label={"text colour"}
              value={config.textColor}
              type="text"
              onChange={(color) => handleChange("textColor", color)}
            />{" "}
            <ColorPicker
              label={"Active Link colour"}
              value={config.activeLinkColor}
              type="text"
              onChange={(color) => handleChange("activeLinkColor", color)}
            />
            <ColorPicker
              label={"Buttons colour"}
              value={config.buttonColor}
              type="bg"
              onChange={(color) => handleChange("buttonColor", color)}
            />
          </div>
        </div>
        {/* content section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Content</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* title */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Link Text</p>

              {config.links.map((link, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Link text"
                  className="border border-border p-1 rounded w-full text-sm bg-panel"
                  value={link.name}
                  onChange={(e) => {
                    const newLinks = [...config.links];
                    newLinks[index].name = e.target.value;
                    handleChange("links", newLinks);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* effect section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Effects</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* shadow */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Shadow</p>
              <select
                value={config.shadow}
                onChange={(e) => handleChange("shadow", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="Shadow effect on the card"
              >
                {["none", "sm", "md", "lg"].map((shadow) => (
                  <option key={shadow}>{shadow}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === Utility functions ===

// Derive border color from text color (e.g., "text-blue-500" → "border-blue-500")
function borderColor(textColor) {
  const parts = textColor.split("-");
  if (parts.length < 3) return "border-indigo-500";
  const [, hue, shade] = parts;
  return `border-${hue}-${shade}`;
}

// Create hover color from button color (e.g., "bg-blue-500" → "hover:text-blue-500")
function textHoverColor(buttonColor) {
  const parts = buttonColor.split("-");
  if (parts.length < 3) return "hover:text-indigo-500";
  const [, hue, shade] = parts;
  return `hover:text-${hue}-${shade}`;
}

// Slightly darken the button color on hover
function getDarkerShade(bgColor) {
  const parts = bgColor.split("-");
  if (parts.length < 3) return bgColor;

  const [prefix, hue, shade] = parts;
  const numericShade = parseInt(shade);

  if (isNaN(numericShade)) return bgColor;
  return `${prefix}-${hue}-${Math.min(numericShade + 100, 900)}`;
}

export default NavbarEditor;
