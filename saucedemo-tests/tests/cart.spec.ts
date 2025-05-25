import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

dotenv.config();

test.describe('Remove from Cart', () => {
  test('Add and then remove an item from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);

    const productsPage = new ProductsPage(page);
    await productsPage.addItemToCart();
    await productsPage.goToCart();

    const cartPage = new CartPage(page);
    let count = await cartPage.getItemCount();
    expect(count).toBeGreaterThan(0);

    await cartPage.removeItem();

    count = await cartPage.getItemCount();
    expect(count).toBe(0);
  });
});
