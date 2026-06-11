import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page as keyof typeof pages].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should be on the inventory page$/, async () => {
    await expect(InventoryPage.pageTitle).toBeDisplayed();
    await expect(InventoryPage.pageTitle).toHaveText('Swag Labs');
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining(message));
});