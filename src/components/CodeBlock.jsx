import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export default function CodeBlock({ code, language = "jsx" }) {
  return (
    <Highlight theme={themes.dracula} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} p-4 rounded-md  whitespace-pre-wrap break-words`}
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
      )}
    </Highlight>
  );
}
