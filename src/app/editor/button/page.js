"use client";
import React from "react";
import { useEditor } from "@/context/EditorContext";
import Button from "@/components/ui/Button";
function page() {
  const { componentProps } = useEditor();
  console.log("component props", componentProps);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-3rem)]">
      <Button {...componentProps} />
    </div>
  );
}

export default page;
