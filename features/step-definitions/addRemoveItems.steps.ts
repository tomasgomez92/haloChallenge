import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { enums } from '../../utils/enums.js';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

const { 
    items, 
    sideBarOptions 
} = enums;

const itemMap: Record<string, string> = {
    [items.BACKPACK]:      items.BACKPACK,
    [items.BIKE_LIGHT]:    items.BIKE_LIGHT,
    [items.BOLT_T_SHIRT]:  items.BOLT_T_SHIRT,
    [items.FLEECE_JACKET]: items.FLEECE_JACKET,
    [items.ONESIE]:        items.ONESIE,
    [items.T_SHIRT]:       items.T_SHIRT,
};

Given(/^I am logged in as (\w+)$/, async (username: string) => {
    await LoginPage.open();
    await LoginPage.login(username, 'secret_sauce');
});

Given(/^the cart is reset$/, async () => {
    await InventoryPage.selectSideBarOption(sideBarOptions.RESET_APP_STATE);
    await InventoryPage.open();
});

Given(/^all items are added to the cart$/, async () => {
    await InventoryPage.selectSideBarOption(sideBarOptions.RESET_APP_STATE);
    await InventoryPage.open();
    for (const item of Object.values(itemMap)) {
        await InventoryPage.addToCart(item);
    }
});

When(/^I add (.+) to the cart$/, async (itemName: string) => {
    const item = itemMap[itemName];
    if (!item) throw new Error(`Unknown item: ${itemName}`);
    await InventoryPage.addToCart(item);
});

When(/^I remove (.+) from the cart$/, async (itemName: string) => {
    const item = itemMap[itemName];
    if (!item) throw new Error(`Unknown item: ${itemName}`);
    await InventoryPage.removeFromCart(item);
});

Then(/^the cart badge should show (\d+)$/, async (count: number) => {
    await expect(InventoryPage.cartBadge).toHaveText(String(count));
});

Then(/^the cart should be empty$/, async () => {
    await expect(InventoryPage.cartBadge).not.toBeExisting();
});