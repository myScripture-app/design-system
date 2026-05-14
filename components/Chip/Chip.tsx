import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ChipVariant = "sage" | "amber" | "navy" | "muted";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
  dot?: boolean;
}

const variantClasses: Record<ChipVariant, string> = {
  sage:  "bg-sage-light text-primary border border-primary/[0.18]",
  amber: "bg-warm-light text-warm border border-warm/20",
  navy:  "bg-navy-light text-navy border border-navy/15",
  muted: "bg-stone-100 text-muted-foreground border border-border",
};

const dotClasses: Record<ChipVariant, string> = {
  sage:  "bg-primary",
  amber: "bg-warm",
  navy:  "bg-navy",
  muted: "bg-muted-foreground",
};

export function Chip({ variant = "sage", dot = false, className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full flex-shrink-0", dotClasses[variant])} />
      )}
      {children}
    </span>
  );
}
