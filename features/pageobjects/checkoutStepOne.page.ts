import { $, browser } from '@wdio/globals'
import Page from './page.js';

class CheckoutStepOnePage extends Page {

    get firstNameInput()    { return $('[data-test="firstName"]') }
    get lastNameInput()     { return $('[data-test="lastName"]') }
    get postalCodeInput()   { return $('[data-test="postalCode"]') }

    get continueBtn()       { return $('[data-test="continue"]') }
    get cancelBtn()         { return $('[data-test="cancel"]') }
    get errorMessage()      { return $('[data-test="error"]') }

    open(): ReturnType<typeof browser.url> {
        return super.open('/checkout-step-one.html');
    }

    async fillForm(firstName?: string, lastName?: string, postalCode?: string): Promise<void> {
        if (firstName) await this.firstNameInput.setVal(firstName);
        if (lastName) await this.lastNameInput.setVal(lastName);
        if (postalCode) await this.postalCodeInput.setVal(postalCode);
    }

    async continue(): Promise<void> {
        await this.continueBtn.waitForClick();
    }

    async cancel(): Promise<void> {
        await this.cancelBtn.waitForClick();
    }
}

export default new CheckoutStepOnePage();