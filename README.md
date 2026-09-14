# Fixoraa.tech — 100 Free Online Tools

Fixoraa.tech ek vintage-light tools directory hai. Project TanStack Start, React, TypeScript, Tailwind CSS, Motion aur Lucide icons use karta hai.

## Local setup

```bash
bun install
bun run dev
```

## Naya tool kaise add karein

1. `src/data/tools.ts` kholein.
2. Sahi category ke `tools` array mein naya object add karein:

```ts
{ name: "MP3 Cutter", slug: "mp3-cutter", icon: "Scissors", description: "Cut MP3 files" }
```

3. **Slug subdomain se exact match hona chahiye.** `mp3-cutter` ka link `https://mp3-cutter.fixoraa.tech` hoga.
4. Category ka `count` update karein.

## Nayi category kaise add karein

`src/data/tools.ts` mein `categories` array ke andar existing category object copy karein. Unique `id`, display `name`, Lucide `icon`, vintage `color`, `description`, `preview`, `count`, aur `tools` add karein.

```ts
{
  id: "audio-tools",
  name: "Audio Tools",
  icon: Music,
  color: "orange",
  count: 1,
  description: "Edit and convert audio files",
  preview: "MP3 Cutter...",
  tools: [
    { name: "MP3 Cutter", slug: "mp3-cutter", icon: "Scissors", description: "Cut MP3 files" },
  ],
}
```

Icon ko file ke top par `lucide-react` se import karna na bhoolein.

## Editable content

- Homepage ka long “Why Fixoraa.tech?” content: `src/routes/index.tsx`
- About page vision: `visionText` in `src/routes/about.tsx`
- Footer newsletter: visual-only; email delivery abhi connected nahi hai
- Contact form: visual-only; message delivery abhi connected nahi hai

## Deployment

Lovable se publish karein, ya repository ko apne hosting provider se connect karein. Wildcard DNS `*.fixoraa.tech` ko har live tool application ke deployment rules ke mutabik configure karna hoga.