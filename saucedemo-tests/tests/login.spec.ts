import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Valid login with standard user', async ({ page }) => {
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!); 
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Invalid login with wrong password', async ({ page }) => {
    await loginPage.login(process.env.SAUCE_USERNAME!, 'wrong_pass');
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
  });
});