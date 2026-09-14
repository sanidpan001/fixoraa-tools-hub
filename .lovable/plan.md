# Fixoraa.tech tools directory

## Build
- Replace the starter screen with a polished vintage-light tools directory at `/` using the specified cream, orange, green, beige, gold, and text palette.
- Add a shared header, animated background, live search, expandable category cards, tool cards, all-tools directory, editorial SEO section, newsletter UI, and footer.
- Add About, Contact, Privacy, and Terms pages with consistent navigation and route-specific search metadata.
- Populate one central data file with exactly 100 realistic tools across Image, PDF, Text, Video, and AI categories, including Hindi-English editing guidance.

## Interactions
- Use Motion for React for staggered entrance, viewport reveals, hover lift/tilt, icon movement, click feedback, search focus, filtered result transitions, and spring accordion expansion.
- Keep one category open at a time, synchronize the URL hash, and open each tool’s Fixoraa subdomain in a new tab.
- Make search filter categories, category tools, and the A–Z list instantly.

## Technical details
- Implement within the existing TanStack Start application rather than replacing its supported framework; preserve the requested React, TypeScript, Tailwind, Lucide, and motion behavior.
- Add reusable components and semantic design tokens, load Outfit and DM Sans through the document head, and keep all colors theme-driven.
- Add contact and newsletter interfaces without persistence or sending, since no backend was requested.
- Verify compilation plus desktop and mobile rendering and interactions.
