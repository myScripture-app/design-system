# Design Tokens

All myScripture design values in three formats:

| File | Format | Use |
|---|---|---|
| `colors.css` | CSS custom properties | Copy into any stylesheet |
| `typography.css` | CSS custom properties | Font families and scale |
| `spacing.css` | CSS custom properties | Spacing, radius, shadows |
| `tokens.json` | Flat JSON | Figma tokens plugin, Style Dictionary, AI tools |

## System A vs System B

myScripture uses two CSS variable systems depending on the project:

- **System A (HSL)** — Tailwind v3 projects: `notes`, `journey`, `reading` apps. Variables like `--primary: 152 24% 36%` (no `hsl()` wrapper — Tailwind adds it).
- **System B (RGB)** — Tailwind v4 `website` project. Variables like `--primary: rgb(70 114 93)`.

When building a new app, use **System A** (HSL). When building marketing/website pages, use **System B** (RGB).

## Hard Rules

- `#46725D` (Sage) is the ONLY primary CTA color
- `#F6EFE5` (Ivory) is ALWAYS the page background — never `#FFFFFF`
- Lora for headings (H1–H4), DM Sans for everything else
- No third font families
