# basuw.github.io

Personal portfolio with a macOS-inspired UI — visit at **[basuw.github.io](https://basuw.github.io)**

---

## Overview

A fully custom personal website built without any build tools or frameworks beyond Vue 3 loaded via CDN. The interface mimics a macOS desktop: menu bar with clock/status, window controls (minimize, fullscreen), and a dock. Supports dark and light themes with persistence via `localStorage`.

---

## Pages

### About me

- **Timeline** — life events from 2018 to 2026, alternating left/right cards with expandable detail modals
- **Experience** — professional (Michelin DevOps apprenticeship), academic (IUT, ISIMA), volunteer (firefighter), and other experiences with linked technologies
- **Projects** — gallery of 10+ personal projects with carousel modal, keyboard navigation, and a localStorage-based like system
- **Personality** — a visual introduction

### Developer tools

| Tool | Description |
| --- | --- |
| **Font tester** | Type specimen cards for 6 custom typefaces — live input field to try each font |
| **Color palette** | Full design token explorer with site colors, gradients, and 6 harmonious palettes — click to copy any value |
| **Terminal** | Easter egg interactive terminal with ASCII welcome art, command history (↑/↓), and custom commands |

### Contact

Animated carousel with direct links to LinkedIn, GitHub, and Email.

---

## Projects showcase

A few highlights from the projects page:

| Project | Stack | Year |
| --- | --- | --- |
| **Capitalot** — investment portfolio tracker | Vue 3, Spring Boot, TypeScript, PostgreSQL, Docker | 2026 |
| **4L des Dômes** — e-commerce for the 4L Trophy | Vue 3, Vite, Spring Boot, PostgreSQL, Stripe | 2025 |
| **FallZ** — fall detector for hikers | Arduino, C++, Python, LoRaWAN | 2025 |
| **Recoguenize** — song recognition à la Shazam | Flutter, Spring Boot, Python | 2024 |
| **HyperSet** — real-time multiplayer Set game | Vue.js, Node.js, Socket.io | 2023 |
| **Home Automation** — RGB LED & sensor dashboard | Arduino, MQTT, Grafana, Docker | ongoing |

---

## Tech stack

### Runtime

- [Vue.js 3](https://vuejs.org/) — SPA via ES modules, no build step
- Vanilla HTML5 + CSS3

### UI & Icons

- [Font Awesome 6](https://fontawesome.com/) — icons throughout the UI
- [DevIcons v2](https://devicons.github.io/devicon/) — tech stack badges on project cards
- [Google Fonts — Nunito](https://fonts.google.com/specimen/Nunito) — UI body font

### Custom fonts

6 typefaces loaded via `@font-face`: Vercetti · Aeronaut · Chillax · Nohemi · HK Grotesk Wide · Skyer

### Design system

- CSS custom properties for all colors, gradients, and shadows
- Dual theme (dark default / light) with instant switching
- Glassmorphism: `backdrop-filter: blur`, rgba card backgrounds
- Responsive from 480px to 1400px+

No build process — zero npm dependencies at runtime, no Webpack/Vite/Rollup.

---

## Project structure

```text
basuw.github.io/
├── index.html          # Entry point — Vue 3 app, macOS UI shell
├── style/              # All CSS (main, per-page, per-component)
├── views/              # Vue component definitions (ES modules)
│   ├── home.js
│   ├── contact.js
│   ├── website.js
│   ├── about/          # Timeline, experience, projects, personality
│   └── development/    # Fonts, color palette, terminal
├── data/               # JSON data files
│   ├── fonts.json
│   ├── projects.json
│   └── timeline.json
├── fonts/              # Local font files (ttf/otf)
└── img/                # Images and project media
```


## Author

Bastien Jacquelin — [github.com/Basuw](https://github.com/Basuw)
