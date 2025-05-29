"use client";

import ColorPicker from "@/components/ui/ColorPicker";
import { useEditor } from "@/context/EditorContext";
import {
  borderClasses,
  gapClasses,
  paddingClasses,
  radiusClasses,
  shadowClasses,
  widthClasses,
} from "@/utility/globalClassName";
import { cn } from "@/utility/tm";
import React, { useEffect } from "react";

function CardEditor() {
  const { setComponentProps, setComponentCode } = useEditor();

  const [config, setConfig] = React.useState({
    header: true,
    body: true,
    footer: true,
    width: "md",
    padding: "sm",
    gap: "none",
    bgColor: "bg-white",
    border: "none",
    borderColor: "none",
    title: "10 Tips for Better Productivity",
    description:
      "Discover proven strategies to boost your efficiency and get more done in less time.",
    shadow: "md",
    hoverEffect: "lg",
    radius: "xl",
  });

  const cardClasses = cn(
    widthClasses[config.width],
    config.bgColor,
    radiusClasses[config.radius],
    shadowClasses[config.shadow],
    borderClasses[config.border],
    config.border !== "none" && config.borderColor,
    config.hoverEffect !== "none" &&
      `hover:${shadowClasses[config.hoverEffect]}`,
    "overflow-hidden transition-shadow duration-300"
  );

  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  // TODO: Work on how do i effectively generate the html string for copy.
  useEffect(() => {
    setComponentProps(config);
    // Generate html string for copy.
    const html = `
      <div class="${cardClasses}">
        ${
          config.header
            ? `
          <img class="w-full h-48 object-cover" src="https://picsum.photos/1280/720" alt="Blog post" />
        `
            : ""
        }
        <div class="${paddingClasses[config.padding]} ${
          gapClasses[config.gap]
        } flex flex-col">
          ${
            config.body
              ? `
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span>Jun 12, 2023</span>
              <span class="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">${config.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-2 overflow-hidden">${config.description}</p>
          `
              : ""
          }
          ${
            config.footer
              ? `
            <div class="flex justify-between items-center gap-2">
              <div class="flex items-center">
                <img class="w-8 h-8 rounded-full mr-2" src="https://avatar.iran.liara.run/public" alt="Author" />
                <span class="text-sm font-medium text-gray-700">Sarah Johnson</span>
              </div>
              <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Read more →</a>
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;
    setComponentCode(html);
  }, [config]);

  return (
    <div className="flex flex-col gap-4 md:flex-row mb-5">
      {/* Edit control */}
      <div className="w-full space-y-4">
        {/* section Layout */}
        <div className="w-full space-y-2 ">
          <h2 className="font-medium">Structure</h2>
          <div className=" flex flex-col gap-1">
            {/* section */}
            <p className="text-sm">Section</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="header"
                  id="header"
                  onChange={(e) => handleChange("header", e.target.checked)}
                  checked={config.header}
                />
                <label htmlFor="header"> Header</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="body"
                  id="body"
                  checked={config.body}
                  onChange={(e) => handleChange("body", e.target.checked)}
                />
                <label htmlFor="body">Body</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="footer"
                  id="footer"
                  checked={config.footer}
                  onChange={(e) => handleChange("footer", e.target.checked)}
                />
                <label htmlFor="footer">Footer</label>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Layout</h2>
          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Width</p>
              <select
                value={config.width}
                onChange={(e) => handleChange("width", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="width of the card"
              >
                {["sm", "md", "lg"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Padding</p>
              <select
                value={config.padding}
                onChange={(e) => handleChange("padding", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="padding around the card"
              >
                {["none", "sm", "md", "lg"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Gap (between sections)</p>
              <select
                value={config.gap}
                onChange={(e) => handleChange("gap", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="gap between sections"
              >
                {["none", "xs", "sm", "md"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Radius</p>
              <select
                value={config.radius}
                onChange={(e) => handleChange("radius", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="radius of the card"
              >
                {Object.entries(radiusClasses).map(([key, value]) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Colors Section*/}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Colors</h2>
          <div
            className={`flex items-center gap-2 w-full flex-wrap ${config.border === "none" ? "opacity-20 cursor-not-allowed" : ""}`}
          >
            {/* border color  */}

            <ColorPicker
              label={"Border"}
              value={config.borderColor}
              type="border"
              onChange={(color) => handleChange("borderColor", color)}
            />
          </div>
        </div>
        {/* content section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Content</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* title */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Title</p>
              <input
                type="text"
                placeholder="Enter title"
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                value={config.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>
            {/* description */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Description</p>
              <textarea
                placeholder="Enter description"
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                value={config.description}
                rows={3}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* effect section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Effects</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* border */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Border</p>
              <select
                value={config.border}
                onChange={(e) => handleChange("border", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["none", "1", "2", "3"].map((shadow) => (
                  <option key={shadow}>{shadow}</option>
                ))}
              </select>
            </div>
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
            {/* hover effect */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Hover Effect</p>
              <select
                value={config.hoverEffect}
                title="Hover Effect"
                onChange={(e) => handleChange("hoverEffect", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
              >
                {["none", "sm", "md", "lg", "xl"].map((hoverEffect) => (
                  <option key={hoverEffect}>{hoverEffect}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEditor;
