import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { enums } from '../../utils/enums.js';
import ItemPage from '../pageobjects/item.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

type ItemKey = keyof typeof enums.itemInfo;

let currentItemKey: ItemKey;

When(/^I open the (.+) item page$/, async (itemKey: string) => {
    currentItemKey = itemKey as ItemKey;
    await InventoryPage.openItem(currentItemKey);
});

When(/^I add the item to the cart from the item page$/, async () => {
    await ItemPage.addToCart();
});

When(/^I remove the item from the cart from the item page$/, async () => {
    await ItemPage.removeFromCart();
});

Then(/^the item details should be correct$/, async () => {
    const { name, description, price } = enums.itemInfo[currentItemKey];
    await expect(ItemPage.itemName).toHaveText(name);
    await expect(ItemPage.itemDescription).toHaveText(description);
    await expect(ItemPage.itemPrice).toHaveText(price);
});

Then(/^the remove button should be displayed on the item page$/, async () => {
    await expect(ItemPage.removeFromCartBtn).toBeDisplayed();
});

Then(/^the cart should be empty on the item page$/, async () => {
    await expect(ItemPage.addToCartBtn).toBeDisplayed();
    await expect(InventoryPage.cartBadge).not.toBeExisting();
});
