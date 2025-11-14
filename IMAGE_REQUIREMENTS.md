# FairyAI Website - Image Requirements

This document lists all image placeholders across the FairyAI website and provides detailed specifications for each.

## Summary

**Total Images Needed:** 8 unique images
**Priority:** High for Hero, How It Works, and Founder sections

---

## 1. Homepage Hero - App Screenshot

**Location:** `src/components/sections/Hero.tsx` (line 63-66)
**Current Label:** "App Screenshot"
**Aspect Ratio:** Portrait (9:16 or similar mobile app aspect ratio)
**Recommended Size:** 1080 x 1920 px (2x resolution for retina displays)
**Format:** PNG or JPG
**File Size:** < 500 KB (optimize for web)

**Description:**
Screenshot of the FairyAI mobile app showing the main interface. Ideally showing a story being read or the character library screen. Should look polished and professional.

**Styling:** `shadow-2xl` (large shadow for depth)

**Suggested Content:**
- Clean UI with visible FairyAI branding
- Showing a story with illustration or character library
- Bright, appealing colors matching brand (soft blue/green palette)

---

## 2. How It Works (Homepage) - Step Screenshots

**Location:** `src/components/sections/HowItWorks.tsx` (line 66-69)
**Current Label:** Dynamic - `${step.title} Screenshot`
**Aspect Ratio:** Square (1:1)
**Recommended Size:** 800 x 800 px
**Format:** PNG or JPG
**File Size:** < 300 KB each

**Description:**
4 square screenshots representing each step of the how-it-works process:
1. "Create Characters" - Character creation screen
2. "Generate Stories" - Story generation interface
3. "Listen & Read" - Story reading screen with audio player
4. "Continue Adventures" - Story continuation feature

**Styling:** `mx-auto max-w-[250px]` (centered, max 250px wide)

**Suggested Content:**
- Clear, focused UI elements
- Consistent visual style across all 4 images
- Mobile app screenshots preferred

---

## 3. Four Pillars - Illustration Images

**Location:** `src/components/sections/FourPillars.tsx` (line 100-103)
**Current Label:** Dynamic - `${pillar.title} Illustration`
**Aspect Ratio:** Square (1:1)
**Recommended Size:** 600 x 600 px
**Format:** PNG or SVG (vector preferred)
**File Size:** < 200 KB each

**Description:**
4 illustrations representing the four pillars of FairyAI:
1. "Persistent Characters" - Illustration of character consistency/memory
2. "Story Continuation" - Illustration of chapter books or story progression
3. "Multilingual Narration" - Illustration of languages/audio
4. "Fairy Corner Library" - Illustration of curated content library

**Styling:** `shadow-lg` (medium shadow)

**Suggested Content:**
- Colorful, friendly illustrations (not photos)
- Match brand color palette (soft blues, greens)
- Icon-like or infographic style
- Could use custom illustrations or stock vector graphics

---

## 4. Example Stories - Story Illustration

**Location:** `src/components/sections/ExampleStories.tsx` (line 51-54)
**Current Label:** "Story Illustration"
**Aspect Ratio:** Video (16:9)
**Recommended Size:** 1920 x 1080 px
**Format:** PNG or JPG
**File Size:** < 500 KB

**Description:**
Featured story illustration showing an example of FairyAI-generated story art. Should look magical and appealing to children and parents.

**Styling:** `mb-6` (margin bottom)

**Suggested Content:**
- High-quality storybook-style illustration
- Whimsical, child-friendly artwork
- Could be an actual FairyAI-generated story illustration
- Bright colors, clear composition

---

## 5. Founder Section - Nathan's Portrait

**Location:** `src/components/sections/FounderSection.tsx` (line 20-23)
**Current Label:** "Founder Portrait"
**Aspect Ratio:** Square (1:1)
**Recommended Size:** 800 x 800 px
**Format:** JPG
**File Size:** < 300 KB

**Description:**
Professional headshot or casual portrait of Nathan (founder). Should feel approachable and trustworthy.

**Styling:** `rounded-full shadow-xl` (circular, large shadow)

**Suggested Content:**
- Headshot or upper-body portrait
- Friendly, approachable expression
- Professional but warm feel
- Clean background or subtle environment
- Good lighting and sharp focus

**Important:** Since this will be displayed as a circle, ensure the subject is centered and fills the frame appropriately.

---

## 6. How It Works Page - Character Creation Screenshot

**Location:** `src/pages/HowItWorksPage.tsx` (line 67-70)
**Current Label:** "Character Creation Screenshot"
**Aspect Ratio:** Square (1:1)
**Recommended Size:** 1000 x 1000 px
**Format:** PNG or JPG
**File Size:** < 400 KB

**Description:**
Screenshot of the character creation interface in the FairyAI app, showing the form or wizard where users create characters.

**Styling:** `shadow-xl rounded-lg` (large shadow, rounded corners)

**Suggested Content:**
- Clear view of character creation UI
- Could show Character Wizard or text-based creation
- Include visible traits, abilities, or image upload option
- Mobile app screenshot preferred

---

## 7. How It Works Page - Story Reader + Continue Button

