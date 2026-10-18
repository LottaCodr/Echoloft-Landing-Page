# Echoloft

A responsive, research-led landing page for Echoloft's small-business website package. Built with React 19, Vite, Tailwind CSS 4, Radix UI and shadcn/ui components.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

The Vite configuration accepts preview hosts. No API keys or environment variables are required to render the site.

```bash
npm run build
npm run lint
```

## Browser tests

```bash
npx playwright install chromium
npm test
```

To use an existing compatible Chromium installation:

```bash
CHROMIUM_EXECUTABLE_PATH=/path/to/chromium npm test
```

Tests include responsive layouts, keyboard navigation, portfolio filtering, dialog focus handling, contact validation, reduced motion and automated axe accessibility checks. Test output is ignored by Git. Automated accessibility checks do not replace manual screen-reader or real-device testing.

## Project structure

- `src/App.jsx` — section composition and shared modal state.
- `src/components/landing/` — redesigned page sections, dialogs and shared visual components.
- `src/components/landing/content.js` — portfolio records, FAQs and existing contact destinations.
- `src/components/ui/` — shadcn-style Button, Accordion, Dialog and Tabs backed by Radix primitives where applicable.
- `src/index.css` — fonts, theme tokens, base rules and accessibility defaults.
- `src/App.css` — landing-page layout, visual system and responsive styles.
- `public/images/optimized/` — locally optimized WebP copies of existing images; originals are retained.
- `docs/UI-UX-RESEARCH.md` — audit, Figma Community reference comparison, design rationale, evidence limits and follow-up research plan.

The previous section components in `src/components/` are retained but are no longer mounted by the redesigned application. Tailwind scans the active landing components and shared UI directory.

## What is functional

- In-page navigation and mobile menu.
- Industry-filtered portfolio with keyboard-accessible tabs.
- Project-detail dialogs showing the original portfolio work.
- Consultation dialog linking to the existing Calendly booking page.
- Existing WhatsApp, email, telephone and social links.
- Contact form with required-field validation and an encoded email draft.
- Expandable FAQ.

**The contact form is an email-client handoff, not a backend submission.** The UI explicitly tells visitors to send the message in their email app. It does not claim that mail was delivered. No contact data is sent to a server or saved to local storage by this app.

External service availability is not guaranteed by local tests; the tests verify the configured destinations and local behavior.

## Before publishing

Confirm the ₦120,000 price, four-working-day timeline, domain/hosting terms, project scope, renewal charges, portfolio permissions and contact destinations with the business owner. The redesign preserves the existing offer and does not invent a renewal price, testimonial or customer count.

Social-image URLs currently use the existing `https://echoloft.live` production domain. Update `index.html` if deploying to another canonical domain.

Non-breaking dependency audit fixes were applied. `npm audit --omit=dev` reports no vulnerabilities at validation time. Development-only advisories remain in tooling dependencies; review `npm audit` separately rather than forcing a breaking CLI downgrade.

## Design provenance

The page is an original implementation informed by public Figma Community listings and published usability guidance. It is not an imported Figma file or a claim of access to editable/private Figma layers. Source links, selection rationale and limitations are documented in the research note. Existing Echoloft images and the brand symbol were reused from this repository.
