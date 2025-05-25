import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

dotenv.config();

test.describe('Sort Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Sort A-Z (Alphabetical)', async ({ page }) => {
    const productsPage = new ProductsPage(page);    
    await expect(productsPage.itemNames.first()).toBeVisible({ timeout: 10000 });
    await productsPage.sortBy('Name (A to Z)');
    const names = await productsPage.getItemNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  });

  test('Sort by Price: High to Low', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.itemNames.first()).toBeVisible({ timeout: 10000 });
    await productsPage.sortBy('Price (high to low)');
    const prices = await productsPage.getItemPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });
});
