import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { useEditor } from "@/context/EditorContext";

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  desktop: "100%",
};

function IframeResponsivePreview({ viewport, responsiveMode }) {
  const [iframeWidth, setIframeWidth] = useState(deviceSizes[viewport]);
  const [animate, setAnimate] = useState("enter");
  const { componentCode } = useEditor();

  useEffect(() => {
    setIframeWidth(deviceSizes[viewport]);
  }, [viewport]);

  // Animate in or out
  useEffect(() => {
    if (responsiveMode) {
      setAnimate("enter");
    } else {
      setAnimate("exit");
    }
  }, [responsiveMode]);

  return (
    <div className="flex justify-center p-4 relative">
      {responsiveMode && (
        <div className="absolute top-2 right-4 flex items-center gap-2 bg-gray-100 rounded-lg border px-2 py-1 z-10">
          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
          <span className="text-sm">Responsive mode</span>
        </div>
      )}

      <iframe
        title="Preview"
        style={{
          width: iframeWidth,
          height: "100vh",
          border: "1px solid #ccc",
          background: "white",
          transition: "all 0.3s ease",
          transform: animate === "enter" ? "scale(1)" : "scale(0.95)",
          opacity: animate === "enter" ? 1 : 0,
        }}
        className="shadow-md rounded-md"
        srcDoc={`<!DOCTYPE html>
          <html lang="en">
            <script src="https://cdn.tailwindcss.com"></script>
            <head>
              <style>body{margin:0;padding:1rem;font-family:sans-serif;}</style>
            </head>
            <body>${componentCode}</body>
          </html>`}
      />
    </div>
  );
}

export default IframeResponsivePreview;
