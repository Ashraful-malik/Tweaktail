"use client";
import ColorPicker from "@/components/ui/ColorPicker";
import { GenerateFocusBorderColor } from "@/components/ui/Input";
import { useEditor } from "@/context/EditorContext";
import { radiusClasses, sizeClasses } from "@/utility/globalClassName";
import { cn } from "@/utility/tm";
import React, { useEffect, useState } from "react";

const inputTypeOptions = [
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
  { value: "password", label: "Password" },
  { value: "tel", label: "Tel" },
  { value: "url", label: "Url" },
  { value: "search", label: "Search" },
  { value: "number", label: "Number" },
];
function InputEditor() {
  const { setComponentProps, setComponentCode } = useEditor();
  const [config, setConfig] = useState({
    label: "username",
    placeholder: "",
    type: "text", // "text", "email", "password","tel","url","search","number",
    size: "md",
    radius: "md",
    disabled: false,
    error: false,
    helperText: "",
    fullWidth: false,
    showLabel: true,
    showHelperText: false,
    showPlaceHolderText: false,
    labelTextColor: "text-neutral-700",
    focusBorderColor: "border-blue-500",
    borderColor: "border-neutral-200 ",
  });

  const handleChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };
  const inputBoxClass = cn(
    "shadow-sm border text-neutral-900 focus:outline-none focus:ring-2 w-full",
    sizeClasses[config.size],
    radiusClasses[config.radius],
    config.error
      ? "border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50"
      : `${config.borderColor} ${GenerateFocusBorderColor(config.focusBorderColor)} bg-white`,
    config.disabled && "bg-gray-100 text-gray-500 cursor-not-allowed"
  );

  useEffect(() => {
    setComponentProps(config);
    const html = `
       <div class=${cn(config.fullWidth ? "w-full" : "max-w-md")}>
          ${
            config.showLabel
              ? `
              <label
                for=${config.label}
                class="block text-sm font-medium text-neutral-700 mb-1 "
              >
                ${config.showLabel ? config.label : ""}
              </label>
            `
              : ""
          }
          <input
            type=${config.type}
            ${config.disabled ? "disabled" : ""}
            ${config.showPlaceHolderText ? `placeholder="${config.placeholder}" ` : ""}
            id="${config.label}"
            class="${inputBoxClass}"
              
          />
          ${
            config.helperText
              ? `
              <p
                class="${cn(
                  "text-xs mt-1",
                  config.error ? "text-red-600" : "text-gray-500"
                )}"

              >
                ${config.showHelperText ? config.helperText : ""}
              </p>
            `
              : ""
          }
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
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="showLogo"
              id="showLogo"
              onChange={(e) => handleChange("fullWidth", e.target.checked)}
              checked={config.fullWidth}
            />
            <label className="text-sm">Full Width</label>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm ">Size</p>
            <select
              value={config.size}
              onChange={(e) => handleChange("size", e.target.value)}
              className="border border-border p-1 rounded w-full text-sm bg-panel"
              title="width of the card"
            >
              {Object.entries(sizeClasses).map(([key, value]) => (
                <option key={key}>{key}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm ">Type</p>
            <select
              value={config.type}
              onChange={(e) => handleChange("type", e.target.value)}
              className="border border-border p-1 rounded w-full text-sm bg-panel"
              title="width of the card"
            >
              {inputTypeOptions.map((w) => (
                <option key={w.value}>{w.label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="text-sm">Roundness</p>
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
        </div>
        {/* color */}
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Color</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* background color  */}
            <ColorPicker
              label={"Label text color"}
              value={config.labelTextColor}
              type="text"
              onChange={(color) => handleChange("labelTextColor", color)}
            />
            <ColorPicker
              label={"Border color"}
              value={config.borderColor}
              type="border"
              onChange={(color) => handleChange("borderColor", color)}
            />

            {/* text color  */}
            <ColorPicker
              label={"focus border color"}
              value={config.focusBorderColor}
              type="border"
              onChange={(color) => handleChange("focusBorderColor", color)}
            />
          </div>
        </div>
        <div className=" w-full space-y-2">
          <h2 className=" font-medium">Content</h2>
          <div className="flex items-center gap-2 w-full flex-wrap ">
            {/* label checkbox */}
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="showLogo"
                id="showLogo"
                onChange={(e) => handleChange("showLabel", e.target.checked)}
                checked={config.showLabel}
              />
              <label className="text-sm"> Label</label>
            </div>
            {/* showHelperText checkbox*/}
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="showLogo"
                id="showLogo"
                onChange={(e) =>
                  handleChange("showHelperText", e.target.checked)
                }
                checked={config.showHelperText}
              />
              <label className="text-sm">Helper text</label>
            </div>
            {/* showHelperText placeholder*/}
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="showLogo"
                id="showLogo"
                onChange={(e) =>
                  handleChange("showPlaceHolderText", e.target.checked)
                }
                checked={config.showPlaceHolderText}
              />
              <label className="text-sm">placeholder text</label>
            </div>
            {/* label text*/}
            {config.showLabel && (
              <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Label Text</p>
                <input
                  type="text"
                  value={config.label}
                  onChange={(e) => handleChange("label", e.target.value)}
                  className="border border-border p-1 rounded w-full text-sm bg-panel"
                  title="label text"
                />
              </div>
            )}

            {/* helper text */}
            {config.showHelperText && (
              <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Helper Text</p>
                <input
                  type="text"
                  value={config.helperText}
                  onChange={(e) => handleChange("helperText", e.target.value)}
                  className="border border-border p-1 rounded w-full text-sm bg-panel"
                  title="helper text"
                />
              </div>
            )}
            {/* placeholder text */}
            {config.showPlaceHolderText && (
              <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">placeholder Text</p>
                <input
                  type="text"
                  value={config.placeholder}
                  onChange={(e) => handleChange("placeholder", e.target.value)}
                  className="border border-border p-1 rounded w-full text-sm bg-panel"
                  title="placeholder text"
                />
              </div>
            )}
          </div>
        </div>

        {/* state adn effect */}
        <div className=" w-full space-y-2">
          <h2 className="font-medium">States & Effects</h2>
          <div className="  flex flex-col   gap-2 ">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.disabled}
                  onChange={(e) => handleChange("disabled", e.target.checked)}
                />
                Disabled
              </label>
            </div>
          </div>
          <div className="  flex flex-col   gap-2 ">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.error}
                  onChange={(e) => handleChange("error", e.target.checked)}
                />
                Error
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputEditor;
