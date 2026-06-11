import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { enums } from '../../utils/enums.js';
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page.js';
import CheckOutCompletePage from '../pageobjects/checkOutComplete.page.js';

When(/^I complete the purchase$/, async () => {
    await CheckoutStepTwoPage.finish();
});

Then(/^the order confirmation page should be displayed correctly$/, async () => {
    const { pageTitle, completeHeader, completeText } = enums.checkOutComplete;
    await expect(CheckOutCompletePage.pageTitle).toHaveText(pageTitle);
    await expect(CheckOutCompletePage.completeHeader).toHaveText(completeHeader);
    await expect(CheckOutCompletePage.completeText).toHaveText(completeText);
    await expect(CheckOutCompletePage.backHomeBtn).toBeDisplayed();
});
