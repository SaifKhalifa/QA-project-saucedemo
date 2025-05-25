import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

dotenv.config();

test.describe('Checkout Flow', () => {
  test('Complete checkout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);

    const productsPage = new ProductsPage(page);
    await productsPage.addItemToCart();
    await productsPage.goToCart();

    const cartPage = new CartPage(page);
    await page.locator('[data-test="checkout"]').click();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutForm('saif', 'momen', '00970');
    await checkoutPage.completeCheckout();

    const message = await checkoutPage.getConfirmationText();
    expect(message?.trim()).toBe('Thank you for your order!');
  });
});
