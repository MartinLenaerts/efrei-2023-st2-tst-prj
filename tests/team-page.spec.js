const { test, expect } = require('@playwright/test');
const { TeamPage } = require('../pages/team-page');


test.describe('Create Team', () => {
    test('should allow me to create a new team', async ({ page }) => {
        const name = 'newteam';
        const teamPage = new TeamPage(page);
        await teamPage.gotoCreateTeam();
    
        await expect(page.getByRole('heading', { name: 'Create new team' })).toBeVisible();
        await teamPage.deleteTeamFromName(name)
        await page.getByPlaceholder('Name').fill(name);
        await page.getByRole('button', { name: 'Add' }).click();
        await expect(page.getByRole('cell', { name })).toBeVisible();
    });

    
});