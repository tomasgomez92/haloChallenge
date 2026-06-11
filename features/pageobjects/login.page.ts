import { $, browser } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    
    get inputUsername()    { return $('#user-name')}
    get inputPassword()    { return $('#password')}
    get loginBtn()         { return $('#login-button')}

    get errorMessage()     { return $('h3[data-test="error"]')}

    open(): ReturnType<typeof browser.url> {
        return super.open('/');
    }

    async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setVal(username);
        await this.inputPassword.setVal(password);
        await this.loginBtn.waitForClick();
    }
    
    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.getVal();
    }
}
export default new LoginPage();
