import{test, expect} from '@playwright/test';

test('Test getByTestId', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const profileName = await page.getByTestId('profile-name');
    await expect(profileName).toBeVisible();
});