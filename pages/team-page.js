const { expect } = require('@playwright/test');

exports.TeamPage = class TeamPage {
    constructor(page) {
        this.page = page;
        this.homeLink = page.locator('a', { hasText: 'Home' });
    }

    async gotoListTeam() {
        await this.page.goto('https://z.hr.dmerej.info/teams');
    }

    async gotoCreateTeam() {
        await this.page.goto('https://z.hr.dmerej.info/add_team');
    }

    async deleteTeamFromName(name) {
        await this.page.getByRole('row', { name: `${name} View members Delete` }).getByRole('cell', { name: 'Delete' }).click();
    }
}