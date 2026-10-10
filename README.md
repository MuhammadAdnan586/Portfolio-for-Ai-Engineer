# Muhammad Adnan - AI Engineer Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion, with a voice narration system built on the browser Web Speech API.

## Run locally

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # production build + type check

Use Chrome or Edge for the best narration voices. Node 18.17 or newer.

## Where to edit content (no component changes needed)

All text lives in /data:

- profile.ts: name, title, roles, email, phone, LinkedIn, GitHub, CV path
- hero.ts: hero tagline and the 4 stat cards
- about.ts: About paragraphs, highlight cards, quick facts
- skills.ts: skill groups (see "Tech logos" below)
- experience.ts, education.ts, certifications.ts
- projects.ts: the 4 projects (problem, solution, features, results, stack, links)
- narration.ts: voice scripts for intro, about and each project
- contact.ts: contact cards and the Formspree form ID
- navigation.ts: navbar links

## Replace the GitHub and LinkedIn links

Open data/projects.ts. For every project, set:

- githubUrl: your real repository URL (search for "TODO: replace")
- linkedinUrl: the LinkedIn post about that project (the profile link is used until then)
- liveUrl: a live demo URL. Leave it as "" and the Live Demo button stays hidden.

## Add project screenshots

Put your real screenshots here:

    public/projects/<slug>/screens/01.png
    public/projects/<slug>/screens/02.png

Slugs: nexora-ai, fertilizer-deficiency-monitor, automl-saas, job-search-assistant.

They appear automatically in the gallery (sorted by file name, lightbox with arrow keys and Esc). Supported: png, jpg, webp, gif, avif. You can also list paths manually in the screenshots array of data/projects.ts, which takes priority.

## Add project cover images

1. Open docs/image-prompts.md and run each prompt in an AI image tool.
2. Save the result as public/projects/<slug>/cover.webp (16:9, around 1600x900).

Until a cover exists, a generated SVG artwork is shown, so the layout never breaks.

## Certificates

Images live in public/certs. The DevSynt card needs public/certs/devsynt-fullstack.jpg (export page 1 of the PDF) and then add image: "/certs/devsynt-fullstack.jpg" to the DevSynt entry in data/certifications.ts.

## Tech logos

components/ui/TechBadge.tsx shows only the real logo (name in tooltip) when the name exists in lib/techIcons.ts, otherwise a text chip. To add a logo, import the icon from react-icons (for example "react-icons/si") and add one line to the techIcons map. To force a text chip, delete its line.

## Change the voice

Browser voice: lib/tts/webSpeech.ts picks the best English voice using the score() function, and RATE sets the speed (0.97). Edge usually has the best natural voices. To always use a specific voice, return it from pickVoice().

Narration text: edit data/narration.ts. Scripts are split into short sentences automatically (this avoids the Chrome bug where long speech stops after about 15 seconds).

Use ElevenLabs or OpenAI TTS instead: components only talk to the TTSEngine interface in lib/tts/types.ts (speak, stop, optional prime). Write a class that implements it (call your own API route so the key stays on the server, and play the returned audio), then return it from createTTS() in lib/tts/index.ts. No component changes are needed.

Visitors can mute with the speaker icon in the navbar. The choice is saved in localStorage. The intro gate exists because browsers block audio until the user clicks.

## Contact form

By default the form opens the visitor's email app (mailto). To send from the page itself:

1. Create a free form at https://formspree.io and copy the form ID.
2. Set formspreeId in data/contact.ts.

## SEO and sharing image

- Site URL: automatic on Vercel. For a custom domain, add the environment variable NEXT_PUBLIC_SITE_URL (for example https://yourname.com).
- Link preview image: public/og.png (1200x630). Replace it with any image of the same name.
- Favicon: app/icon.svg. Also generated: sitemap.xml, robots.txt and JSON-LD Person data.

## Deploy to Vercel

1. Push the project to a new GitHub repository:

        git add .
        git commit -m "Portfolio"
        git branch -M main
        git remote add origin https://github.com/MuhammadAdnan586/<repo-name>.git
        git push -u origin main

2. Go to https://vercel.com, choose Add New, then Project, import the repository and press Deploy. The defaults are correct.
3. After the first deploy, put the live URL into your CV, LinkedIn and GitHub profile.
4. Every push to main redeploys automatically.

## Accessibility and performance notes

- Skip-to-content link, visible focus rings, aria labels, live captions for narration, keyboard-navigable lightbox.
- prefers-reduced-motion is respected (no smooth scroll, static particles, no reveal animations).
- The particle background is lazy-loaded, pauses off-screen and on hidden tabs. Images use next/image.