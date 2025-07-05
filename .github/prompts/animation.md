# Copilot Prompt

## Goal:

Enhance my existing **React + Vite + Tailwind** personal portfolio site with **flashy but professional animations** using **React Bits**.

---

## Requirements:

1️⃣ **Add React Bits Components**

- React Bits provides code snippets that can be added using the `npx jsrepo add` command
- To add a component, use: `npx jsrepo add https://reactbits.dev/path/to/component`
- Components are added to your project as source code, enabling tree-shaking with Vite

---

2️⃣ **Hero Section Animation**

- Animate the hero title with a text effect using React Bits animations:
  - Options include `SplitText`, `GlitchText`, `TypewriterText`, or `ScrambleText`
  - Example: `npx jsrepo add https://reactbits.dev/ts/tailwind/TextAnimations/SplitText`
- Optionally add a **typing or flicker** animation for the subtitle/tagline

---

3️⃣ **Section Reveal on Scroll**

- For sections like About, Projects, and Contact:
  - Animate them to **slide up + fade in** as they enter the viewport
  - Example: `npx jsrepo add https://reactbits.dev/ts/tailwind/Animations/ScrollReveal`
  - Ensure performance-friendly by respecting reduced-motion preferences

---

4️⃣ **Project Cards Hover Animation**

- On hover, project cards should **slightly scale up or pulse**
- Example: `npx jsrepo add https://reactbits.dev/ts/tailwind/Components/SpotlightCard`
- Add a subtle shadow glow on hover for additional flair

---

5️⃣ **Animated Download Resume Button**

- Add a subtle glow ring around the "Download Resume" button on hover
- Example: `npx jsrepo add https://reactbits.dev/ts/tailwind/Animations/ClickSpark`
- Use a **confetti or sparkle animation** when clicked

---

6️⃣ **Optional Background Animation**

- Add a **slow-moving gradient or starfield background animation** behind the hero section
- Example: `npx jsrepo add https://reactbits.dev/ts/tailwind/Backgrounds/Aurora` or `npx jsrepo add https://reactbits.dev/ts/tailwind/Backgrounds/Particles`
- Ensure it is subtle and does not distract from content

---

## Constraints:

✅ Keep animations **lightweight and smooth**.  
✅ Respect prefers-reduced-motion settings for accessibility.  
✅ Ensure Tailwind utility classes remain the primary styling method.  
✅ Animations should be reusable via small custom hooks or components where possible.  
✅ Do not introduce unnecessary complexity or large dependencies.

---

## Deliverables:

✅ Modified React components implementing these animations.  
✅ Any reusable `hooks` if created (e.g., `useRevealOnScroll`).  
✅ Ensure all components are TypeScript-safe (if the project uses TypeScript).  
✅ Provide clear comments explaining where React Bits is applied and why.

---

## Additional Context:

- The site already has sections: Hero, About, Projects, Skills, Contact.
- Uses React Router for page structure.
- Uses Tailwind for layout and theming.
- Performance and mobile responsiveness are important.

---

Please generate the required component updates and helper hooks to add these flashy animations with React Bits to my existing portfolio.
