import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "default" &&
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        variant === "secondary" &&
          "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
        className
      )}
      {...props}
    />
  );
}
