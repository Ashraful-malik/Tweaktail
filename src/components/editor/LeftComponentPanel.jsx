"use client";
import { useEditor } from "@/context/EditorContext";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import FeedbackForm from "../FeedbackForm";

const availableComponents = [
  {
    name: "Button",
    url: "button",
  },
  {
    name: "Card",
    url: "card",
  },
  {
    name: "Navbar",
    url: "navbar",
  },
  {
    name: "Alert",
    url: "alert",
  },
  {
    name: "Input Group",
    url: "input",
  },
];

function LeftComponentPanel({ responsiveMode }) {
  const { setSelectedComponent } = useEditor();
  const router = useRouter();
  const pathname = usePathname();
  const handleSelectComponent = (component) => {
    setSelectedComponent(component.url);
    router.push(`/editor/${component.url}`);
  };

  return (
    <aside
      className={`${
        responsiveMode ? "hidden" : "block"
      } w-64 h-[calc(100vh-3rem)] bg-surface border-r relative
     border-border  overflow-x-hidden `}
    >
      <div className="p-4 ">
        {/* show hide button */}

        <h1 className="text-lg font-bold">Components</h1>
        <div className="components flex flex-col  mt-2">
          {availableComponents.map((component, index) => {
            const isActive = pathname === `/editor/${component.url}`;
            return (
              <div
                className={`cursor-pointer px-2 py-2 rounded-md ${
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary text-foreground"
                }`}
                key={index}
                onClick={() => handleSelectComponent(component)}
              >
                {component.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* feedback form */}
      <div className="absolute bottom-16 left-4">
        <FeedbackForm position="top" variant="secondary" />
      </div>
      {/* footer */}
      <div className="absolute bottom-2 border-t border-border w-full p-2">
        <p className="text-xs text-">Beta Version 1.0.0</p>
      </div>
    </aside>
  );
}

export default LeftComponentPanel;
