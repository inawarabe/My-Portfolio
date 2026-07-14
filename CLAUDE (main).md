# Ali Aden — PM Portfolio

Personal portfolio website for Ali Aden, Project Manager at Creative971 Shopify Agency. Showcases Shopify client accounts managed across multiple countries, with a mix of project builds and support retainers.

## Workflow

When building or updating pages for this portfolio:

1. **Generate** or edit the HTML file(s) using Tailwind CSS (via CDN). Include all content inline — no external files unless requested.
2. **Screenshot** the rendered page using Puppeteer (`npx puppeteer screenshot index.html --fullpage` or equivalent). If the page has distinct sections, capture those individually too.
3. **Compare** your screenshot against the reference image (if provided). Check for mismatches in:
   - Spacing and padding (measure in px)
   - Font sizes, weights, and line heights
   - Colors (exact hex values)
   - Alignment and positioning
   - Border radii, shadows, and effects
   - Responsive behavior
   - Image/icon sizing and placement
4. **Fix** every mismatch found. Edit the HTML/Tailwind code.
5. **Re-screenshot** and compare again.
6. **Repeat** steps 3–5 until the result is within ~2–3px of the reference everywhere.

Do NOT stop after one pass. Always do at least 2 comparison rounds. Only stop when the user says so or when no visible differences remain.

## Technical Defaults

- Use Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Use placeholder images from `https://placehold.co/` when source images aren't provided
- Mobile-first responsive design
- Single `index.html` file unless the user requests otherwise
- Plain HTML/CSS/JS only — no React, no frameworks

## Reference Websites

These two PM portfolios are the style references for this project:
- **Jenny** (senior PM): https://jennyatkins.me/ — bright, minimal, approachable
- **W. Jesse Wright**: https://wjessewright.com — clean, professional, structured, individual project pages

## Content Rules

- Ali's title is "Project Manager" — do not upgrade or change this
- Never include confidential client data (revenue, retainer values, internal metrics, pricing)
- Project descriptions should be one sentence, focused on scope and market
- All images must be local assets or placeholders — no external image URLs except placehold.co
- Stats (account count, country count, etc.) must calculate dynamically from data, never hardcoded

## Design Preferences

- Warm cream background (#F7F5F0) — not stark white
- Navy (#1A3A5C) as primary accent for headings and buttons
- Minion Pro as primary heading font, with Source Serif Pro or Libre Baskerville as Google Fonts fallback
- DM Sans or Inter as secondary font for labels, badges, and small UI text
- Responsive: works on desktop, tablet, and mobile
- Subtle hover lift on cards — no flashy animations
- Badge colors:
  - Project: green (#E8F4F0 bg, #1B7A5A text)
  - Support: blue (#EAF0FA bg, #2C5EA0 text)
  - Project & Support: purple (#F3EDF7 bg, #7B4BA0 text)

## Rules

- Do not add features, sections, or content not present in the reference image or instructions
- Match the reference exactly — do not "improve" the design unless asked
- If the user provides CSS classes or style tokens, use them verbatim
- Keep code clean but don't over-abstract — inline Tailwind classes are fine
- When comparing screenshots, be specific about what's wrong (e.g., "heading is 32px but reference shows ~24px", "gap between cards is 16px but should be 24px")
- Do not remove or rename any existing client entries without explicit confirmation
- Always test filter functionality after modifying project data
- Keep all CSS in a shared stylesheet or consistent inline Tailwind classes across pages

## Git Workflow

- Push to `main` triggers automatic Vercel deploy
- Use descriptive commit messages
- Do not commit node_modules or dist folders

## Important

- Do not remove or rename any of the 24 existing client entries without explicit confirmation
- Run the site locally and screenshot to verify before pushing changes
