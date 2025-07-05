# Portfolio Theme Documentation

## Color Palette

The primary color palette consists of a gradient from blue to purple, creating a modern and dynamic feel:

- **Primary Gradient**:
  - From: Blue-500 (`#3B82F6`)
  - To: Purple-600 (`#9333EA`)
- **Hover Gradient**:

  - From: Blue-600 (`#2563EB`)
  - To: Purple-700 (`#7E22CE`)

- **Accent Color**:
  - Teal Glow: rgba(56,224,231,0.6) - Used for hover effects/glow

## Typography

- **Font Family**: System default font stack (as specified by Tailwind)
- **Font Weights**:
  - Medium (`font-medium`) for buttons and interactive elements
  - Regular for general text

## UI Components

### Buttons

Buttons follow a consistent design pattern with the following variants:

#### Primary Button

- Gradient background (blue-500 to purple-600)
- White text
- Rounded corners (`rounded-lg`)
- Shadow effect
- Hover effects:
  - Darker gradient (blue-600 to purple-700)
  - Scale increase (105%)
  - Teal glow effect

#### Basic Button

- Outlined with blue border
- Blue text that turns purple on hover
- Transparent background
- Same rounded corners as primary

### Header

The site header features:

- Full-width gradient background (blue-500 to purple-600)
- Code icon as the logo
- Responsive navigation:
  - Dropdown menu on mobile/tablet
  - Horizontal navigation on desktop (lg breakpoint)
- Fixed height of 3.5rem (h-14)

## Layout

- Responsive design with breakpoints following Tailwind's convention
- Mobile-first approach with `lg:` prefix for desktop styles
- Padding scales:
  - Mobile: px-4 (1rem)
  - Desktop: px-6 (1.5rem)

## Interactive Elements

All interactive elements feature:

- Smooth transitions (duration-300)
- Focus states with ring outlines
- Disabled states with reduced opacity
- Hover animations

## Accessibility Features

- Focus-visible outlines for keyboard navigation
- Screen-reader only text where appropriate (sr-only)
- Sufficient color contrast for text readability
- Disabled states properly handled

---

This theme combines modern web design elements with a professional aesthetic suitable for a developer portfolio. The blue-to-purple gradient creates visual interest while maintaining a clean, professional appearance.
