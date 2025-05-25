"use client";
// ============================== Delete it later===============================
import ColorPicker from "@/components/ui/EditedColorPicker";
import MyColorPicker from "@/components/ui/ColorPicker";
import { useState } from "react";

export default function ComponentEditor() {
  const [bgColor, setBgColor] = useState("bg-blue-500");
  const [textColor, setTextColor] = useState("text-white");
  console.log("bgColor", bgColor);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-green-50 h-screen">
      {/* Property Panel (Compact) */}
      <div className="space-y-4">
        <h2 className="font-bold">Button Properties</h2>
        <MyColorPicker
          label={"Background"}
          onChange={setBgColor}
          type="bg"
          value={bgColor}
        />

        {/* <ColorPicker
          value={bgColor}
          onChange={setBgColor}
          label="Background"
          type="bg"
        /> */}

        {/* <ColorPicker
          value={textColor}
          onChange={setTextColor}
          label="Text"
          type="text"
        /> */}

        {/* Other compact property controls... */}
      </div>

      {/* Preview Area (2/3 width) */}
      <div className="md:col-span-2 flex items-center justify-center">
        <button className={`px-6 py-3 rounded-lg ${bgColor} ${textColor}`}>
          Preview Button
        </button>
      </div>
    </div>
  );
}
