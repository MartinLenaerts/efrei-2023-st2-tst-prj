const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.homeLink = page.locator('a', { hasText: 'Home' });
    }

    async goto() {
        await this.page.goto('https://z.hr.dmerej.info/')
    }
}