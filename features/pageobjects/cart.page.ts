import { $, browser } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {

    get pageTitle()             { return $('[data-test="title"]') }
    get continueShoppingBtn()   { return $('[data-test="continue-shopping"]') }
    get checkoutBtn()           { return $('[data-test="checkout"]') }

    get cartItems()             { return $$('[data-test="cart-item"]') }
    get cartItemName()          { return $('[data-test="inventory-item-name"]') }
    get cartItemDescription()   { return $('[data-test="inventory-item-desc"]') }
    get cartItemPrice()         { return $('[data-test="inventory-item-price"]') }
    get removeBtn()             { return $('[data-test="remove-sauce-labs-backpack"]') }

    open(): ReturnType<typeof browser.url> {
        return super.open('/cart.html');
    }

    async continueShopping(): Promise<void> {
        await this.continueShoppingBtn.waitForClick();
    }

    async checkout(): Promise<void> {
        await this.checkoutBtn.waitForClick();
    }

    async removeItem(): Promise<void> {
        await this.removeBtn.waitForClick();
    }

    async getCartItems(): Promise<string[]> {
        return await this.cartItems.map(item => item.getText());
    }

    async getCartItemName(): Promise<string> {
        return await this.cartItemName.getVal();
    }

    async getCartItemDescription(): Promise<string> {
        return await this.cartItemDescription.getVal();
    }

    async getCartItemPrice(): Promise<string> {
        return await this.cartItemPrice.getVal();
    }
}

export default new CartPage();