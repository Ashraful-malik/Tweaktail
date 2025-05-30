"use client";
import Input from "@/components/ui/Input";
import { useEditor } from "@/context/EditorContext";
import React from "react";

function page() {
  const { componentProps } = useEditor();
  return (
    <div className="flex items-center justify-center h-[calc(100vh-3rem)] p-2">
      <Input {...componentProps} />
    </div>
  );
}

export default page;
