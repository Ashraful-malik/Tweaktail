"use client";
import Alert from "@/components/ui/Alert";
import { useEditor } from "@/context/EditorContext";
import React from "react";

function Page() {
  const { componentProps } = useEditor();
  return (
    <div className="flex items-center justify-center h-[calc(100vh-3rem)]  w-full">
      <Alert {...componentProps} />
    </div>
  );
}

export default Page;
