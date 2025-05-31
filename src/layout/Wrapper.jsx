"use client";
import React, { useState, useEffect } from "react";
import LeftComponentPanel from "../components/editor/LeftComponentPanel";
import RightEditingPanel from "../components/editor/RightEditingPanel";
import EditorNavbar from "../components/editor/EditorNavbar";
import IframeResponsivePreview from "@/components/IframeResponsivePreview";

function Wrapper({ children }) {
  const [viewport, setViewport] = useState("desktop");
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Sync showPreview with responsiveMode for entry/exit animations
  useEffect(() => {
    if (responsiveMode) {
      setShowPreview(true);
    } else {
      // Delay unmount to allow exit animation
      const timeout = setTimeout(() => setShowPreview(false), 300); // match exit animation duration
      return () => clearTimeout(timeout);
    }
  }, [responsiveMode]);

  return (
    <div className="min-h-screen ">
      <div className="sm:hidden  top-6 bg-green-100 dark:bg-green-500 p-2 w-full ">
        <p>
          TweakTail is best experienced on a larger screen. Please use a desktop
          or tablet for full editing capabilities.
        </p>
      </div>
      <EditorNavbar
        setViewport={setViewport}
        setResponsiveMode={setResponsiveMode}
        responsiveMode={responsiveMode}
      />
      <div className="flex w-full">
        <LeftComponentPanel responsiveMode={responsiveMode} />

        <div className="flex-1 bg-bg">
          {showPreview ? (
            <IframeResponsivePreview
              viewport={viewport}
              responsiveMode={responsiveMode}
            >
              {children}
            </IframeResponsivePreview>
          ) : (
            children
          )}
        </div>

        <RightEditingPanel responsiveMode={responsiveMode} />
      </div>

      {/* mobile message */}
    </div>
  );
}

export default Wrapper;
