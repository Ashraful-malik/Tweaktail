"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ButtonEditor() {
  const [buttonProps, setButtonProps] = useState({
    size: "md",
    width: "auto",
    radius: "md",
    bgColor: "blue-500",
    textColor: "white",
    text: "Click me",
    icon: "",
    iconPosition: "left",
    isLoading: false,
    isDisabled: false,
    shadow: "none",
    border: "none",
  });

  const sizes = ["xs", "sm", "md", "lg"];
  const widths = ["auto", "full"];
  const radii = ["none", "sm", "md", "lg", "full"];
  const colors = ["blue-500", "red-500", "green-500", "gray-500", "purple-500"];
  const textColors = ["white", "black", "gray-800"];
  const icons = ["", "arrow", "download"];
  const shadows = ["none", "sm", "md"];
  const borders = ["none", "1", "2"];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center p-8 border rounded-lg bg-gray-50">
          <Button {...buttonProps} />
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Button Editor</h1>

          {/* Layout Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Layout</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Size</label>
                <select
                  value={buttonProps.size}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, size: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Width</label>
                <select
                  value={buttonProps.width}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, width: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {widths.map((width) => (
                    <option key={width} value={width}>
                      {width.charAt(0).toUpperCase() + width.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Corner Radius</label>
                <select
                  value={buttonProps.radius}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, radius: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {radii.map((radius) => (
                    <option key={radius} value={radius}>
                      {radius.charAt(0).toUpperCase() + radius.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Colors</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Background</label>
                <select
                  value={buttonProps.bgColor}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, bgColor: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Text Color</label>
                <select
                  value={buttonProps.textColor}
                  onChange={(e) =>
                    setButtonProps({
                      ...buttonProps,
                      textColor: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                >
                  {textColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Content</h2>
            <div>
              <label className="block mb-2">Button Text</label>
              <input
                type="text"
                value={buttonProps.text}
                onChange={(e) =>
                  setButtonProps({ ...buttonProps, text: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Icon</label>
                <select
                  value={buttonProps.icon}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, icon: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {icons.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon
                        ? icon.charAt(0).toUpperCase() + icon.slice(1)
                        : "None"}
                    </option>
                  ))}
                </select>
              </div>

              {buttonProps.icon && (
                <div>
                  <label className="block mb-2">Icon Position</label>
                  <select
                    value={buttonProps.iconPosition}
                    onChange={(e) =>
                      setButtonProps({
                        ...buttonProps,
                        iconPosition: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* States & Effects */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">States & Effects</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="loading"
                  checked={buttonProps.isLoading}
                  onChange={(e) =>
                    setButtonProps({
                      ...buttonProps,
                      isLoading: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="loading">Loading State</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="disabled"
                  checked={buttonProps.isDisabled}
                  onChange={(e) =>
                    setButtonProps({
                      ...buttonProps,
                      isDisabled: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="disabled">Disabled</label>
              </div>

              <div>
                <label className="block mb-2">Shadow</label>
                <select
                  value={buttonProps.shadow}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, shadow: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {shadows.map((shadow) => (
                    <option key={shadow} value={shadow}>
                      {shadow.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Border</label>
                <select
                  value={buttonProps.border}
                  onChange={(e) =>
                    setButtonProps({ ...buttonProps, border: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  {borders.map((border) => (
                    <option key={border} value={border}>
                      {border === "none" ? "None" : `${border}px`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Code Display */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Generated Code</h2>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`<button class="${[
                  `px-${
                    buttonProps.size === "xs"
                      ? 2
                      : buttonProps.size === "sm"
                      ? 3
                      : buttonProps.size === "md"
                      ? 4
                      : 6
                  }`,
                  `py-${
                    buttonProps.size === "xs"
                      ? 1
                      : buttonProps.size === "sm"
                      ? 1.5
                      : buttonProps.size === "md"
                      ? 2
                      : 3
                  }`,
                  `text-${
                    buttonProps.size === "xs"
                      ? "xs"
                      : buttonProps.size === "sm"
                      ? "sm"
                      : buttonProps.size === "md"
                      ? "base"
                      : "lg"
                  }`,
                  buttonProps.width === "full" ? "w-full" : "w-auto",
                  `rounded-${buttonProps.radius}`,
                  `bg-${buttonProps.bgColor}`,
                  `text-${buttonProps.textColor}`,
                  buttonProps.shadow !== "none"
                    ? `shadow${buttonProps.shadow === "sm" ? "-sm" : ""}`
                    : "",
                  buttonProps.border !== "none"
                    ? `border${buttonProps.border === "2" ? "-2" : ""} border-${
                        buttonProps.bgColor
                      }`
                    : "",
                  `hover:bg-${getDarkerShade(buttonProps.bgColor)}`,
                  "focus:outline-none focus:ring-2",
                  `focus:ring-${buttonProps.bgColor}-300`,
                  "transition-colors duration-200",
                  "flex items-center justify-center gap-2",
                  buttonProps.isDisabled ? "opacity-50 cursor-not-allowed" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}"
  ${buttonProps.isDisabled ? "disabled" : ""}
>
  ${buttonProps.isLoading ? '<LoadingIcon className="animate-spin" />' : ""}
  ${
    !buttonProps.isLoading &&
    buttonProps.icon &&
    buttonProps.iconPosition === "left"
      ? `<Icon className="inline" />`
      : ""
  }
  ${buttonProps.text}
  ${
    !buttonProps.isLoading &&
    buttonProps.icon &&
    buttonProps.iconPosition === "right"
      ? `<Icon className="inline" />`
      : ""
  }
</button>`}
              </pre>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    document.querySelector("pre")?.textContent || ""
                  )
                }
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm"
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getDarkerShade(color) {
  const [hue, shade] = color.split("-");
  const newShade = Math.min(parseInt(shade) + 100, 900);
  return `${hue}-${newShade}`;
}
