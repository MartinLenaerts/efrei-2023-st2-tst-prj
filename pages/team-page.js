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
        const teamFromName = await this.page.getByRole('row', { name: name });
        console.log(teamFromName);
        if(!teamFromName) {
            return;
        }
        
        /* TODO BUG, doesn't delete the selected row
        await teamFromName.locator('a', { hasText: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Proceed' }).click();
        */
    }
}