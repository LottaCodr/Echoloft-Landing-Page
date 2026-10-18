# Echoloft: UI/UX research and redesign rationale

**Date:** 18 October 2026  
**Scope:** Research-led redesign of the existing React landing page using Radix UI and shadcn/ui components. “rediux-ui” was interpreted as Radix UI, which was already installed in this repository.

## 1. Research method and limits

This work combines an implementation/content audit, public-source design research, a reference comparison, an original visual design, and browser-based validation.

- Audited the original React components, brand assets, portfolio images, contact destinations, offer and FAQs.
- Reviewed public Figma Community resource descriptions and published design-system guidance. The Community pages do not expose their editable design layers here, and there is no supported Figma connector in this environment. **This is not a claim to have opened, duplicated, or exhaustively inspected the source Figma files.**
- Used homepage usability guidance to evaluate clarity, examples, navigation, hierarchy and cognitive load.
- Implemented an original design rather than importing a paid template or copying a Community file's artwork.
- Validated in Chromium with responsive, interaction and automated accessibility tests.

No customer interviews, live traffic analytics, conversion experiments, or moderated usability sessions were available. The audience assumptions below are hypotheses, and conversion improvements must be measured after release. “Best” means best fit for this specific offer and implementation—not an objective ranking of all Community designs.

## 2. Audience and primary job

**Primary audience:** Nigerian small-business owners who need a credible online presence without hiring or managing a full technical team.

**Job to be done:** “Help me understand what a professional website will cost, what I get, whether you can do good work, and how to get started.”

Likely evaluation questions, inferred from the existing offer and FAQs:

1. Is this for a business like mine?
2. Will it look professional on a phone?
3. What does ₦120,000 actually cover?
4. Can I see examples before contacting you?
5. How long does it take, and what do you need from me?
6. What is included now versus charged or renewed later?
7. Can I talk to a real person through a familiar channel?

**Primary conversion:** Start a free consultation.  
**Secondary conversion:** Start a WhatsApp conversation or prepare an email enquiry.  
**Supporting task:** Evaluate real portfolio work without leaving the page.

## 3. Audit of the existing experience

| Finding in the repository | UX consequence | Redesign decision |
| --- | --- | --- |
| Generic skeleton-style hero illustration | Doesn't demonstrate the service being sold | Use an actual restaurant project in the hero and real previews in the portfolio |
| Repeated sections and a collection of disconnected visual treatments | More scanning effort; no clear narrative | Build one sequence: offer → inclusions → work → process → price → team → FAQ → contact |
| Headline/CTA styling, colored icons, cards and animations vary considerably | Weak brand consistency and competing emphasis | Shared typography, palette, spacing and button hierarchy |
| Hero claims “Trusted by 500+ businesses” and shows stock portraits | Claim cannot be verified from the repository | Remove numerical social proof and stars; identify the real team instead |
| First-year domain/hosting details are separate from the headline price | Readers may assume there are no renewal costs | Place first-year inclusions and renewal caveats beside the full offer |
| FAQ repeats overlapping e-commerce questions | Increases reading without adding clarity | One clear exclusion and a separately quoted path for online stores |
| Original custom dialog implements an overlay but not a full focus-management primitive | Keyboard/focus and screen-reader risks | Replace it with Radix Dialog, styled through the existing shadcn approach |
| Original contact labels are not associated with inputs | Harder for assistive technology and field targeting | Use wrapping labels, native validation and appropriate autocomplete |
| Contact form immediately closes after invoking mailto | Can imply a message was sent when it wasn't | Explain that the email app must open and the user must still send |
| External hero avatars and large PNG portfolio files | More third-party dependencies and transfer cost | Local team portraits and optimized WebP portfolio images |
| Broken manifest, touch-icon and social-image references | Unnecessary failed requests and unreliable sharing | Remove nonexistent manifest/touch icon references and supply a real OG image |

## 4. Figma Community reference shortlist

### Positivus — agency storytelling

The public listing describes an agency landing page intended to showcase services and case studies. This makes it a closer structural reference than an enterprise dashboard or generic product page. [1](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)

