"use client";
import React, { createContext, useContext, useState } from "react";

const EditorContext = createContext();
export function EditorProvider({ children }) {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [componentProps, setComponentProps] = useState({});
  const [componentCode, setComponentCode] = useState("");
  const value = {
    selectedComponent,
    componentProps,
    setSelectedComponent,
    setComponentProps,
    componentCode,
    setComponentCode,
  };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within a EditorProvider");
  }
  return context;
}
