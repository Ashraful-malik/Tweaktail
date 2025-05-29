"use client";
import Navbar from "@/components/ui/Navbar";
import { useEditor } from "@/context/EditorContext";
import React from "react";

function page() {
  const { componentProps } = useEditor();
  return (
    <div className=" pt-8">
      <Navbar {...componentProps} />
    </div>
  );
}

export default page;
