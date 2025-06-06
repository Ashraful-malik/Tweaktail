"use client";
import React from "react";
import { useEditor } from "@/context/EditorContext";
import Button from "@/components/ui/Button";
function Page() {
  const { componentProps } = useEditor();
  return (
    <div className="flex items-center justify-center h-[calc(100vh-3rem)]">
      <Button {...componentProps} />
    </div>
  );
}

export default Page;
