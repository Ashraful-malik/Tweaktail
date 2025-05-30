"use client";
import { useEditor } from "@/context/EditorContext";
import React, { useEffect } from "react";
import ButtonEditor from "./editors/ButtonEditor";
import NavbarEditor from "./editors/NavbarEditor";
import AlertEditor from "./editors/AlertEditor";
import CardEditor from "./editors/CardEditor";
import { usePathname } from "next/navigation";
import InputEditor from "./editors/InputEditor";

const componentEditorMap = {
  button: ButtonEditor,
  navbar: NavbarEditor,
  alert: AlertEditor,
  card: CardEditor,
  input: InputEditor,
};
function RightEditingPanel({ responsiveMode }) {
  const pathname = usePathname();
  const { selectedComponent, setSelectedComponent } = useEditor();

  useEffect(() => {
    const pathComponent = pathname.split("/").pop();
    if (componentEditorMap[pathComponent]) {
      setSelectedComponent(pathComponent);
    }
  }, [pathname, setSelectedComponent]);

  const SelectedEditor = componentEditorMap[selectedComponent];
  return (
    <aside
      className={`${
        responsiveMode ? "hidden" : "block"
      } w-72 h-[calc(100vh-3rem)] bg-surface border-l border-border p-2 
    overflow-y-auto 
   `}
    >
      <h1 className="text-lg font-semibold capitalize mb-4">
        Edit {selectedComponent}
      </h1>
      {SelectedEditor ? (
        <SelectedEditor />
      ) : (
        <p className="text-sm text-gray-500">No editor found.</p>
      )}
    </aside>
  );
}

export default RightEditingPanel;
