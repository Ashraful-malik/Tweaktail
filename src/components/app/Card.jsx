import React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-white dark:bg-zinc-900 shadow-sm dark:border-zinc-700",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("p-6", className)} {...props} />;
});

CardContent.displayName = "CardContent";
export { Card, CardContent };
