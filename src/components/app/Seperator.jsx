import { cn } from "@/lib/utils";

export function Separator({ className, ...props }) {
  return (
    <div
      className={cn("h-px w-full bg-gray-200 dark:bg-gray-700", className)}
      {...props}
    />
  );
}