**Location:** `src/pages/HowItWorksPage.tsx` (line 149-152)
**Current Label:** "Story Reader + Continue Button Screenshot"
**Aspect Ratio:** Portrait (9:16 or mobile aspect ratio)
**Recommended Size:** 1080 x 1920 px
**Format:** PNG or JPG
**File Size:** < 500 KB

**Description:**
Screenshot of the story reading interface with the "Continue" button prominently visible, demonstrating the story continuation feature.

**Styling:** `shadow-xl rounded-lg` (large shadow, rounded corners)

**Suggested Content:**
- Story text displayed clearly
- "Continue Story" button visible
- Clean, readable interface
- Shows story illustration/cover art if possible
- Mobile app screenshot

---

## 8. How It Works Page - Fairy Corner Screenshot

**Location:** `src/pages/HowItWorksPage.tsx` (line 232-235)
**Current Label:** "Fairy Corner Screenshot"
**Aspect Ratio:** Portrait (9:16 or mobile aspect ratio)
**Recommended Size:** 1080 x 1920 px
**Format:** PNG or JPG
**File Size:** < 500 KB

**Description:**
Screenshot of the Fairy Corner section showing the library of classic fairy tales, nursery rhymes, and daily AI stories.

**Styling:** `shadow-xl rounded-lg` (large shadow, rounded corners)

**Suggested Content:**
- Grid or list view of stories
- Classic fairy tale covers visible
- Clean, organized library interface
- Shows variety of content (classics + daily stories)
- Mobile app screenshot

---

## Image Optimization Guidelines

### General Best Practices

1. **File Formats:**
   - Use **PNG** for screenshots with text or UI elements (better clarity)
   - Use **JPG** for photographs and complex images (smaller file size)
   - Use **SVG** for vector illustrations (scalable, small file size)

2. **Compression:**
   - All images should be optimized for web
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target file sizes listed above for optimal performance

3. **Responsive Considerations:**
   - Images are responsive and will scale down on mobile
   - Provide 2x resolution for retina/high-DPI displays
   - Text in images should remain readable when scaled down

4. **Color Profile:**
   - Use sRGB color space for web compatibility
   - Ensure colors match FairyAI brand palette:
     - Soft Blue: #3B82F6 (primary)
     - Soft Green: #22C55E (secondary)
     - Neutral grays for text/backgrounds

5. **Accessibility:**
   - Ensure sufficient contrast in UI screenshots
   - Avoid relying solely on color to convey information
   - All images have descriptive `label` props for accessibility

---

## File Naming Convention

When adding images to the project, use this naming convention:

```
/public/images/
  hero-app-screenshot.png
  how-it-works-1-create-characters.png
  how-it-works-2-generate-stories.png
  how-it-works-3-listen-read.png
  how-it-works-4-continue-adventures.png
  four-pillars-characters.svg
  four-pillars-continuation.svg
  four-pillars-narration.svg
  four-pillars-fairy-corner.svg
  example-story-illustration.png
  founder-nathan-portrait.jpg
  character-creation-screenshot.png
  story-reader-screenshot.png
  fairy-corner-screenshot.png
```

---

## Implementation Instructions

### To Replace a Placeholder:

1. Add your image file to `/public/images/` folder
2. Find the corresponding `<ImagePlaceholder>` component in the source file
3. Replace it with a standard `<img>` tag:

```tsx
// BEFORE:
<ImagePlaceholder
  label="App Screenshot"
  aspectRatio="portrait"
  className="shadow-2xl"
/>

// AFTER:
<img
  src="/images/hero-app-screenshot.png"
  alt="FairyAI mobile app showing story reading interface"
  className="shadow-2xl w-full h-auto"
/>
```

4. Ensure the `alt` attribute is descriptive for accessibility
5. Test the image displays correctly at different screen sizes
6. Verify file size and loading performance

---

## Priority Order

If resources are limited, prioritize images in this order:

1. **Hero App Screenshot** (homepage, first impression)
2. **Founder Portrait** (builds trust)
3. **How It Works Page Screenshots** (all 3: character creation, story reader, Fairy Corner)
4. **Homepage How It Works Step Screenshots** (4 images)
5. **Example Story Illustration** (demonstrates quality)
6. **Four Pillars Illustrations** (can use stock graphics temporarily)

---

## Current Status

All 8 image placeholders are currently using the `ImagePlaceholder` component with:
- Gradient backgrounds (soft blue to soft green)
- Centered label text
- Proper aspect ratios maintained
- Responsive design (scales correctly on mobile)

**Next Steps:**
1. Gather or create the 8 images listed above
2. Optimize all images for web
3. Add images to `/public/images/` folder
4. Replace `<ImagePlaceholder>` components with `<img>` tags
5. Test across devices and browsers

---

## Questions or Issues?

If you need clarification on any image requirements or have technical questions about implementation, please refer to:
- React component files in `/src/components/`
- Page files in `/src/pages/`
- Or contact the development team

---

**Document Version:** 1.0
**Last Updated:** November 2025
**Maintained By:** FairyAI Development Team
