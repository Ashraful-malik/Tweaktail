"use client";
import Navbar from "@/components/ui/Navbar";
import { useEditor } from "@/context/EditorContext";
import React from "react";

function Page() {
  const { componentProps } = useEditor();
  return (
    <div className=" pt-8">
      <Navbar {...componentProps} />
    </div>
  );
}

export default Page;
