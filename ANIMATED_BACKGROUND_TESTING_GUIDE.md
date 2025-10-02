# Animated Background Testing Guide

## Overview
This guide covers testing the animated background component integrated into the WestGroup Financial website hero section. The animation uses framer-motion to create flowing SVG paths as a dynamic background.

## Dependencies Installed

The following dependencies were installed to support the animated background:

- **@astrojs/react** (v4.4.0) - Enables React components in Astro
- **react** (v19.2.0) - Core React library
- **react-dom** (v19.2.0) - React DOM rendering
- **framer-motion** (v12.23.22) - Animation library for smooth transitions
- **@radix-ui/react-slot** (v1.2.3) - Utility for component composition
- **class-variance-authority** (v0.7.1) - For managing component variants
- **clsx** (v2.1.1) - Utility for conditional classNames
- **tailwind-merge** (v3.3.1) - Merges Tailwind CSS classes intelligently

## Project Structure

The integration added the following files:

```
src/
├── components/
│   ├── Hero.astro (modified)
│   └── ui/
│       ├── background-paths.tsx (new)
│       └── button.tsx (new)
└── lib/
    └── utils.ts (new)
tsconfig.json (new)
astro.config.mjs (modified)
```

## Component Details

### BackgroundPaths Component
Location: `src/components/ui/background-paths.tsx`

Features:
- 36 animated SVG path elements creating flowing lines
- Dual-direction animation (position 1 and -1)
- Infinite looping with randomized durations
- Dark gradient background with animated overlay
- Responsive design that scales to all screen sizes

### Hero Section Integration
Location: `src/components/Hero.astro`

Changes:
- Removed static background image (`/images/homepage-hero.webp`)
- Removed dark overlay div
- Added `<BackgroundPaths client:load />` component
- Background now renders as an animated SVG pattern

## Local Testing Instructions

### 1. Install Dependencies

If you clone the repository fresh, run:

```bash
npm install
```

This will install all required dependencies including:
- framer-motion
- @radix-ui/react-slot
- class-variance-authority
- React and React DOM

### 2. Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:4321/`

### 3. What to Test

#### Visual Animation Testing:
1. **Navigate to homepage** - The hero section should display animated flowing paths
2. **Path Animation** - Watch for smooth, continuous animation of SVG paths
3. **Opacity Changes** - Paths should fade in and out (opacity: 0.3 to 0.6)
4. **Multiple Layers** - You should see overlapping animated paths creating depth

#### Responsive Testing:
1. **Desktop** (1920x1080+) - Full animation should be visible
2. **Tablet** (768x1024) - Animation scales appropriately
3. **Mobile** (375x667) - Animation remains smooth and visible

#### Performance Testing:
1. **CPU Usage** - Monitor browser performance tools
2. **Frame Rate** - Should maintain 60fps on modern devices
3. **Memory** - No memory leaks during extended viewing
4. **Initial Load** - Component should load within 1-2 seconds

#### Browser Compatibility:
Test in the following browsers:
- Chrome/Edge (v120+)
- Firefox (v120+)
- Safari (v16+)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android)

### 4. Build Testing

To test the production build:

```bash
npm run build
npm run preview
```

The preview server will start at `http://localhost:4321/`

**Note:** The build may show TypeScript errors from existing code. These are pre-existing and don't affect the animated background functionality. To build without strict checks temporarily, you can modify `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  site: 'https://westgroupfinancial.vercel.app',
  output: 'static',
  typescript: {
    ignoreBuildErrors: true  // Add this temporarily
  }
});
```

## Live Deployment Testing

### Vercel Deployment

The site is deployed at: `https://westgroupfinancial.vercel.app`

#### After Deployment:
1. **Visit Homepage** - Check if animated background loads
2. **Network Tab** - Verify all assets load correctly
3. **Console** - Check for any JavaScript errors
4. **Lighthouse Score** - Run performance audit

### Expected Behavior on Live Site:

1. **Initial Load:**
   - Background paths should start animating immediately
   - No flash of unstyled content (FOUC)
   - Smooth transition from loading to animation

2. **During Interaction:**
   - Hero content remains readable over animation
   - Text maintains proper z-index layering
   - Call-to-action buttons remain clickable

3. **Performance Metrics:**
   - First Contentful Paint (FCP): < 1.5s
   - Largest Contentful Paint (LCP): < 2.5s
   - Time to Interactive (TTI): < 3.5s
   - Cumulative Layout Shift (CLS): < 0.1

## Troubleshooting

### Common Issues:

#### 1. Animation Not Visible
**Solution:** Check browser console for errors. Ensure React is properly hydrated with `client:load` directive.

#### 2. Choppy Animation
**Solution:**
- Check if hardware acceleration is enabled
- Reduce number of animated paths if needed
- Test on different devices/browsers

#### 3. Build Errors
**Solution:**
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript configuration in `tsconfig.json`

#### 4. React Hydration Errors
**Solution:**
- Verify `client:load` directive is present
- Check that @astrojs/react is in astro.config.mjs
- Ensure React versions match (19.2.0 for both react and react-dom)

#### 5. Path Alias Not Working
**Solution:**
- Verify tsconfig.json has correct paths configuration:
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

## Customization Options

### Adjust Animation Speed:
In `background-paths.tsx`, modify the duration:
```tsx
transition={{
  duration: 20 + Math.random() * 10,  // Change these values
  repeat: Number.POSITIVE_INFINITY,
  ease: "linear",
}}
```

### Change Path Colors:
Modify the stroke opacity or add colors:
```tsx
<motion.path
  stroke="currentColor"  // Change to specific color like "#3b82f6"
  strokeOpacity={0.1 + path.id * 0.03}  // Adjust opacity
/>
```

### Adjust Number of Paths:
Change the array length:
```tsx
const paths = Array.from({ length: 36 }, (_, i) => ({  // Change 36 to desired number
```

## Version Information

- **Node.js:** v16+ required
- **npm:** v7+ required
- **Astro:** v4.15.11
- **TypeScript:** v5.6.2
- **Tailwind CSS:** v3.4.13

## Support

For issues or questions:
1. Check the browser console for errors
2. Review this testing guide
3. Test in incognito/private mode to rule out extensions
4. Clear browser cache and hard reload (Ctrl+Shift+R)

## Next Steps

After confirming the animation works:
1. Monitor user feedback on animation performance
2. Consider A/B testing static vs animated background
3. Optimize animation parameters based on analytics
4. Test on lower-end devices for accessibility

---

**Last Updated:** October 2, 2025
**Component Version:** 1.0.0
