"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useEditor } from "@/context/EditorContext";
import CodeBlock from "./CodeBlock";

function CopyCodeButton() {
  const { componentCode } = useEditor();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* Button that open the dialog */}
      <button
        className="px-2 py-1 border border-border flex items-center gap-1 justify-center rounded-md"
        title="View & Copy"
        onClick={() => setIsOpen(true)}
      >
        <Copy size={16} />
        <span>Copy Code</span>
      </button>

      {/* dialog box */}

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-bg rounded-lg shadow-lg w-[90%] max-w-2xl p-4">
            <h2 className="text-lg font-semibold mb-3"> Code Preview</h2>

            {/* code block  */}
            <CodeBlock code={componentCode} />
            <div className="mt-4 flex justify-between">
              <button
                className={`px-3 py-1 rounded-md text-white flex items-center gap-2 ${
                  copied
                    ? "bg-green-600"
                    : "bg-primary hover:bg-primary/85 transition-colors"
                }`}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy to Clipboard
                  </>
                )}
              </button>
              <button
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CopyCodeButton;
