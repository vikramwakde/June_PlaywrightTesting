import{test, expect} from '@playwright/test';

test('Test getByAltText', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const logoimage = await page.getByAltText('logo image');
    await expect(logoimage).toBeVisible();  
})

test('Test2 getByAltText', async({page})=>{
    await page.goto("https://playwright.dev/")
    const playwrightLogo = await page.getByAltText("Playwright logo").first();
    await expect(playwrightLogo).toBeVisible();
    
})