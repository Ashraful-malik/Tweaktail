"use client";
import { Monitor, Moon, Smartphone, Sun, Tablet, X } from "lucide-react";
import React from "react";
import CopyCodeButton from "../CopyCodeButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

function EditorNavbar({ setViewport, setResponsiveMode, responsiveMode }) {
  const { theme, setTheme } = useTheme();

  const handlePreviewClick = (device) => {
    setViewport(device);
    setResponsiveMode(true);
  };
  const logoImage =
    theme === "dark"
      ? "/assets/images/logo-white.svg"
      : "/assets/images/logo.svg";
  return (
    <header className="h-12 px-4 flex items-center justify-between border-b border-border bg-surface">
      <Link href="/" className="Logo px-4">
        <Image src={logoImage} width={30} height={30} alt="TweakTail Logo" />
      </Link>

      <div className="right-side-content flex items-center gap-6 pl-4 ">
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
        {/* review mode buttons */}
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
      </div>

      <div className="flex items-center gap-2">
        <CopyCodeButton />

        {/* Theme switcher */}
        {theme === "dark" ? (
          <button className="auto" onClick={() => setTheme("light")}>
            <Sun />
          </button>
        ) : (
          <button className="auto" onClick={() => setTheme("dark")}>
            <Moon />
          </button>
        )}
      </div>
    </header>
  );
}

export default EditorNavbar;
