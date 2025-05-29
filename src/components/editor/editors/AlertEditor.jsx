"use client";
import React from "react";

function AlertEditor() {
  const [config, setConfig] = useState({
    type: "error",
    message: "Something went wrong. Please try again.",
    showIcon: true,
    showDismiss: true,
    padding: "md",
    borderAccent: "left",
  });
  return <div>AlertEditor</div>;
}

export default AlertEditor;
