"use client";
import { useEditor } from "@/context/EditorContext";
import { alertStyles, widthClass } from "@/utility/AlertClasses";
import { radiusClasses } from "@/utility/globalClassName";
import { cn } from "@/utility/tm";
import React, { useEffect, useState } from "react";

function AlertEditor() {
  const { setComponentProps, setComponentCode } = useEditor();

  const [config, setConfig] = useState({
    type: "success",
    message: "Operation completed successfully!",
    showIcon: true,
    showDismiss: true,
    padding: "md",
    borderAccent: "left",
    width: "lg",
    radius: "none",
  });

  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  // alert dynamic classes------------
  const style = alertStyles[config.type];
  const alertClass = cn(
    style.bg,
    {
      "border-l-4": config.borderAccent === "left",
      "border-t-4": config.borderAccent === "top",
      "border-none": config.borderAccent === "none",
    },
    style.border,
    config.padding === "md" ? "p-4" : "p-3",
    widthClass[config.width] || "w-full",
    radiusClasses[config.radius]
  );
  const textStyle = cn(style.text);

  useEffect(() => {
    setComponentProps(config);

    const html = `
      <div class="${alertClass}">
        <div class="flex items-center">
          ${
            config.showIcon
              ? `
              <div class="flex-shrink-0 ${textStyle} text-sm">
               ${cn(style.rawSvg)}
              </div>
             `
              : ""
          }
          <div class="ml-3 flex-1">
            <p class="text-sm ${textStyle}">${config.message}</p>
          </div>
          
          ${
            config.showDismiss
              ? `
            <button class="${textStyle} ml-3" aria-label="Dismiss">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-icon lucide-x w-4 h-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
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

        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Layout & Styling</h2>

          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Width</p>
              <select
                value={config.width}
                onChange={(e) => handleChange("width", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="width of the card"
              >
                {Object.entries(widthClass).map(([key, value]) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Type</p>
              <select
                value={config.type}
                onChange={(e) => handleChange("type", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="width of the card"
              >
                {["success", "info", "warning", "error"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>
          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Border position</p>
              <select
                value={config.borderAccent}
                onChange={(e) => handleChange("borderAccent", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="width of the card"
              >
                {["left", "top", "none"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>
          <div className=" w-full space-y-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-sm ">Padding</p>
              <select
                value={config.padding}
                onChange={(e) => handleChange("padding", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="width of the card"
              >
                {["sm", "md"].map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-sm">rounded</p>
            <select
              value={config.radius}
              onChange={(e) => handleChange("radius", e.target.value)}
              className="border border-border p-1 rounded w-full text-sm bg-panel"
              title="Shadow effect on the card"
            >
              {Object.entries(radiusClasses).map(([key, value]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm ">Visibility</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="showLogo"
                  id="showLogo"
                  onChange={(e) => handleChange("showIcon", e.target.checked)}
                  checked={config.showIcon}
                />
                <label className="text-sm"> Show icon</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="showLogo"
                  id="showLogo"
                  onChange={(e) =>
                    handleChange("showDismiss", e.target.checked)
                  }
                  checked={config.showDismiss}
                />
                <label className="text-sm"> Show Dismiss icon</label>
              </div>
            </div>
          </div>
        </div>
        {/* content section */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Content</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* title */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm">Alert Text</p>
              <input
                type="text"
                value={config.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="border border-border p-1 rounded w-full text-sm bg-panel"
                title="add alert text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertEditor;
