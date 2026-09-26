import{test,expect} from '@playwright/test'

test('Basic Auth Test',async({page})=>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")    // Not Recommended.
    await page.waitForTimeout(5000)
})

test("Basic Auth",async({browser})=>{
    const context = await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }
    });
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    expect(await page.locator("p")).toContainText("Congratulations! You must have the proper credentials.");
    await page.waitForTimeout(5000)
})


test("Handle Shadow Dom Element",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    const textbox = await page.locator("input[type='text']").last();
    await textbox.fill("Utkarshaa Academy");
    await page.locator("input[type='checkbox']").last().check();
    
    await page.waitForTimeout(5000);
})
