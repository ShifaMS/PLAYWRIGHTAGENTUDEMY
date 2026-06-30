// spec: tests/greenkart.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('Search for a specific product by name', async ({ page }) => {
    // Navigate to the GreenKart home page
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Click on the search box in the header
    const searchBox = page.locator('input[placeholder="Search for Vegetables and Fruits"]');
    await searchBox.click();
    expect(searchBox).toBeFocused();

    // Type 'tomato' in the search box
    await searchBox.fill('tomato');

    // Verify product list filters to show only 'Tomato - 1 Kg'
    const tomatoProduct = page.locator('h4.product-name:has-text("Tomato - 1 Kg")');
    await expect(tomatoProduct).toBeVisible();

    // Verify Tomato product card is displayed with price ₹ 16
    const tomatoPrice = page.locator('p.product-price:text-is("16")').first();
    await expect(tomatoPrice).toBeVisible();

    // Verify other products are hidden - check that Brocolli is not visible
    const brocolliProduct = page.locator('h4.product-name:has-text("Brocolli - 1 Kg")');
    await expect(brocolliProduct).not.toBeVisible();

    // Clear the search box and type 'carrot'
    await searchBox.fill('carrot');

    // Verify product list filters to show only 'Carrot - 1 Kg'
    const carrotProduct = page.locator('h4.product-name:has-text("Carrot - 1 Kg")');
    await expect(carrotProduct).toBeVisible();

    // Verify Carrot product card is displayed with price ₹ 56
    const carrotPrice = page.locator('p.product-price:text-is("56")');
    await expect(carrotPrice).toBeVisible();

    // Verify Tomato is no longer visible
    await expect(tomatoProduct).not.toBeVisible();
  });
});
