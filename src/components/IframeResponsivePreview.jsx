import React, { useEffect, useState } from "react";
import { useEditor } from "@/context/EditorContext";
import { useTheme } from "next-themes";

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  desktop: "100%",
};

function IframeResponsivePreview({ viewport, responsiveMode }) {
  const [iframeWidth, setIframeWidth] = useState(deviceSizes[viewport]);
  const [animate, setAnimate] = useState("enter");

  const { componentCode } = useEditor();
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setIframeWidth(deviceSizes[viewport]);
  }, [viewport]);

  useEffect(() => {
    setAnimate(responsiveMode ? "enter" : "exit");
  }, [responsiveMode]);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <div className="flex justify-center p-4 relative  ">
      {responsiveMode && (
        <div className="absolute top-2 right-4 flex items-center gap-2 bg-bg rounded-lg border border-border px-2 py-1 z-10">
          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
          <span className="text-sm">Responsive mode</span>
        </div>
      )}

      <iframe
        title="Preview"
        style={{
          width: iframeWidth,
          height: "100vh",
          background: resolvedTheme === "dark" ? "black" : "#ffffff",
          transition: "all 0.3s ease",
          transform: animate === "enter" ? "scale(1)" : "scale(0.95)",
          opacity: animate === "enter" ? 1 : 0,
        }}
        className="shadow-md rounded-md border border-border"
        srcDoc={`<!DOCTYPE html>
          <html lang="en" class="${resolvedTheme === "dark" ? "dark" : ""}">
            <head>
              <script src="https://cdn.tailwindcss.com"></script>
              <script>
                tailwind.config = { darkMode: "class" }
              </script>
              <style>
                body {
                  margin: 0;
                  padding: 1rem;
                  font-family: sans-serif;
                }
              </style>
            </head>
            <body class="${
              resolvedTheme === "dark"
                ? "bg-[#1e1e1e] text-white"
                : "bg-white text-black"
            }">
              ${componentCode}
            </body>
          </html>`}
      />
    </div>
  );
}

export default IframeResponsivePreview;
