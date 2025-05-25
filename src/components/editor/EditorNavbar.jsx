import { Monitor, Smartphone, Tablet, X } from "lucide-react";
import React from "react";
import CopyCodeButton from "../CopyCodeButton";

function EditorNavbar({ setViewport, setResponsiveMode, responsiveMode }) {
  const handlePreviewClick = (device) => {
    setViewport(device);
    setResponsiveMode(true);
  };

  return (
    <header className="h-12 px-4 flex items-center justify-between border-b border-border bg-surface">
      <div className="Logo">Logo</div>

      <div className="right-side-content flex items-center gap-6">
        {/* If in preview mode, show Exit button */}
        {responsiveMode && (
          <button
            onClick={() => setResponsiveMode(false)}
            title="Exit Preview"
            className="flex items-center gap-1 text-red-500 border px-2 py-1 rounded-md border-red-300"
          >
            <X size={12} />
            <span className="text-sm">Exit Preview</span>
          </button>
        )}

        <div className="flex items-center gap-2">
          <button onClick={() => handlePreviewClick("mobile")} title="Mobile">
            <Smartphone size={20} />
          </button>
          <button onClick={() => handlePreviewClick("tablet")} title="Tablet">
            <Tablet size={20} />
          </button>
          <button onClick={() => handlePreviewClick("desktop")} title="Desktop">
            <Monitor size={20} />
          </button>
        </div>
        <CopyCodeButton />
      </div>
    </header>
  );
}

export default EditorNavbar;
