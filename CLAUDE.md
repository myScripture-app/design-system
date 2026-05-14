# myScripture — Brand Quick Reference

> Paste this file into any AI chat, CLAUDE.md, or project brief to enforce brand consistency.

---

## Brand Identity

**Company:** myScripture
**Founder:** Riki Morohashi
**Website:** myscripture.app
**Tagline:** Capture sermons. Grow in Scripture.
**Positioning:** A God-centered Christian technology ecosystem — not a Bible app.

---

## Colors

| Name | Hex | RGB | Role |
|---|---|---|---|
| Sage (primary) | `#46725D` | `rgb(70,114,93)` | Buttons, CTAs, links, active icons |
| Sage Dark | `#3A6050` | `rgb(57,96,78)` | Hover/pressed state |
| Sage Light | `#E6EFEB` | `rgb(231,239,235)` | Soft backgrounds, chip fills |
| Amber (accent) | `#C5843A` | `rgb(197,132,58)` | Cross logo, warm highlights — NOT a CTA color |
| Ivory (background) | `#F6EFE5` | `rgb(246,239,229)` | Page floor — NEVER use #FFFFFF |
| Card surface | `#FDFDFC` | `rgb(253,253,252)` | Cards on ivory |
| Foreground | `#21232C` | `rgb(33,35,44)` | Primary text |
| Muted | `#6C707F` | `rgb(108,112,127)` | Secondary text |
| Border | `#E2DED9` | `rgb(226,222,217)` | Outlines, dividers |
| Navy | `#28395D` | `rgb(40,57,93)` | Tertiary accent, tags |

---

## Typography

- **Headings (H1–H4):** Lora, Georgia, serif — weight 600, letter-spacing -0.015em
- **Body / UI / Labels:** DM Sans, system-ui, sans-serif — weight 400/500
- **Japanese text:** Noto Sans JP, DM Sans, system-ui
- **No other fonts.** Never introduce a third typeface.
- Section labels: DM Sans, 11–12px, weight 600, UPPERCASE, tracking 0.1em, Sage color

### Type Scale
| Role | Size | Font |
|---|---|---|
| Display | 56px | Lora 600 |
| H1 | 48px | Lora 600 |
| H2 | 40px | Lora 600 |
| H3 | 28px | Lora 600 |
| H4 | 22px | Lora 600 |
| Body Large | 18px | DM Sans 400 |
| Body | 16px | DM Sans 400 |
| Body Small | 14px | DM Sans 400 |
| UI Label | 14px | DM Sans 500 |
| Section Label | 12px | DM Sans 600 uppercase |

---

## Spacing & Layout

- **Base unit:** 4px (all spacing is a multiple of 4)
- **Card padding:** 16px mobile, 24px desktop
- **Card radius:** 16px (rounded-2xl)
- **Button/chip radius:** 9999px pill (rounded-full)
- **Max content width:** 1280px; editorial text max 768px
- **Shadows:** Warm brown undertones only — `rgba(56,48,35,…)`, never cold grey

---

## Component Rules

### Buttons
- **Primary:** Sage `#46725D` background, white text, pill shape
- **Secondary:** Transparent bg, sage border, sage text, pill shape
- **Ghost:** No border, sage text, hover = sage-light background
- **Destructive:** Red `#DC2626` only for irreversible actions

### Cards
- Background: `#FDFDFC`, border: `1px solid #E2DED9`, radius: 16px
- Shadow: `0 12px 34px rgba(56,48,35,0.06), 0 1px 3px rgba(56,48,35,0.04)`
- Hover: translateY(-2px) with shadow transition

### Chips / Badges
- Pill shape, padding `px-3 py-1`
- Sage chip: sage-light bg + sage border/text
- Navy chip: navy-light bg + navy border/text
- Amber chip: warm-light bg + amber border/text

### Section Labels
Always appear above section headings:
`DM Sans, 11–12px, weight 600, UPPERCASE, letter-spacing 0.1em, Sage color`

---

## Tone of Voice

**Six words:** Calm. Warm. Faithful. Simple. Honest. Purposeful.

- No exclamation points unless absolutely necessary
- Never shame or guilt the user — always encourage
- No hype: "revolutionary", "game-changing", "disruptive" are forbidden
- Write for ordinary Christians, not theologians or tech insiders
- Scripture references: always cite properly (Book Ch:V), never paraphrase carelessly

---

## Product Ecosystem

| ID | Product | Status | Tagline |
|---|---|---|---|
| notes | myScripture Notes | Available | Remember what God is teaching you. |
| journey | myScripture Journey | In Development | Track your way through Scripture. |
| pray | myScripture Pray | Planned | Prayer, reflection, and response. |
| groups | myScripture Groups | Planned | Bible study groups with memory. |
| church | myScripture Church | Planned | Digital tools for church life. |
| sites | myScripture Sites | Planned | Modern church websites. |
| serve | myScripture Serve | Planned | Volunteer scheduling without confusion. |
| bulletin | myScripture Bulletin | Planned | Weekly service info, clearly shared. |
| forms | myScripture Forms | Planned | Simple forms for church life. |
| attendance | myScripture Attendance | Planned | Know who is being reached and cared for. |
| apps | myScripture Apps | Future Service | Custom church mobile apps. |
| consulting | myScripture Consulting | Future Service | Digital ministry strategy. |
| ai | myScripture AI / Sermon Studio | Future Service | Responsible AI for ministry support. |

---

## Guardrails — What myScripture Must Never Be

- A replacement for Scripture, prayer, pastors, or the local church
- A generic productivity app or social media platform
- A brand that uses shame, guilt, or pressure language
- A system that makes faith feel automated or shallow
- An AI tool that replaces pastoral wisdom or Scripture

### Hard Design Rules
- NEVER use `#FFFFFF` as page background — always Ivory `#F6EFE5`
- NEVER introduce a new brand color without updating BRAND.md
- NEVER use a font other than Lora (headings) and DM Sans (body)
- NEVER use AI-generated Bible audio
- NEVER make a product feel like a generic productivity tool
