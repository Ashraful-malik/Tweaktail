"use client";
import React, { useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import * as prettier from "prettier/standalone";
import * as parserHtml from "prettier/parser-html";

export default function CodeBlock({ code, language = "html" }) {
  const [formattedCode, setFormattedCode] = React.useState(code || "");

  useEffect(() => {
    const formatCode = async () => {
      try {
        if (!code) return; // Handle empty code case

        const result = await prettier.format(code, {
          parser: "html",
          plugins: [parserHtml],
        });
        setFormattedCode(result);
      } catch (error) {
        setFormattedCode(code || ""); // Fallback with empty string protection
      }
    };

    formatCode();
  }, [code]);

  // Ensure we always have a string value
  const safeCode = formattedCode || "";

  return (
    <Highlight theme={themes.dracula} code={safeCode} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="flex flex-col relative">
          <pre
            className={`${className} p-4 rounded-md whitespace-pre-wrap break-words max-h-96 overflow-y-auto`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
