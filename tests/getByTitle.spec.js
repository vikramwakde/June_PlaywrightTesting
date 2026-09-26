import{test,expect} from '@playwright/test'

test("Get By Title Test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByTitle("Home page link").click()
    await page.getByTitle("HyperText Markup Language").click()
    const toolTip = await page.getByTitle("Tooltip text").textContent();
    await expect(toolTip).toEqual("This text has a tooltip");
    await page.getByTitle("Click to save your changes").click();
})
