import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('./');

    await expect(page).toHaveTitle(/CELPIP Journey/);
    await expect(page.locator('h1')).toContainText('My CELPIP Journey');
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('./');

    // Test Diary link
    await page.click('nav >> text=Diary');
    await expect(page).toHaveURL(/\/blog/);

    // Test Resources link
    await page.click('nav >> text=Resources');
    await expect(page).toHaveURL(/\/resources/);

    // Test About link
    await page.click('nav >> text=About');
    await expect(page).toHaveURL(/\/about/);

    // Test Home link
    await page.click('nav >> text=Home');
    await expect(page).toHaveURL(/\/celpip\/?$/);
  });

  test('blog page displays posts', async ({ page }) => {
    await page.goto('./blog');

    await expect(page.locator('h1')).toContainText('My CELPIP Diary');
  });

  test('resources page has external links', async ({ page }) => {
    await page.goto('./resources');

    await expect(page.locator('h1')).toContainText('CELPIP Resources');

    // Check for resource cards
    const resourceCards = page.locator('.resource-card');
    await expect(resourceCards.first()).toBeVisible();
  });
});

test.describe('Security Headers', () => {
  test('pages load without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto('./');

    expect(errors).toHaveLength(0);
  });

  test('external links have proper attributes', async ({ page }) => {
    await page.goto('./resources');

    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
    }
  });
});

test.describe('Responsive Design', () => {
  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('./');

    await expect(page.locator('nav')).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('images have alt text', async ({ page }) => {
    await page.goto('./');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('page has proper heading hierarchy', async ({ page }) => {
    await page.goto('./');

    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });
});
