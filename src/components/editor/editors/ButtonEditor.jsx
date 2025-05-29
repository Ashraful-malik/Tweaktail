"use client";
import ColorPicker from "@/components/ui/ColorPicker";
import { useEditor } from "@/context/EditorContext";
import {
  borderClasses,
  radiusClasses,
  shadowClasses,
  sizeClasses,
} from "@/utility/globalClassName";
import { cn } from "@/utility/tm";
import React, { useEffect, useState } from "react";

function ButtonEditor() {
  const { setComponentProps, setComponentCode } = useEditor();

  const [config, setConfig] = useState({
    size: "md",
    width: "auto",
    radius: "md",
    bgColor: "bg-blue-500",
    textColor: "text-white",
    text: "Click Me",
    isDisabled: false,
    shadow: "none",
    border: "none",
  });

  // TODO: Extract class generators later
  const generatedClasses = cn(
    sizeClasses[config.size],
    config.width === "full" ? "w-full" : "w-auto",
    radiusClasses[config.radius],
    config.textColor,
    config.bgColor,
    config.shadow !== "none" && shadowClasses[config.shadow],
    config.border !== "none" && borderClasses[config.border],
    config.border !== "none" && borderColor(config.bgColor),
    `hover:${getDarkerShade(config.bgColor)}`,
    `focus:outline-none`,
    `focus:ring-2`,
    config.bgColor && getFocusRing(config.bgColor),
    "transition-colors duration-200",
    "flex items-center justify-center",
    !config.isDisabled && "cursor-pointer",
    config.isDisabled && "cursor-not-allowed opacity-50"
  );

  useEffect(() => {
    setComponentProps(config);
    // Generate html string for copy.
    const html = `<button class="${generatedClasses}">${config.text}</button>`;
    setComponentCode(html);
  }, [config]);

  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row mb-5">
      {/* Edit control */}
      <div className="w-full space-y-4">
        {/* section Layout */}
        <div className=" w-full space-y-2 ">
          <h2 className="font-medium">Layout</h2>
          <div className=" flex flex-col gap-2 flex-wrap">
            {/*size  */}
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Size</p>
              <select
                value={config.size}
                onChange={(e) => handleChange("size", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["xs", "sm", "md", "lg", "xl"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            {/* width */}
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Width</p>
              <select
                value={config.width}
                onChange={(e) => handleChange("width", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["auto", "full"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
            {/* radius */}
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Corner Radius</p>
              <select
                value={config.radius}
                onChange={(e) => handleChange("radius", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["none", "sm", "md", "lg", "full"].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Colors Section*/}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Colors</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* background color  */}
            <ColorPicker
              label={"Background Colour"}
              value={config.bgColor}
              type="bg"
              onChange={(color) => handleChange("bgColor", color)}
            />
            {/* text color  */}
            <ColorPicker
              label={"Text Colour"}
              value={config.textColor}
              type="text"
              onChange={(color) => handleChange("textColor", color)}
            />
          </div>
        </div>

        {/* content Section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Content</h2>
          <div className=" flex flex-col gap-1">
            <p className="text-sm">Button Text</p>
            <input
              type="text"
              className="border border-border p-1 rounded w-full text-sm"
              value={config.text}
              onChange={(e) => {
                handleChange("text", e.target.value);
              }}
            />
          </div>
        </div>

        {/* disabled */}
        <div className=" w-full space-y-2">
          <h2 className="font-medium">States & Effects</h2>
          <div className="  flex flex-col   gap-2 ">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.isDisabled}
                  onChange={(e) => handleChange("isDisabled", e.target.checked)}
                />
                Disabled
              </label>
            </div>
            {/* shadow */}
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Shadow</p>
              <select
                value={config.shadow}
                onChange={(e) => handleChange("shadow", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["none", "sm", "md", "lg"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* border */}
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Border</p>
              <select
                value={config.border}
                onChange={(e) => handleChange("border", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["none", "1", "2", "3"].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ButtonEditor;
function getFocusRing(bgColor) {
  const parts = bgColor.split("-");
  if (parts.length < 3) return "";
  const [, hue] = parts;
  return `focus:ring-${hue}-300`;
}

// Darker shade for hover
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

function borderColor(bgColor) {
  const parts = bgColor.split("-");
  if (parts.length < 3) return "border-indigo-500"; // fallback
  const [, hue] = parts;
  return `border-${hue}-500`;
}
