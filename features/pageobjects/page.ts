import { browser } from '@wdio/globals'

export default class Page {

    open (url: string): ReturnType<typeof browser.url> {
        return browser.url(url)
    }
}
