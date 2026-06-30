// spec: tests/greenkart.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('Search with partial product name', async ({ page }) => {
    // Navigate to the GreenKart home page
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Click on search box and type 'br'
    const searchBox = page.locator('input[placeholder="Search for Vegetables and Fruits"]');
    await searchBox.click();
    await searchBox.fill('br');

    // Verify products matching 'br' are filtered
    const brocolliProduct = page.locator('h4.product-name:has-text("Brocolli - 1 Kg")');
    const brinjalProduct = page.locator('h4.product-name:has-text("Brinjal - 1 Kg")');
    
    // Verify Brocolli is shown
    await expect(brocolliProduct).toBeVisible();
    
    // Verify Brinjal is shown
    await expect(brinjalProduct).toBeVisible();

    // Verify other products like Carrot are not visible
    const carrotProduct = page.locator('h4.product-name:has-text("Carrot - 1 Kg")');
    await expect(carrotProduct).not.toBeVisible();

    // Verify Tomato is not visible
    const tomatoProduct = page.locator('h4.product-name:has-text("Tomato - 1 Kg")');
    await expect(tomatoProduct).not.toBeVisible();
  });
});
