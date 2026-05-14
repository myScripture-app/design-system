import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full bg-card border rounded-lg px-3.5 py-2.5 text-sm text-foreground",
        "shadow-sm outline-none transition-[border-color,box-shadow] duration-150",
        "placeholder:text-muted-foreground",
        "focus:border-primary focus:ring-2 focus:ring-primary/12",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        error
          ? "border-red-500 focus:ring-red-500/12"
          : "border-border",
        className,
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full bg-card border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground",
      "shadow-sm outline-none resize-y min-h-[100px] transition-[border-color,box-shadow] duration-150",
      "placeholder:text-muted-foreground",
      "focus:border-primary focus:ring-2 focus:ring-primary/12",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
