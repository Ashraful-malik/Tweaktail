"use client";
import { ChevronDown, FileX, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
const colorPalette = {
  gray: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  red: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  blue: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  green: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  yellow: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  purple: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  pink: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};

function ColorPicker({ value, onChange, label = "Color", type = "bg" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState("blue");
  const popupRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Parse current value
  useEffect(() => {
    if (value) {
      const parts = value.split("-");
      if (parts.length === 3) {
        const family = parts[1];
        if (colorPalette[family]) {
          setSelectedFamily(family);
        }
      }
    }
  }, [value]);

  const handleSelect = (family, shade) => {
    onChange(`${type}-${family}-${shade}`);
    setIsOpen(false); // Close after selection
  };

  return (
    <div className="relative " ref={popupRef}>
      {/* Compact Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        <div
          className={`w-5 h-5 rounded-sm ${
            value || "bg-gray-300"
          } border border-gray-300`}
        />
        <span className="text-sm">{label}</span>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Popup Picker */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">{label} Picker</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          {/* Color Families */}
          <div className="flex flex-wrap gap-1 mb-3">
            {Object.keys(colorPalette).map((family) => (
              <button
                key={family}
                onClick={() => setSelectedFamily(family)}
                className={`px-2 py-1 text-xs rounded ${
                  selectedFamily === family
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {family}
              </button>
            ))}
          </div>

          {/* Color Shades */}
          <div className="grid grid-cols-8 gap-1">
            {colorPalette[selectedFamily].map((shade) => (
              <button
                key={shade}
                onClick={() => handleSelect(selectedFamily, shade)}
                className={`h-7 rounded-sm ${
                  value === `${type}-${selectedFamily}-${shade}`
                    ? "ring-2 ring-offset-1 ring-blue-500"
                    : "hover:ring-1 hover:ring-gray-300"
                } bg-${selectedFamily}-${shade}`}
                aria-label={`${selectedFamily}-${shade}`}
              />
            ))}
          </div>

          {/* Current Selection */}
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs flex justify-between">
            <span className="text-gray-500">Selected:</span>
            <code className="bg-gray-100 px-2 py-1 rounded">
              {value || "none"}
            </code>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
