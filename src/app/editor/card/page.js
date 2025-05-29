"use client";
import Card from "@/components/ui/Card";
import { useEditor } from "@/context/EditorContext";
import React from "react";

function page() {
  const { componentProps } = useEditor();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-3rem)]">
      <Card {...componentProps} />
    </div>
  );
}

export default page;
