import { $, browser } from '@wdio/globals'
import Page from './page.js';
import { enums } from '../../utils/enums.js';

type ItemId = keyof typeof enums.itemInfo;

class ItemPage extends Page {

    get itemName()          { return $('[data-test="inventory-item-name"]') }
    get itemDescription()   { return $('[data-test="inventory-item-desc"]') }
    get itemPrice()         { return $('[data-test="inventory-item-price"]') }
    get addToCartBtn()      { return $('[data-test="add-to-cart"]') }
    get removeFromCartBtn() { return $('[data-test="remove"]') }
    get backToProductsBtn() { return $('[data-test="back-to-products"]') }

    open(item: ItemId): ReturnType<typeof browser.url> {
        const { id } = enums.itemInfo[item];
        return super.open(`/inventory-item.html?id=${id}`);
    }

    async backToProducts(): Promise<void> {
        await this.backToProductsBtn.waitForClick();
    }

    async addToCart(): Promise<void> {
        await this.addToCartBtn.waitForClick();
    }

    async removeFromCart(): Promise<void> {
        await this.removeFromCartBtn.waitForClick();
    }

    async getItemName(): Promise<string> {
        return await this.itemName.getVal();
    }

    async getItemDescription(): Promise<string> {
        return await this.itemDescription.getVal();
    }

    async getItemPrice(): Promise<string> {
        return await this.itemPrice.getVal();
    }
}

export default new ItemPage();