import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { enums } from '../../utils/enums.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page.js';
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page.js';
type ItemKey = keyof typeof enums.itemInfo;
type ErrorKey = keyof typeof enums.checkoutErrorMessages;

const { 
    userInfo
 } = enums;

When(/^I proceed to checkout$/, async () => {
    await CartPage.checkout();
});

When(/^I cancel the purchase$/, async () => {
    await CheckoutStepTwoPage.cancel();
});

When(/^I fill the checkout form with valid details$/, async () => {
    await CheckoutStepOnePage.fillForm(userInfo.validUser.firstName, userInfo.validUser.lastName, userInfo.validUser.postalCode);
    await CheckoutStepOnePage.continue();
});

When(/^I submit the checkout form as "([^"]*)", "([^"]*)", "([^"]*)"$/, async (firstName: string, lastName: string, postalCode: string) => {
    await CheckoutStepOnePage.fillForm(firstName, lastName, postalCode);
    await CheckoutStepOnePage.continue();
});

Then(/^I should see a checkout form error for (.+)$/, async (errorKey: string) => {
    const message = enums.checkoutErrorMessages[errorKey as ErrorKey];
    await expect(CheckoutStepOnePage.errorMessage).toBeDisplayed();
    await expect(CheckoutStepOnePage.errorMessage).toHaveText(message);
});

Then(/^the checkout summary should show correct totals for all items$/, async () => {
    const { subTotal, tax, total } = await CheckoutStepTwoPage.calcAllItemsTotals();
    await expect(CheckoutStepTwoPage.subTotal).toHaveText(`Item total: ${subTotal}`);
    await expect(CheckoutStepTwoPage.tax).toHaveText(`Tax: ${tax}`);
    await expect(CheckoutStepTwoPage.total).toHaveText(`Total: ${total}`);
});

Then(/^the checkout summary should show correct details for (.+)$/, async (itemKey: string) => {
    const { name, description, price, tax, total } = enums.itemInfo[itemKey as ItemKey];

    await expect(CheckoutStepTwoPage.cartItemName).toHaveText(name);
    await expect(CheckoutStepTwoPage.cartItemDescription).toHaveText(description);
    await expect(CheckoutStepTwoPage.cartItemPrice).toHaveText(price);
    await expect(CheckoutStepTwoPage.subTotal).toHaveText(`Item total: ${price}`);
    await expect(CheckoutStepTwoPage.tax).toHaveText(`Tax: ${tax}`);
    await expect(CheckoutStepTwoPage.total).toHaveText(`Total: ${total}`);
});
