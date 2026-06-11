import { $, browser } from '@wdio/globals'
import Page from './page.js';

class CheckOutCompletePage extends Page {

    get pageTitle()         { return $('[data-test="title"]') }
    get completeHeader()    { return $('[data-test="complete-header"]') }
    get completeText()      { return $('[data-test="complete-text"]') }
    get completeImage()     { return $('[data-test="pony-express"]') }
    get backHomeBtn()       { return $('[data-test="back-to-products"]') }

    open(): ReturnType<typeof browser.url> {
        return super.open('/checkout-complete.html');
    }

    async getPageTitle(): Promise<string> {
        return await this.pageTitle.getVal();
    }

    async getCompleteHeader(): Promise<string> {
        return await this.completeHeader.getVal();
    }

    async getCompleteText(): Promise<string> {
        return await this.completeText.getVal();
    }

    async backHome(): Promise<void> {
        await this.backHomeBtn.waitForClick();
    }

}

export default new CheckOutCompletePage();