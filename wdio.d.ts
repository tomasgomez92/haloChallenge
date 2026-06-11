declare namespace WebdriverIO {
    interface Element {
        waitForClick(timeout?: number, reverse?: boolean): Promise<void>;
        setVal(value: string, timeout?: number, reverse?: boolean): Promise<void>;
        getVal(timeout?: number): Promise<string>;
    }
}
