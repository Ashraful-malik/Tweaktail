import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ColorPallet = {
  neutral: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  gray: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  red: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  blue: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  green: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  yellow: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  purple: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  pink: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};
function ColorPicker({ onChange, label, type, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState("blue");
  const closeRef = useRef(null);
  const handleSelect = (family, shade) => {
    onChange(`${type}-${family}-${shade}`);
    setIsOpen(false);
  };

  //Closing dropDown menu
  useEffect(() => {
    function HandleClickOutside(event) {
      if (closeRef.current && !closeRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", HandleClickOutside);
    return () => document.removeEventListener("mousedown", HandleClickOutside);
  }, []);

  //Getting value from the parent component
  useEffect(() => {
    if (value) {
      const parts = value.split("-");
      if (parts.length === 3) {
        const family = parts[1];
        if (ColorPallet[family]) {
          setSelectedFamily(family);
        }
      }
    }
  }, [value]);
  return (
    <>
      <div
        className="flex items-center relative w-full max-w-lg"
        ref={closeRef}
      >
        {/* dropdown menu */}
        <div
          className=" bg-red flex   items-center  gap-1 p-1 border border-border bg-panel
          rounded-md cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${
              value || "bg-gray-800"
            } w-4 h-4 rounded-sm  text-center flex items-center ${
              type === "border" && `border-2 ${value}`
            }`}
          >
            {value?.startsWith("text") && (
              <p className={`text-sm font-bold text-center  ${value}`}>T</p>
            )}
          </div>
          <p className="text-sm">{label}</p>
          <ChevronDown
            className={`${
              isOpen ? "rotate-180" : ""
            }  transition-transform duration-300`}
          />
        </div>
        {/* Drop Down menu */}
        {isOpen && (
          <div className="absolute top-11 left-0 bg-surface border border-border  rounded-md shadow-lg p-4  z-40">
            {/* color family */}
            <div className="flex gap-2 flex-wrap">
              {Object.keys(ColorPallet).map((family) => {
                return (
                  <div
                    className={` flex flex-wrap  border border-border p-1
                    rounded-md text-xs cursor-pointer   ${
                      selectedFamily === family
                        ? "bg-primary text-text-onAccent"
                        : "bg-toolbar text-text-primary"
                    }`}
                    key={family}
                    onClick={() => setSelectedFamily(family)}
                  >
                    <p>{family}</p>
                  </div>
                );
              })}
            </div>

            {/* color shades */}
            <div className="flex gap-1 flex-wrap mt-2">
              {ColorPallet[selectedFamily].map((shade) => {
                return (
                  <div
                    className={`bg-${selectedFamily}-${shade} w-8 h-8 rounded-md cursor-pointer ${
                      value === `${type}-${selectedFamily}-${shade}`
                        ? "ring-2 ring-offset-1 ring-blue-500"
                        : "hover:ring-1 hover:ring-gray-300"
                    }`}
                    key={shade}
                    onClick={() => handleSelect(selectedFamily, shade)}
                  ></div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ColorPicker;
