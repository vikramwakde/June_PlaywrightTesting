import{test,expect} from '@playwright/test'

test('Handling Frames',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/video")
    const frame1 = await page.frameLocator("iframe[data-aid='VIDEO_VIDEO_RENDERED0']").first();
    await frame1.locator("//button[@aria-label='Play video']").click();
    // await page.waitForTimeout(5000);
    const frame2 = await page.frameLocator("iframe[data-aid='VIDEO_VIDEO_RENDERED1']").first();
    await frame2.locator("//button[@aria-label='Play video']").click();

    await page.getByText("Corporate Training").first().click();
 //   await page.waitForTimeout(5000);
})

test('Nested Frame',async({page})=>{
    await page.goto("https://www.dezlearn.com/nested-iframes-example/");
    const parentFrame = await page.frameLocator("#parent_iframe");
    const childFrame = await parentFrame.frameLocator("#iframe1");
    await childFrame.getByText("Click Here").click();
 //   await page.waitForTimeout(5000)
})


test('Multiple context example',async()=>{
    const browser = await firefox.launch();
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    await page1.goto("https://playwright.dev/docs/test-fixtures")
    await page2.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    // await page1.waitForTimeout(5000)
    // await page2.waitForTimeout(5000)
    await browser.close();
})



test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Jobs', description: 'Search Jobs' }).click();
  await page.getByRole('link', { name: 'Companies', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByText('MOST POPULARRESUME').click();
  await page1.locator('.innerCircle').first().click();
  await page1.getByText('Buy Now').click();
  await page1.waitForTimeout(5000)
});

