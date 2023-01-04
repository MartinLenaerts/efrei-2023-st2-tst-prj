const { test, expect } = require('@playwright/test');
const { TeamPage } = require('../pages/team-page');


test.describe('Create Team', () => {
    const name = 'newteam';

    test.beforeEach(async({ page }) => {
        const teamPage = new TeamPage(page);
        await teamPage.gotoListTeam();
        await teamPage.deleteTeamFromName(name);
    })

    test('should allow me to create a new team', async ({ page }) => {
        const teamPage = new TeamPage(page);
        await teamPage.gotoCreateTeam();
        await expect(page.getByRole('heading', { name: 'Create new team' })).toBeVisible();
        await page.getByPlaceholder('Name').fill(name);
        await page.getByRole('button', { name: 'Add' }).click();

        await teamPage.gotoListTeam(); 
        await expect(page.getByRole('heading', { name: 'Teams' })).toBeVisible(); 
        await expect(page.getByRole('cell', { name })).toBeVisible();
    });
});