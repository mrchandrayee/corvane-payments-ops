# Corvane — Payments Operations Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/corvane-payments-ops/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive, runnable frontend recreation of the uploaded 8.87-second screen recording.

## Run
Unzip the project and open `index.html` in Chrome, Edge, Firefox or Safari. No package installation or build step is required.

## Recreated areas visible in the video
- Corvane Payments ops shell, Teodora Vance admin profile, global search, UTC clock, New action, notification badge and Live mode status.
- Overview: captured-today amount, volume trend, Needs you queue, approval rate, fee revenue, refunds and average ticket.
- Payments: payment list, status counts, filters, search and export.
- Disputes: dispute rate, money held, win rate and four workflow columns (Needs response, With the bank, Won, Lost).
- Risk: risk-score histogram, threshold lab and allow/review/block outcomes.
- Payouts: ready, in-transit and returned payout cards.
- Merchants: merchant overview cards.
- Reports, Developers, Audit log and Settings placeholder workspaces.
- Light/dark theme is switchable by the top theme control (browser system preference is not required).

## Interactions
- Sidebar navigation switches dashboard sections.
- Global search / `Ctrl+K` or `⌘K` filters payment rows.
- New opens a create-payment modal. A submitted payment is added to the local demo data.
- Export downloads a CSV of the current sample payment rows.
- Review queue opens the Payments workspace.
- Theme control can be switched from the topbar (use the theme shortcut button in the header).

## Code visible in the recording
The editor panel is labelled `App.tsx`, `src > App.tsx > applyTheme`. The readable TypeScript function has been transcribed into `src/App.tsx`. It:
- resolves `system` theme using `matchMedia('(prefers-color-scheme: dark)').matches`;
- writes the selected theme to `document.documentElement.dataset.theme`;
- uses `document.startViewTransition`;
- calculates a circular reveal radius with `Math.hypot` and `Math.max`;
- creates `circle(...)` clip-path values around the pointer/toggle coordinate;
- animates `::view-transition-new(root)` for 420 ms.

The recording is low-resolution for one conditional on line 8 (`!dur(1)` is not confidently readable), so that uncertain fragment is called out in a comment rather than silently asserted. The working dashboard implementation is plain HTML/CSS/JS; the TSX file is a source-panel transcription/reference and is not a build dependency.

## Data and integration limits
All payment IDs, amounts, merchant names, risk scores, disputes and payouts are sample data for the frontend demo. There is no live processor, bank connection, authentication, KYC, risk engine or backend. The New payment form only updates local in-memory demo state.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
