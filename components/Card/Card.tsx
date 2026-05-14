import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-2xl p-6 shadow-card",
        hover && "transition-all duration-[220ms] ease-out hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-serif text-lg font-semibold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}
