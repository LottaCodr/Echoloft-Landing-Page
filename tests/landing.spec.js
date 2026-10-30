import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const accessibility = async (page) => {
  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        issue: n.failureSummary,
      })),
    })),
  ).toEqual([]);
};

test("page loads with one heading, working anchors, and no browser errors", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Your business.",
  );
  for (const href of await page
    .locator('a[href^="#"]')
    .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")))) {
    await expect(page.locator(href)).toHaveCount(1);
  }
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Our work" })
    .click();
  await expect(page).toHaveURL(/#portfolio$/);
  expect(errors).toEqual([]);
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`layout fits a ${width}px viewport and hero text is not clipped`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    const heading = await page.getByRole("heading", { level: 1 }).boundingBox();
    expect(heading.x + heading.width).toBeLessThanOrEqual(width);
    await page.locator("#team").scrollIntoViewIfNeeded();
    const portraits = page.locator("#team img");
    await expect(portraits).toHaveCount(3);
    await expect(portraits.first()).toBeVisible();
    await expect
      .poll(async () =>
        portraits.evaluateAll((images) =>
          images.every(
            (img) => img.complete && img.naturalWidth >= 1024 && img.naturalHeight >= 1024,
          ),
        ),
      )
      .toBe(true);
    await expect
      .poll(async () =>
        page
          .locator(".avatar-stack img")
          .evaluateAll((images) =>
            images.length === 3 &&
            images.every((img) => img.complete && img.naturalWidth >= 1024),
          ),
      )
      .toBe(true);
  });
}

test("project filters, keyboard tabs, detail view and Escape work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Food & hospitality" }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  const project = page.getByRole("button", {
    name: "View Canadian Burger project",
  });
  await project.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("dialog").getByRole("heading", { name: "Canadian Burger" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(project).toBeFocused();
  await page.getByRole("tab", { name: "Business & services" }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "Food & hospitality" }),
  ).toHaveAttribute("aria-selected", "true");
  await page.getByRole("tab", { name: "All projects" }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
});

test("consultation dialog traps focus, preserves destination, and restores focus", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Let’s talk", exact: true });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Choose a time on Calendly" }),
  ).toHaveAttribute(
    "href",
    "https://calendly.com/echoloft001/free-website-consultation",
  );
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("Tab");
    expect(
      await dialog.evaluate((element) =>
        element.contains(document.activeElement),
      ),
    ).toBe(true);
  }
  await accessibility(page);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("FAQ supports keyboard expansion and one answer at a time", async ({
  page,
}) => {
  await page.goto("/");
  const first = page.getByRole("button", {
    name: "What exactly is included in ₦120,000?",
  });
  const renewals = page.getByRole("button", {
    name: "Are there any renewal costs?",
  });
  await expect(first).toHaveAttribute("aria-expanded", "true");
  await renewals.focus();
  await page.keyboard.press("Enter");
  await expect(renewals).toHaveAttribute("aria-expanded", "true");
  await expect(first).toHaveAttribute("aria-expanded", "false");
  await expect(
    page.getByText(
      "Your first year of domain registration and hosting is included.",
      { exact: false },
    ),
  ).toBeVisible();
});

test("contact fields are labelled and create an honest email handoff", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Ask us directly" }).click();
  await page.getByRole("button", { name: "Continue to email" }).click();
  await expect(page.getByLabel("Your name")).toBeFocused();
  await page.getByLabel("Your name").fill("Ada Test");
  await page.getByLabel("Email address").fill("ada@example.com");
  await page.getByLabel("Business name").fill("Ada Studio");
  await page
    .getByLabel("How can we help?")
    .fill("I would like a website for my design studio.");
  await accessibility(page);
  await page.getByRole("button", { name: "Continue to email" }).click();
  await expect(page.getByText("Your email draft is ready.")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open email draft" }),
  ).toHaveAttribute(
    "href",
    /mailto:echoloft001@gmail.com\?subject=Website%20enquiry%20from%20Ada%20Test/,
  );
  await expect(
    page.getByText("You still need to press send there", { exact: false }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Back to your message" }).click();
  await expect(page.getByLabel("Your name")).toHaveValue("Ada Test");
  await expect(page.getByLabel("Email address")).toHaveValue("ada@example.com");
  await expect(page.getByLabel("How can we help?")).toHaveValue(
    "I would like a website for my design studio.",
  );
});

test("mobile menu closes on navigation and can open consultation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Our work" })
    .click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page).toHaveURL(/#portfolio$/);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Let’s talk" })
    .click();
  await expect(page.getByRole("dialog")).toHaveCount(1);
  await expect(
    page
      .getByRole("dialog")
      .getByRole("link", { name: "Choose a time on Calendly" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  expect(
    await page
      .locator("body")
      .evaluate((body) => getComputedStyle(body).pointerEvents),
  ).not.toBe("none");
});

test("desktop and mobile pages pass automated WCAG checks", async ({
  page,
}) => {
  await page.goto("/");
  await accessibility(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await accessibility(page);
});

test("reduced motion preference disables smooth scrolling", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator("html")
      .evaluate((html) => getComputedStyle(html).scrollBehavior),
  ).toBe("auto");
});

for (const width of [320, 390, 1440]) {
  test(`floating WhatsApp stays accessible while scrolling at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const shortcut = page.getByRole("link", {
      name: "Chat with us on WhatsApp (opens in a new tab)",
      exact: true,
    });
    await expect(shortcut).toBeVisible();
    await expect(shortcut).toHaveAttribute(
      "href",
      /^https:\/\/wa\.me\/2348130923309\?text=/,
    );
    await expect(shortcut).toHaveAttribute("target", "_blank");
    await expect(shortcut).toHaveAttribute("rel", "noopener noreferrer");
    const initial = await shortcut.boundingBox();
    expect(initial.width).toBeGreaterThanOrEqual(44);
    expect(initial.height).toBeGreaterThanOrEqual(44);
    expect(initial.x + initial.width).toBeLessThanOrEqual(width - 16);
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(shortcut).toBeInViewport();
    expect(await shortcut.boundingBox()).toEqual(initial);
    await shortcut.focus();
    await expect(shortcut).toBeFocused();
    expect(
      await shortcut.evaluate((link) => getComputedStyle(link).outlineStyle),
    ).toBe("solid");
    await expect(shortcut.locator(".floating-whatsapp-label")).toBeVisible();
  });
}

test("floating WhatsApp does not compete with an open dialog", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Let’s talk", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  // Radix hides background content from assistive technology and blocks pointer interaction.
  await expect(
    page.getByRole("link", {
      name: "Chat with us on WhatsApp (opens in a new tab)",
      exact: true,
    }),
  ).toHaveCount(0);
  const shortcut = page.locator(".floating-whatsapp");
  const shortcutZ = await shortcut.evaluate((link) =>
    Number(getComputedStyle(link).zIndex),
  );
  const overlayZ = await page
    .locator(".dialog-overlay")
    .evaluate((overlay) => Number(getComputedStyle(overlay).zIndex));
  expect(shortcutZ).toBeLessThan(overlayZ);
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("link", {
      name: "Chat with us on WhatsApp (opens in a new tab)",
      exact: true,
    }),
  ).toBeVisible();
});
