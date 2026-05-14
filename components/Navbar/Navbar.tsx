import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../Button/Button";

interface NavItem { label: string; href: string; }

interface NavbarProps {
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultItems: NavItem[] = [
  { label: "Notes", href: "/notes" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
];

export function Navbar({ items = defaultItems, ctaLabel = "Get started", ctaHref = "/notes" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-light">
            <span className="text-base">📖</span>
          </div>
          <span className="font-serif text-base font-semibold tracking-tight text-foreground">
            myScripture
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sage-light hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-sage-light md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-sage-light hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <Button className="w-full" asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