**Take forward:** confident typography; distinct service and work sections; a recognizable agency personality.  
**Do not carry over:** a literal template reproduction, an unrelated service catalog, or borrowed testimonials.  
**Fit:** high for visual direction and portfolio storytelling.

### Relume Figma Kit — section consistency

The public Community listing describes a component library with mobile variants and color variables. It is useful as a reference for coherent section systems rather than treating every section as an unrelated composition. [6](https://www.figma.com/community/file/1078092050664989246/relume-figma-kit-v3-7)

**Take forward:** repeated content widths; predictable responsive structure; purposeful section ordering.  
**Do not carry over:** maximum-density marketing pages or every possible section type.  
**Fit:** high for responsive architecture and reuse.

### shadcn/ui: The Ultimate UI Kit for Figma — implementation alignment

The Community listing identifies this as a free, open-source kit maintained by RAVN and based on shadcn/ui. [19](https://www.figma.com/community/file/1462213965300249379/shadcn-ui-the-ultimate-ui-kit-for-figma)

**Take forward:** component vocabulary that corresponds to the actual React implementation.  
**Do not carry over:** stock dashboard appearance; the component system should support the brand rather than become the brand.  
**Fit:** high for buttons, tabs, accordion and dialog semantics.

### Untitled UI — consistency benchmark

The published free-kit description includes foundational styles and components, with a larger paid system available. This was considered as a benchmark for consistency, not a source of licensed page layouts. [5](https://www.untitledui.com/free-figma-ui-kit)

**Take forward:** a disciplined hierarchy and reusable component treatments.  
**Do not carry over:** enterprise-software positioning or claims that paid marketing templates were downloaded.  
**Fit:** medium; useful foundations, less specific to Echoloft's personality.

### Selection matrix

These are qualitative judgments for this project, not measurements of the original files.

| Reference | Agency relevance | Responsive structure | Code alignment | Primary role |
| --- | --- | --- | --- | --- |
| Positivus | Strong | Desktop/mobile reference | Neutral | Personality and storytelling |
| Relume | Strong | Strong public emphasis | Relevant ecosystem | Section architecture |
| shadcn Community kit | Neutral | Component-level | Strong | Interaction consistency |
| Untitled UI | Moderate | System-level | Different implementation | Foundational benchmark |

## 5. Usability principles applied

NN/g's homepage guidance emphasizes communicating the organization's purpose, revealing content through examples, prompting useful actions, and keeping the experience simple. That supports the decision to make the offer explicit and show actual work early. [3](https://www.nngroup.com/articles/homepage-design-principles/)

The recognition-over-recall heuristic recommends making required information visible or easily retrievable. That supports keeping pricing, inclusion labels, navigation and field labels explicit rather than requiring visitors to infer their meaning. [22](https://www.nngroup.com/articles/ten-usability-heuristics/)

### Proposed page narrative

1. **Hero:** “Your business. Only bigger. Online.” The supporting text immediately identifies websites, Nigerian small businesses, the starting price and the timeline.
2. **Inclusions:** Four scannable benefit groups, followed by the conditional free-logo inclusion.
3. **Portfolio:** Real visual proof, with industry tabs and larger previews.
4. **Process:** A plain-language, three-step journey rather than technical deliverables alone.
5. **Pricing:** One existing offer, not invented tiering. First-year coverage and exclusions are adjacent to the price.
6. **Team:** Real people and their original LinkedIn destinations, not fabricated reviews.
7. **FAQ:** Pricing, timing, prerequisites, e-commerce, renewals and editing responsibilities.
8. **Final CTA/footer:** Consultation, WhatsApp, email and phone choices with a consistent visual priority.

### Interaction decisions

- **Sticky header:** Keep key sections and the consultation action accessible.
- **Persistent WhatsApp shortcut (restored after owner feedback):** A fixed, keyboard-accessible contact button remains available on desktop and mobile. It reuses the existing contact destination, respects mobile safe areas, and sits below modal overlays. No unsolicited chat popup or continuous animation is added.
- **One primary CTA family:** Repeated green buttons start the same consultation flow. Secondary actions browse work or ask questions.
- **Portfolio tabs:** Radix keyboard semantics; no horizontal-scroll dependency on mobile; all three projects visible by default.
- **Project dialogs:** View the supplied portfolio screenshots without falsely implying the screenshot is a live website.
- **Consultation dialog:** States what happens next and opens the existing Calendly destination in a new tab. WhatsApp remains an alternative.
- **Contact handoff:** Required name/email/message, optional business name. No backend is invented. A successful draft is explicitly not a sent message; the draft remains editable when navigating back.
- **FAQ:** One expanded answer at a time. Renewal and e-commerce exclusions are discoverable in both pricing and FAQ.

## 6. Visual system

**Direction:** Warm, approachable, editorial and locally relevant—not a generic technology dashboard.

| Element | Decision | Reason |
| --- | --- | --- |
| Base | Warm ivory `#fcfcf8`, white and pale sage | Softer separation without relying on heavy shadows |
| Primary | Forest green `#225c3c` | Retains the existing brand's green association |
| Contrast section | Dark forest `#234732` | Gives the package decision a clear visual anchor |
| Muted copy | Accessible green-neutral values | Preserves warmth without faint, unreadable secondary text |
| Headings | Manrope Variable | Clean, contemporary, readable headline shapes |
| Editorial accents | Lora italic | Adds character and contrast to key phrases |
| Body | DM Sans Variable | Consistent UI and reading text |
| Illustration | Actual portfolio screenshot plus small original CSS compositions | Shows the service and avoids external stock dependencies |
| Imagery | Existing projects and existing staff portraits | Preserves factual brand material |
| Motion | Subtle hover/entry effects; reduced-motion support | Feedback without permanent floating or scroll-gated content |

All fonts are installed locally through Fontsource and served by the app. The original logo symbol is retained alongside a new text wordmark. No new client logos, review scores, conversion metrics or client testimonials were invented.

## 7. Implementation and validation

### Components

- Existing shadcn `Button` with Radix Slot support.
- Existing shadcn `Accordion`, backed by Radix Accordion.
- Replaced the custom dialog implementation with Radix Dialog primitives.
- Added shadcn-style wrappers for Radix Tabs.
- Split page sections and dialogs into `src/components/landing/`.
- Centralized project records, FAQs and contact destinations in `content.js`.
- Kept the previous section files as unmounted legacy material; the application now imports the redesigned sections. Tailwind scans only active landing sections and shared UI components.

### Performance choices

- Converted the existing portfolio images to WebP. For example, the restaurant screenshot goes from approximately 2.3 MB to 280 KB; the original remains available in the repository.
- Lazy-load below-the-fold work/team images; prioritize the hero image.
- Use CSS for decorative shapes instead of new large raster assets.
- Avoid loading the old animation/carousel implementation on the active page.
- No third-party font CDN or stock-avatar request is required to render the landing page.

### Automated checks

The Playwright suite covers:

- A single H1, valid in-page targets and no JavaScript page errors.
- Layout containment and headline visibility at 320, 390, 768, 1024 and 1440 pixels.
- Team image loading.
- Industry filtering, arrow-key tab navigation and project-dialog close/focus restoration.
- Consultation focus trapping, Escape, return focus and correct Calendly href.
- Keyboard-operated accordion behavior.
- Required contact fields, associated labels, encoded email draft and accurate handoff messaging.
- Mobile navigation and transition to the consultation dialog.
- Automated axe WCAG 2 A/AA and WCAG 2.1 AA checks on desktop, mobile and dialog states.
- Reduced-motion scrolling behavior.

Automated accessibility checks are not a full accessibility certification. A screen-reader review and real-device testing are still recommended.

## 8. Owner verification before production

1. Confirm that **₦120,000**, **four working days**, and the **first-year inclusions** are still the live offer.
2. Confirm exact page count, domain eligibility, revision allowance, content responsibilities, post-launch support and renewal charges. These were not invented in the copy.
3. Confirm the existing Calendly, WhatsApp, email, phone and social destinations are current. Automated tests validate the configured URLs, not the external services' availability.
4. Confirm permission to publicly display the original project screenshots and staff portraits.
5. If a direct form submission is required, connect a real backend/email service with consent, spam protection, failure/retry behavior and a privacy notice. The current form intentionally remains an email-client handoff.
6. Review with VoiceOver or NVDA and on real iOS/Android hardware.

## 9. Next research cycle

Run five short, moderated sessions with target business owners on mobile. Ask them to:

- Explain the offer after a brief look at the hero.
- Find what is and isn't included in the package.
- Find renewal information without help.
- Inspect a relevant project.
- Explain how long launch takes and what they need to provide.
- Start a consultation or compose an enquiry without sending test data to the team.

Observe comprehension, hesitation, accidental navigation and successful task completion. Do not substitute preference questions for task observation.

With consent-appropriate analytics, measure consultation clicks, Calendly completions where integration permits, WhatsApp exits, portfolio engagement and pricing/FAQ engagement. Establish a baseline before judging conversion uplift. A useful first experiment is whether a literal “Professional websites for Nigerian small businesses” headline improves comprehension relative to the more editorial hero, keeping the offer and CTA otherwise unchanged.


## 10. Follow-up: section omissions and WhatsApp restoration

The owner requested that the floating WhatsApp shortcut be restored. It is now part of the active page. Its initial removal was a design judgment to reduce competing actions, not a conclusion supported by user testing. Inline links were not equivalent to persistent contact access.

### What “removed as standalone sections” means

The old `Benefits.tsx` and `WhoWeHelp.tsx` files remain in the repository, but the redesigned `App.jsx` does not mount them. Visitors therefore no longer see the separate “Why Your Business Needs a Website” or “Who We Help” blocks. Some related messaging appears elsewhere; this was **not** a complete migration of their content.

### Benefits: intention and actual coverage

The intent was to reduce repeated card grids, move examples earlier, and put outcomes near the relevant deliverables. That is a design hypothesis, not evidence that a shorter page converts better. Importantly, an inclusion answers “What do I get?” while a benefit answers “Why is it valuable?” Combining them only works when both answers remain explicit.

| Original benefit | Current coverage |
| --- | --- |
| Reach More Customers | Partially retained through “Get found. Get growing.” and basic SEO messaging; the 24/7 and beyond-local-area points are not explicit. |
| Increase Sales | Professional presentation/first impressions remain, but the original trust-to-sales explanation is not explicit. |
| Compete with Big Brands | The small-business/big-ambitions theme remains; the competitive-positioning explanation was not retained explicitly. |
| Save Time | The original point about answering customers’ common questions was not carried over. “We handle the website” describes a different benefit. |
| Easy to Share | Not carried over explicitly. Having WhatsApp contact links is not equivalent to explaining how the customer's own website can be shared. |
| Track Your Success | Not carried over. Analytics should not be reintroduced as a package promise without confirming that setup is included. |

A more balanced approach would be a compact, separately titled benefits section describing business outcomes, rather than restoring the old six-card styling unchanged. Removing an unverified sales guarantee does not require removing all discussion of potential benefits.

### Who We Help: intention and actual coverage

The intent was to communicate audience fit through the hero's Nigerian-small-business positioning and concrete portfolio examples, rather than another generic category grid. The old mobile section also automatically rotated categories every 2.5 seconds. That interaction could have been replaced with a static responsive layout without removing the audience content.

The original eight categories were **Retail Stores; Restaurants & Cafes; Schools & Tutors; Service Providers; Photographers; Health & Wellness; Professionals; Non-Profits**. The new portfolio filters describe three project groupings: food/hospitality, business/services, and education/community. Those filters are **not a replacement for all eight audience categories**. Some prospective customers may no longer see themselves explicitly represented.

A compact “Who we help” section with industry examples and relevant use cases would restore that reassurance without autoplay or excessive page length. Any retail examples should distinguish a business/catalogue website from the separately quoted e-commerce offering.

**Scope of this follow-up:** restore the floating WhatsApp shortcut, test it, and clarify the rationale and omissions. Benefits and Who We Help have not silently been restored or otherwise changed in this follow-up.
