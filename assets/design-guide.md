# PROJECT_FORMATTING.md
# CJX Platform — Project Formatting & Display Rules

> **Version:** 1.0  
> **Last updated:** May 2026  
> **Scope:** All screens, components, tables, charts, and alert panels across the CJX Platform.  
> All contributors must follow these rules consistently. When in doubt, refer back to this document.

---

## Table of Contents

1. [Font & Typography](#1-font--typography)
2. [Color System](#2-color-system)
3. [Number Formatting](#3-number-formatting)
4. [Currency Display](#4-currency-display)
5. [Date & Period Format](#5-date--period-format)
6. [Change & Comparison Display](#6-change--comparison-display)
7. [Status Badges & Labels](#7-status-badges--labels)
8. [Icons & Emoji Usage](#8-icons--emoji-usage)
9. [Table Layout & Alignment](#9-table-layout--alignment)
10. [KPI Card Structure](#10-kpi-card-structure)
11. [Chart & Axis Formatting](#11-chart--axis-formatting)
12. [Zero, Null & Empty States](#12-zero-null--empty-states)
13. [Spacing & Border Radius](#13-spacing--border-radius)
14. [Quick Reference Cheat Sheet](#14-quick-reference-cheat-sheet)

---

## 1. Font & Typography

### Font Family
```
Primary: "Plus Jakarta Sans", sans-serif
```
- No serif fonts anywhere in the platform.
- Fallback: `sans-serif` (system default).

### Base Settings
```css
font-size:   13px   (base body)
line-height: 1.5
color:       var(--text)  /* #0d1421 */
```

### Type Scale

| Role | Size | Weight | Color Token | Example Usage |
|---|---|---|---|---|
| Page Title | 24–28px | 700 | `--text` | "Sales Performance", "Company Health" |
| Section Header | 11–12px | 600 | `--t3` | "FUNCTION HEALTH", "TOTAL SALES MTD" — ALL CAPS |
| KPI Primary Value | 22–28px | 700–800 | Status color | "136.23M", "23.2%" |
| KPI Sub-value / Tags | 11–12px | 500–600 | Status color or `--t2` | "↓4% TG", "↑3.3% LY" |
| Table Header | 11px | 600 | `--t3` | ALL CAPS, letter-spaced |
| Table Cell — Primary | 13px | 600 | `--text` | Values in rows |
| Table Cell — Secondary | 11px | 500 | `--t3` | Category, department labels |
| Supporting / Caption | 11–12px | 500 | `--t3` or `--t2` | "MTD full period", "Target 30%" |
| Navigation Label | 13px | 500 | `--t2` | Sidebar nav items |
| Alert Body Text | 12px | 500 | `--text` | Alert descriptions |

### Rules
- Section labels are **always ALL CAPS** — never title case or sentence case.
- Page titles are **always title case** — never ALL CAPS.
- Do not use font sizes below 9px or above 28px.
- Font weights in use: **500** (medium), **600** (semi-bold), **700** (bold), **800** (extra-bold). Avoid 400 (regular) for data values.

---

## 2. Color System

### CSS Custom Properties (Design Tokens)

```css
/* Background & Surface */
--bg:      #f0f2f5   /* Page background */
--surface: #ffffff   /* Card / panel background */
--s2:      #f7f8fa   /* Subtle surface, hover states */
--s3:      #eef0f4   /* Deeper tint, section backgrounds */

/* Borders */
--border:  #e3e6ed   /* Default border */
--border2: #c8cdd9   /* Stronger border, dividers */

/* Text */
--text:    #0d1421   /* Primary text — near black */
--t2:      #4a5568   /* Secondary text — dark grey */
--t3:      #8a93a8   /* Tertiary text — medium grey */
--t4:      #b8bece   /* Disabled / placeholder text */

/* Green — Good / Positive / On Track */
--green:   #0ca678
--gbg:     #ecfdf5   /* Green background tint */
--gmid:    #a7f3d0   /* Green mid — progress bars */

/* Yellow/Amber — Warning / Watch */
--yellow:  #c67e00
--ybg:     #fffbeb   /* Yellow background tint */
--ymid:    #fcd34d   /* Yellow mid */

/* Red — Bad / Critical / At Risk */
--red:     #dc2626
--rbg:     #fef2f2   /* Red background tint */
--rmid:    #fca5a5   /* Red mid */

/* Blue — Informational / Neutral highlight */
--blue:    #1d4ed8
--bbg:     #eff6ff   /* Blue background tint */
--bmid:    #bfdbfe   /* Blue mid */

/* Purple — Special / secondary accent */
--purple:  #7c3aed
--pbg:     #f5f3ff
--pmid:    #ddd6fe

/* Orange — Secondary warning / accent */
--orange:  #ea580c
```

### Semantic Color Usage Rules

| Meaning | Text/Icon | Background | Use Case |
|---|---|---|---|
| Good / Positive / On Track | `--green` | `--gbg` | Values above target, positive change |
| Warning / Watch | `--yellow` | `--ybg` | Values near threshold, watch status |
| Bad / Negative / At Risk | `--red` | `--rbg` | Values below target, negative change |
| Critical | `--red` (bold) | `--rbg` (filled pill) | Immediate action required |
| Informational / Neutral | `--blue` | `--bbg` | Context, links, codes |
| Forecast / Projected | `--purple` | `--pbg` | Forecasted values only |
| Secondary alert / Pace | `--orange` | — | Pace indicators, secondary warnings |

### Rules
- **Never use color alone** to convey status — always pair with a text label (e.g., badge text, arrow symbol, or tag abbreviation).
- Use background tints (`--rbg`, `--gbg`, `--ybg`) for card/badge fills — never the full token color as a background.
- Use the full token (`--red`, `--green`, `--yellow`) for text and icons only.

---

## 3. Number Formatting

### Integer Counts
- Display as plain integer with no decimal places.
- Use comma separator for numbers ≥ 1,000.
- Examples: `100`, `82`, `8`, `12,400`

### Percentages
- Always **1 decimal place**, always suffixed with `%` (no space).
- Examples: `23.2%`, `96.0%`, `28.4%`, `6.3%`
- Exception: percentage-point GP impact uses **3 decimal places** — e.g., `-0.557%`, `+0.022%`

### Ratios / Rate of Sale (ROS)
- Always **2 decimal places**, no unit suffix.
- Examples: `0.18`, `4.12`, `0.98`, `1.39`

### Score / Index (0–100)
- Integer only, no decimals.
- Examples: `84`, `58`, `91`

### Multiplier
- Use `x` suffix, 1 decimal place.
- Examples: `1.1x`, `1.5x`, `3x`

### Rounding Rules
| Scale | Decimal Places | Example |
|---|---|---|
| Millions (M) | 2 | `136.23M`, `2.10M` |
| Thousands (k) | 1 | `2.5k`, `14.1k` |
| Sub-thousand | 0 | `903`, `77` |
| Percentage | 1 | `23.2%` |
| GP impact % | 3 | `-0.557%` |
| ROS / Ratio | 2 | `0.18` |

---

## 4. Currency Display

> The currency symbol is **not displayed** in the UI. All monetary values are implied to be in Thai Baht (THB). Do not prepend any currency symbol.

### Scale Rules

| Value Range | Format | Suffix | Example |
|---|---|---|---|
| ≥ 1,000,000 | `{X.XX}M` | Uppercase **M**, no space | `136.23M`, `42.20M`, `2.10M` |
| 1,000 – 999,999 | `{X.X}k` | Lowercase **k**, no space | `2.5k`, `14.1k`, `9.5k` |
| 1 – 999 | `{X}` | No suffix, integer | `903`, `77`, `36` |
| Zero | `0` | No suffix | `0` |

### Rules
- **M** is always uppercase; **k** is always lowercase. Never mix (e.g., `1.5M 200k` is invalid).
- Never display raw unformatted numbers like `1800000` — always apply M/k compression.
- Apply exactly **2 decimal places** at M-scale even if the second decimal is zero: `2.10M` not `2.1M`.
- Apply exactly **1 decimal place** at k-scale: `9.5k` not `9.50k`.
- Do not use commas inside M/k formatted values.
- Threshold comparison values (targets, references) follow the same rules: `2.9M target`, `2800000` → `2.80M target`.

---

## 5. Date & Period Format

### Date Display

| Use Case | Format | Example |
|---|---|---|
| Period range header | `MMM D – MMM D, YYYY` | `Apr 16 – May 15, 2026` |
| Custom range (filter) | `MMM D, YYYY — MMM D, YYYY` | `Apr 16, 2026 — May 15, 2026` |
| Single date in tables | `MMM D` | `Apr 16` |
| Period progress | `Day {N} of {T}` | `Day 29 of 30` |
| Months abbreviated | 3-letter, title case | `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` |

### Separator Rules
- Period **range** in page headers: use en dash `–` (no space on either side of dash, one space from month text): `Apr 16 – May 15, 2026`
- Custom range in detail views: use em dash `—`: `Apr 16, 2026 — May 15, 2026`

### Period Abbreviations (Filter Chips)

| Abbreviation | Meaning |
|---|---|
| `MTD` | Month to Date |
| `QTD` | Quarter to Date |
| `YTD` | Year to Date |
| `Comm 16–15` | Commercial calendar (16th to 15th) |
| `P&L 1–31` | P&L calendar (1st to 31st) |

### Time Display
- 24-hour format with timezone: `13:57 ICT`
- No seconds shown in the UI header clock.

### Relative Time (Alerts)
- `{N} min ago`, `{N} hr ago` — lowercase, abbreviated.
- Examples: `12 min ago`, `1 hr ago`, `3 hr ago`

---

## 6. Change & Comparison Display

### Arrow Symbols
Use Unicode arrows — not images, not chevrons.

| Symbol | Usage |
|---|---|
| `↑` | Positive change (absolute or % vs reference) |
| `↓` | Negative change |
| `→` | Flat / no change |
| `↗` | Improving trend (score / sparkline) |
| `↘` | Declining trend (score / sparkline) |
| `▲` | Actual value marker on charts |
| `◆` | Forecast value marker on charts |

### Inline Comparison Tags (Tables)
Three benchmarks are shown after the primary value, in this fixed order:

```
↓4% TG    ↓1% LM    ↑3.3% LY
```

| Tag | Full Meaning | Positive Color | Negative Color |
|---|---|---|---|
| `TG` | vs Target | `--green` | `--red` |
| `LM` | vs Last Month | `--green` | `--red` |
| `LY` | vs Last Year | `--green` | `--red` |

- Tags are smaller font (11px), rendered directly below the primary number.
- Always prefix with arrow (`↑`/`↓`) — do not use `+`/`-` signs alongside arrows.
- When value beats multiple benchmarks at once, use compact multi-tag: `+LM/LY`
- When flat, use: `→` or the word `flat`

### Score Change (Points-Based)
For health scores and index values, show change as points:
```
+3pts vs last week
-8pts vs last week
flat vs last week
```
- Always lowercase: `pts` not `Pts` or `PTS`
- Always include comparison period: `vs last week`

### Percentage-of-Target
Write as supporting text below the KPI value:
```
96.0% of period target
96.2% of target
```

### Gap / Remaining
Written as plain sentence below the status banner. Use `−` (minus sign) for gap, no currency symbol:
```
−5.45M gap to close
1 days remaining
```

### Mix / Share Change (Sales Mix)
Show direction change and prior value for context:
```
↑0.4% was 3.9%
↓0.1% was 2.2%
```

### Pace Indicator (Promotions / Progress)
```
↑ Ahead pace 67.7%
↓ Behind pace 1.6%
```

### Sign Rules Summary
| Context | Format |
|---|---|
| % change vs benchmark | Arrow only: `↑3.3%` / `↓4%` |
| GP impact (3dp) | Signed value: `-0.557%` / `+0.022%` |
| Score point change | `+3pts` / `-8pts` / `flat` |
| Promo uplift | `+12%` (with explicit + sign) |
| Gap to target | `−5.45M` (minus sign, no arrow) |

---

## 7. Status Badges & Labels

### Badge Styles

| Badge Text | Color | Background | Border | Use Case |
|---|---|---|---|---|
| `On Track` | `--green` | `--gbg` | `--gmid` | Score ≥ threshold |
| `Watch` | `--yellow` | `--ybg` | `--ymid` | Near threshold |
| `At Risk` | `--red` | `--rbg` | `--rmid` | Below threshold |
| `Critical` | `#fff` | `--red` (filled) | none | Immediate action |
| `Behind Target` | `#fff` | `--red` (large banner) | none | Page-level alert |
| `Act Now` | `--red` | `--rbg` | — | SKU / action required |
| `Investigate` | `--blue` | `--bbg` | — | Needs review |
| `New` | `--blue` | `--bbg` | — | New store / SKU |
| `Hold (buy)` | `--yellow` | `--ybg` | — | Buying hold status |
| `Active` | `--green` | `--gbg` | — | Normal active status |

### Rules
- Badges are **pill-shaped** — use `border-radius: 20px` (or `13px` for compact tags).
- Always pair color with text — never use color alone.
- Badge text is **sentence case** for full badges, ALL CAPS for severity labels (`CRITICAL`, `WARNING`).
- Severity levels in the alert panel use ALL CAPS filled pills.

---

## 8. Icons & Emoji Usage

Emoji and Unicode icons are used as **visual anchors** for navigation and section identification only. They are decorative — screen readers and data exports should not depend on them.

### Navigation Icons (Sidebar)
Each navigation section and page has a consistent emoji prefix. Do not change these without updating all references.

| Section | Icon |
|---|---|
| Company Health | 🔵 (blue circle) |
| Store Pipeline | 🏗 |
| Store Operations | 📊 |
| Store Control Tower | 🏰 |
| HR Ops | 👥 |
| CS Tickets | 🎫 |
| Site Expansion | 📍 |
| Site Negotiation | 🤝 |
| Construction | 🏗 |
| Supply Chain | 📦 |
| Commercial | 🛒 |
| Sales Performance | 📊 |
| SKU Daily Pulse | ⚡ |
| Sales Mix | 📋 |
| Promotions | 🎯 |
| New Product | 🆕 |
| Underperforming | ⚠ |
| Finance | 💰 |

### Inline Data Icons
Used inside KPI cards and data rows — keep consistent:

| Icon | Meaning |
|---|---|
| ⚠ | Warning / alert count |
| ⚡ | Action required / urgent |
| 🔴 | Critical / OOS indicator |
| 🎯 | Target |
| 📈 | Actual performance |
| 🔮 | Forecast |
| 💰 | Sales / monetary KPI |
| 💸 | Lost sales |
| 🏪 | Store count |

### Rules
- Never use emoji as the **sole** indicator of status — always pair with text or color.
- Do not use emoji inside tables, charts, or exported data.
- Emoji size follows the surrounding text — do not apply custom sizing.

---

## 9. Table Layout & Alignment

### Column Alignment

| Content Type | Alignment |
|---|---|
| Text labels (names, categories) | Left-aligned |
| Numeric values | Right-aligned |
| Percentage values | Right-aligned |
| Status badges | Center-aligned |
| Action buttons / arrows | Right-aligned |

### Column Header
- ALL CAPS, 11px, `--t3` color, font-weight 600.
- Multi-line headers allowed — use line breaks, not abbreviation-only headers.
- Comparison sub-labels (TG / LM / LY) appear as a second smaller line below the column name.

### Row Structure
```
[Expand icon]  [Name — bold]          [Primary Value]  [↓X% TG  +LM/LY]
               [Subtitle — grey]      [Avg/Day value]  [↓X% TG  +more]
```

### Row Grouping
- Group rows by Division, Family, or Category using a collapsible parent row.
- Parent rows show aggregated totals and expand to reveal child rows.
- Indent child rows by 12–16px.

### Table Borders
- Use `--border` (`#e3e6ed`) for horizontal row dividers.
- No vertical column borders.
- Header row has a bottom border using `--border2`.

---

## 10. KPI Card Structure

Every KPI card follows this strict top-to-bottom layout:

```
┌─────────────────────────────────────┐
│  [Icon]  LABEL (ALL CAPS, grey)     │
│                                     │
│  PRIMARY VALUE (large, color-coded) │
│                                     │
│  ↓X% TG  ↓X% LM  ↑X% LY           │  ← comparison tags (smaller)
│                                     │
│  Supporting text (grey, 11px)       │
└─────────────────────────────────────┘
```

### Card Rules
- Background: `--surface` (`#ffffff`)
- Border: `1px solid var(--border)`
- Border-radius: `10px` (standard card), `8px` (compact card)
- Padding: `16px` internal spacing
- The primary value is the largest element — always the visual focus.
- Comparison tags appear on a separate line below the primary value in a smaller size (11–12px).
- Supporting text (e.g., "MTD full period", "Target 30%") uses `--t3` color at 11px.
- Status banner cards (e.g., "Behind Target") use `--red` background with white text.

### Expand Pattern
Cards that contain drilldowns include an `⤢ Expand` button at the bottom-right.

---

## 11. Chart & Axis Formatting

### Axis Number Labels
Chart axes follow the **same M/k/integer rules** as all other numeric displays:

```
Y-axis:  0   →   50M   →   100M   →   150M
X-axis:  Jan  Feb  Mar  Apr  May ...
```

- No currency symbol on axis labels.
- Abbreviate large numbers (M/k) — never show raw numbers on axes.
- Axis labels use `--t3` color, 11px.

### Chart Lines & Markers
| Series | Color | Marker |
|---|---|---|
| Actual | `--green` | `▲` triangle |
| Forecast | `--purple` | `◆` diamond |
| Target | `--t3` (grey) | line only, no marker |

### Progress Bar Charts
- Use horizontal bar.
- Color: status color (`--green` / `--yellow` / `--red`).
- Background track: `--s3` (`#eef0f4`).
- Border-radius: `4px` or `6px`.

### Sparklines (Trend Lines in Cards)
- No axes, no labels — contextual only.
- Line color follows status (`--green`, `--red`, `--yellow`).
- Minimal height (24–30px).

### Bar Charts (Monthly Forecast)
- Actual bars: `--yellow` / `--red` (performance status).
- Forecast bars: light blue / grey.
- Target line: dashed `--t3`.
- Data labels on bars: integer only, 11px.

---

## 12. Zero, Null & Empty States

| Scenario | Display |
|---|---|
| Value is exactly zero (monetary) | `0` — no M/k suffix, no symbol |
| Value is zero (percentage) | `0.0%` |
| No comparison available | `—` (em dash) |
| Data not yet loaded | Skeleton/shimmer placeholder (not spinner) |
| No records in table | Text: `No data available` in `--t3` color, centered |
| Score not calculated | `—` in place of number |
| Forecast not set | `—` or omit field |
| Target not set | `Target: —` |

### Rules
- **Never show raw `null`, `undefined`, or `NaN`** to the user.
- A value of `0` is a valid data point — display it clearly as `0`, never hide it.
- Empty table states must include the empty-state message — never render an empty `<tbody>`.

---

## 13. Spacing & Border Radius

### Border Radius Scale

| Size | Value | Usage |
|---|---|---|
| XS | `3px` | Micro tags, tiny elements |
| SM | `5px` – `6px` | Small chips, inline badges |
| MD | `8px` | Compact cards, table sections |
| LG | `10px` | Standard cards, panels |
| XL | `13px` – `16px` | Pill badges, status chips |
| Full | `20px` | Full pill buttons |
| Circle | `50%` | Avatar icons, dot indicators |

### Spacing Guidelines
- **Card internal padding:** 16px all sides
- **Section gap (between cards):** 12px – 16px
- **Table row height:** 44px – 52px (comfortable), 36px (compact)
- **Badge padding:** 4px 10px (standard), 2px 8px (compact)
- **Page content padding:** 24px left/right, 20px top

---

## 14. Quick Reference Cheat Sheet

```
CURRENCY (no symbol, THB implied)
  136.23M      → Million:   uppercase M, 2 decimals
  14.1k        → Thousand:  lowercase k, 1 decimal
  903          → Sub-1000:  integer, no suffix
  0            → Zero:      plain 0

PERCENTAGES
  23.2%        → 1 decimal always
  -0.557%      → GP impact: 3 decimals, signed

SCORES / COUNTS
  84           → Integer, no decimals

RATIOS / ROS
  0.18         → 2 decimal places

CHANGE DISPLAY
  ↑3.3% LY     → vs Last Year (green)
  ↓4% TG       → vs Target (red)
  ↓1% LM       → vs Last Month (red)
  +3pts vs last week   → Score change
  flat vs last week    → No change
  −5.45M gap to close  → Gap (minus sign, no arrow)

DATE
  Apr 16 – May 15, 2026     → Period range header
  Apr 16, 2026 — May 15, 2026  → Custom range (filter)
  Day 29 of 30              → Progress within period

STATUS BADGES
  On Track   → green
  Watch      → yellow/amber
  At Risk    → red
  Critical   → red filled

COLORS (key tokens)
  --green:  #0ca678
  --yellow: #c67e00
  --red:    #dc2626
  --blue:   #1d4ed8
  --purple: #7c3aed
  --orange: #ea580c
  --text:   #0d1421
  --t2:     #4a5568
  --t3:     #8a93a8
  --surface: #ffffff
  --bg:     #f0f2f5

FONT
  Family:  "Plus Jakarta Sans", sans-serif
  Base:    13px / 1.5 line-height
  Weights: 500 / 600 / 700 / 800
```

---

*End of PROJECT_FORMATTING.md*
