// spec: tests/greenkart.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('Clear search results', async ({ page }) => {
    // Navigate to the GreenKart home page
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Enter a search term
    const searchBox = page.locator('input[placeholder="Search for Vegetables and Fruits"]');
    await searchBox.click();
    await searchBox.fill('tomato');

    // Verify only Tomato is displayed
    const tomatoProduct = page.locator('h4.product-name:has-text("Tomato - 1 Kg")');
    await expect(tomatoProduct).toBeVisible();

    // Clear the search box completely
    await searchBox.fill('');

    // Verify search box is empty
    await expect(searchBox).toHaveValue('');

    // Verify all 30 products are displayed again
    const allProducts = page.locator('h4.product-name');
    
    // Verify multiple products are visible after clearing search
    const brocolliProduct = page.locator('h4.product-name:has-text("Brocolli - 1 Kg")');
    const cauliflowerProduct = page.locator('h4.product-name:has-text("Cauliflower - 1 Kg")');
    const cucumberProduct = page.locator('h4.product-name:has-text("Cucumber - 1 Kg")');
    const appleProduct = page.locator('h4.product-name:has-text("Apple - 1 Kg")');
    const mangoProduct = page.locator('h4.product-name:has-text("Mango - 1 Kg")');

    await expect(brocolliProduct).toBeVisible();
    await expect(cauliflowerProduct).toBeVisible();
    await expect(cucumberProduct).toBeVisible();
    await expect(appleProduct).toBeVisible();
    await expect(mangoProduct).toBeVisible();

    // Verify count of visible product headings is 30
    const productCount = await allProducts.count();
    expect(productCount).toBe(30);
  });
});
