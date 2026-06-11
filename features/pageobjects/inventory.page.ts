import { $, browser } from '@wdio/globals'
import Page from './page.js';
import { enums } from '../../utils/enums.js';

const { 
    sideBarOptions,
    items
 } = enums;

class InventoryPage extends Page {

    get pageTitle()         { return $('.app_logo') }
    get sideBarMenu()       { return $('#react-burger-menu-btn') }
    get allItemsBtn()       { return $('#inventory_sidebar_link') }
    get aboutBtn()          { return $('#about_sidebar_link') }
    get logoutBtn()         { return $('#logout_sidebar_link') }
    get resetAppStateBtn()  { return $('#reset_sidebar_link') }
    get closeSideBarBtn()   { return $('#react-burger-cross-btn') }

    get cartLink()  { return $('.shopping_cart_link') }
    get cartBadge() { return $('.shopping_cart_badge') }

    private readonly itemSlugs: Record<string, string> = {
        [items.BACKPACK]:      'sauce-labs-backpack',
        [items.BIKE_LIGHT]:    'sauce-labs-bike-light',
        [items.BOLT_T_SHIRT]:  'sauce-labs-bolt-t-shirt',
        [items.FLEECE_JACKET]: 'sauce-labs-fleece-jacket',
        [items.ONESIE]:        'sauce-labs-onesie',
        [items.T_SHIRT]:       'test.allthethings()-t-shirt-(red)',
    };

    open(): ReturnType<typeof browser.url> {
        return super.open('/inventory.html');
    }

    private itemBtn(action: 'add-to-cart' | 'remove', item: string) {
        const slug = this.itemSlugs[item];
        if (!slug) throw new Error(`Invalid item: ${item}`);
        return $(`[data-test="${action}-${slug}"]`);
    }

    itemCard(item: keyof typeof enums.itemInfo) {
        const { name } = enums.itemInfo[item];
        return $(`//div[@data-test="inventory-item-name"][.="${name}"]`);
    }

    async openItem(item: keyof typeof enums.itemInfo): Promise<void> {
        await this.itemCard(item).waitForClick();
    }

    async closeSidebar(): Promise<void> {
        await this.closeSideBarBtn.waitForClick();
    }

    async selectSideBarOption(option: string): Promise<void> {
        let selected;
        await this.sideBarMenu.click();
        switch (option) {
            case sideBarOptions.ALL_ITEMS:
                selected = await this.allItemsBtn;
                break;
            case sideBarOptions.ABOUT:
                selected = await this.aboutBtn;
                break;
            case sideBarOptions.LOGOUT:
                selected = await this.logoutBtn;
                break;
            case sideBarOptions.RESET_APP_STATE:
                selected = await this.resetAppStateBtn;
                break;
            default:
                throw new Error(`Invalid side bar option: ${option}`);
        }
        await selected.waitForClick();
    }

    async addToCart(item: string): Promise<void> {
        await this.itemBtn('add-to-cart', item).waitForClick();
    }

    async removeFromCart(item: string): Promise<void> {
        await this.itemBtn('remove', item).waitForClick();
    }

    async getCartBadge(): Promise<string> {
        return await this.cartBadge.getVal();
    }

}
export default new InventoryPage();