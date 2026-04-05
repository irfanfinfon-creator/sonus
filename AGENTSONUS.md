# AGENTS.md - Project Guidelines

## Session Context

This project is a landing page for GO Ride Web Services with scroll-triggered animations and a creative design refresh.

---

## Current State (Last Updated: April 2026)

### What's Implemented
- ✅ Scroll-triggered animations across all sections (Hero, Products, Services, Approach, CTA, Footer)
- ✅ Typography: Fraunces serif for headlines, Inter for body
- ✅ Color palette: Warm amber gradients, cream backgrounds, charcoal text
- ✅ Each section has its own ScrollWrapper for individual animations
- ✅ Services and Approach have staggered delay animations
- ✅ **Refactoring completed** - standardized all colors to Tailwind palette tokens

### Known Issues
- ✅ FIXED: Some elements may still use old colors (#181a20, #f6f6f6) instead of new palette
- ✅ FIXED: Some titles may still be Inter instead of Fraunces serif

---

## Session 2 Refactoring (April 5, 2026)

### Completed:
1. Fixed typo `py-3welp` → `py-3` in Hero.tsx
2. Added missing `cream-300` color to tailwind.config.js
3. Removed duplicate `fade-up` keyframes from tailwind.css
4. Replaced all hardcoded hex colors with Tailwind palette tokens:
   - `#1C1410` → `charcoal-900`
   - `#181a20` → `charcoal-900`
   - `#4A3B30` → `charcoal-600`
   - `#333333` → `charcoal-700`

### Files Modified:
- src/screens/ElementLight/sections/Hero/Hero.tsx
- src/screens/ElementLight/sections/Hero/TopNav.tsx
- src/screens/ElementLight/sections/Products/Products.tsx
- src/screens/ElementLight/sections/ourservices/ourservices.tsx
- src/screens/ElementLight/sections/ourservices/ServicesGrid.tsx
- src/screens/ElementLight/sections/approach/approach.tsx
- src/screens/ElementLight/sections/approach/ApproachGrid.tsx
- tailwind.config.js
- tailwind.css

---

## Guidelines for Future Sessions

### What I (AI) Need to Do

1. **Verify Before Editing**
   - Always read the file first before making changes
   - Use grep to find patterns before assuming they exist
   - Build/test after changes to verify no errors

2. **Be a Sniper**
   - Make targeted, precise changes
   - Don't change things that already work
   - Avoid "while I'm here" edits that cause collateral damage

3. **Verify Visual Output**
   - I can't see the screen - YOU verify visuals
   - After any change, ask you to verify it looks correct
   - Don't assume "works" means "works correctly"

4. **Ask Before Large Changes**
   - For significant changes, present a plan first
   - Wait for confirmation before executing

5. **Document Changes**
   - Keep this file updated with what's changed
   - Note any issues discovered during work

---

### What You (Human) Need to Do

1. **Verify Visuals**
   - You're the final check for colors, spacing, layout
   - Tell me if something looks wrong - don't assume it's correct

2. **Provide Context at Start**
   - At start of each session, tell me what we worked on last time
   - I have no memory between sessions

3. **Test Animation Timing**
   - Scroll through the page to verify animations feel right
   - Tell me if animations are too fast/slow/instant

4. **Check Color Contrast**
   - Verify text is readable against backgrounds
   - Some backgrounds are images - harder to predict contrast

---

## Animation System

### ScrollWrapper Usage

Each section uses ScrollWrapper for scroll-triggered animations:

```tsx
// Individual animations (each element triggers when scrolled into view)
<ScrollWrapper>
  <div>Content that animates when visible</div>
</ScrollWrapper>

// With delay (staggered sequence)
<ScrollWrapper delay={0.2}>
  <div>Animates 0.2s after becoming visible</div>
</ScrollWrapper>
```

### Animation Classes

- `animate-fade-up` - content fades in while moving up
- `animate-opacity` - content fades in (no movement)

---

## Color Palette Reference

### New Palette (Warm Premium)

| Token | Hex | Usage |
|-------|-----|-------|
| amber-500 to amber-700 | #F59E0B to #B45309 | Accent/gradients |
| cream-50 | #FEFBF6 | Light backgrounds |
| cream-100 | #FDF8F0 | Card backgrounds |
| cream-200 | #FAF0E6 | Secondary text |
| charcoal-900 | #1C1410 | Dark backgrounds |
| charcoal-800 | #2A1F18 | Darker elements |
| charcoal-700 | #3D2E24 | Borders |
| charcoal-600 | #4A3B30 | Body text |

### CSS Classes Available
- `bg-gradient-warm` - amber gradient
- `bg-gradient-cream` - cream gradient
- `bg-gradient-charcoal` - dark gradient
- `text-gradient` - gradient text
- `font-serif` - Fraunces serif

---

## Debugging Protocol

When something is wrong:

1. **I will:**
   - Read the relevant file
   - Identify what's actually rendered vs what should be
   - Present a plan with specific changes
   - Make one change at a time

2. **You will:**
   - Verify visuals on your screen
   - Tell me if it looks correct or not
   - Point out what's broken

---

## Contact

For issues or questions, reference this file at the start of each session.
