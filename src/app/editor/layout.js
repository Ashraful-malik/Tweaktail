import { EditorProvider } from "@/context/EditorContext";
import Wrapper from "@/layout/Wrapper";
import React from "react";

export default function EditorLayout({ children }) {
  return (
    <EditorProvider>
      <Wrapper>{children}</Wrapper>
    </EditorProvider>
  );
}
