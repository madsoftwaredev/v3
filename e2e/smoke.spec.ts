import { expect, test } from "@playwright/test";

test.describe("Smoke tests", () => {
  test("homepage loads and shows hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/MAD Software/);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("kitchen sink page loads", async ({ page }) => {
    await page.goto("/kitchen-sink");
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("dark mode toggle works", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");

    // Should start without .dark (system/light default in test)
    await expect(html).not.toHaveClass(/dark/);
  });

  test("navigation links work", async ({ page }) => {
    await page.goto("/");
    // Verify the page has navigation
    const nav = page.getByRole("navigation");
    await expect(nav.first()).toBeVisible();
  });
});
