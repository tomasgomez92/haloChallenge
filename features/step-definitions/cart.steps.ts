import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { enums } from '../../utils/enums.js';
import CartPage from '../pageobjects/cart.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

type ItemKey = keyof typeof enums.itemInfo;

const { items } = enums;

const itemKeyToName: Record<string, string> = {
    backpack:     items.BACKPACK,
    bikeLight:    items.BIKE_LIGHT,
    boltTShirt:   items.BOLT_T_SHIRT,
    fleeceJacket: items.FLEECE_JACKET,
    onesie:       items.ONESIE,
    tShirt:       items.T_SHIRT,
};

When(/^I add the (.+) item to the cart from inventory$/, async (itemKey: string) => {
    const itemName = itemKeyToName[itemKey];
    if (!itemName) throw new Error(`Unknown item key: ${itemKey}`);
    await InventoryPage.addToCart(itemName);
});

When(/^I go to the cart$/, async () => {
    await CartPage.open();
});

When(/^I remove the item from the cart page$/, async () => {
    await CartPage.removeItem();
});

Then(/^the cart item details should be correct for (.+)$/, async (itemKey: string) => {
    const { name, description, price } = enums.itemInfo[itemKey as ItemKey];
    await expect(CartPage.cartItemName).toHaveText(name);
    await expect(CartPage.cartItemDescription).toHaveText(description);
    await expect(CartPage.cartItemPrice).toHaveText(price);
});
