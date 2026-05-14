import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 border-transparent",
  secondary:
    "bg-transparent text-primary border border-primary/30 hover:bg-sage-light hover:border-primary/50",
  ghost:
    "bg-transparent text-primary border-transparent hover:bg-sage-light",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm:      "px-3.5 py-1.5 text-sm",
  default: "px-5 py-2.5 text-sm",
  lg:      "px-7 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "default", className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium",
        "transition-colors duration-150 cursor-pointer",
        "disabled:opacity-45 disabled:cursor-not-allowed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
