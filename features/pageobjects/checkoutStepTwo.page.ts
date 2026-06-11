import { $, browser } from '@wdio/globals'
import Page from './page.js';
import { enums } from '../../utils/enums.js';

const { 
    itemInfo
 } = enums;

class CheckoutStepTwoPage extends Page {

    get pageTitle()         { return $('[data-test="title"]') }
    get finishBtn()         { return $('[data-test="finish"]') }
    get cancelBtn()         { return $('[data-test="cancel"]') }

    get cartItems()             { return $$('[data-test="cart-item"]') }
    get cartItemName()          { return $('[data-test="inventory-item-name"]') }
    get cartItemDescription()   { return $('[data-test="inventory-item-desc"]') }
    get cartItemPrice()         { return $('[data-test="inventory-item-price"]') }

    get subTotal()            { return $('[data-test="subtotal-label"]') }
    get tax()                 { return $('[data-test="tax-label"]') }
    get total()               { return $('[data-test="total-label"]') }

    open(): ReturnType<typeof browser.url> {
        return super.open('/checkout-step-two.html');
    }

    async finish(): Promise<void> {
        await this.finishBtn.waitForClick();
    }

    async cancel(): Promise<void> {
        await this.cancelBtn.waitForClick();
    }

    async getSubTotal(): Promise<string> {
        return await this.subTotal.getVal();
    }

    async getTax(): Promise<string> {
        return await this.tax.getVal();
    }

    async getTotal(): Promise<string> {
        return await this.total.getVal();
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

    async calcAllItemsTotals(): Promise<{ subTotal: string; tax: string; total: string }> {
        const values = Object.values(itemInfo);
        const toNumber = (val: string) => parseFloat(val.replace('$', ''));
        const toCurrency = (val: number) => `$${val.toFixed(2)}`;

        const subTotal = values.reduce((sum, item) => sum + toNumber(item.price), 0);
        const tax = values.reduce((sum, item) => sum + toNumber(item.tax), 0);

        return {
            subTotal: toCurrency(subTotal),
            tax: toCurrency(tax),
            total: toCurrency(subTotal + tax),
        };
    }

}

export default new CheckoutStepTwoPage();