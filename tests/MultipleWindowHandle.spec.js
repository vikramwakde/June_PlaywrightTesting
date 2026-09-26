import { test, expect } from '@playwright/test';

test("Multiple Window Handle",async({page,context})=>{
    await page.goto("https://www.naukri.com/")

        const [newPage] = await Promise.all([context.waitForEvent('page'),
        await page.getByText("Services").first().click()
    ])
   
        const [newPage1] = await Promise.all([context.waitForEvent('page'),
        await page.locator("span[title='Remote']").click()
    ])

        const [newPage2] = await Promise.all([context.waitForEvent('page'),
        await page.locator("span[title='MNC']").click()
    ])

    await newPage.waitForLoadState();
    await newPage1.waitForLoadState();
    await newPage2.waitForLoadState();

    const allpages = context.pages();
    for(const pages of allpages){
        console.log(await pages.title())
    }

    expect(await newPage.getByText("Move ahead in career, faster")).toBeVisible();
    newPage.getByText("RESUME WRITING").first().click();

    expect(await newPage1.locator("h1[title='Remote Jobs']")).toBeVisible();
    await newPage1.locator("span[title='IT Jobs']").click()

    expect(await newPage2.locator("h1[title='Mnc Jobs']")).toBeVisible();
    await newPage2.locator("div[class=' row1']").first().click();
    await page.waitForTimeout(5000);
})

test("Handle Popup",async({page,context})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.locator("#PopUp").click();
    await page.waitForTimeout(2000)
    const pages = context.pages();

    const popup1 = pages[1];
    const popup2 = pages[2];

    await popup1.waitForLoadState();
    await popup2.waitForLoadState();

    console.log(await popup1.title());
    console.log(await popup2.title());

    await popup1.locator(".selenium-button-container>a.selenium-button").first().click();
    await popup2.getByText("Get started").first().click();
    await page.waitForTimeout(5000);
})