import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;

  constructor(private page: Page) {
    this.addToCartButton = this.page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = this.page.locator('.shopping_cart_link');
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}