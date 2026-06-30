// spec: tests/greenkart.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('Search for non-existent product', async ({ page }) => {
    // Navigate to the GreenKart home page
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Click on search box and type a product name that doesn't exist (e.g., 'xyz')
    const searchBox = page.locator('input[placeholder="Search for Vegetables and Fruits"]');
    await searchBox.click();
    await searchBox.fill('xyz');

    // Verify no products are displayed
    const productCards = page.locator('h4.product-name');
    await expect(productCards).not.toBeVisible();

    // Verify search box still contains the typed text
    await expect(searchBox).toHaveValue('xyz');

    // Verify page shows empty state message
    const emptyMessage = page.locator('h2:has-text("Sorry, no products matched your search!")');
    await expect(emptyMessage).toBeVisible();

    // Verify suggestion message is shown
    const suggestion = page.locator('p:has-text("Enter a different keyword and try")');
    await expect(suggestion).toBeVisible();
  });
});
