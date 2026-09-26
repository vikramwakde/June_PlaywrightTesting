// Test Annotation in playwright
import{test,expect} from '@playwright/test'

//1. test.skip() - skip the test completely.

test.skip('First Test',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await logo.isVisible();
})

test('Second Test',async({page,browserName})=>{
    test.skip(browserName === 'firefox','Feature not supported to firefox')    // conditional skip
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await logo.isVisible();
})

//2. test.only() - Runs only this test.
// test.only('Third Test',async({page,browserName})=>{
//     await page.goto("https://utkarshaaacademy.com/");
//     await expect(page).toHaveTitle('Software Testing');
//     const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
//     await expect(logo).toBeVisible();
//     await logo.isVisible();
// })
// test.only('Fourth Test',async({page,browserName})=>{
//     await page.goto("https://utkarshaaacademy.com/");
//     await expect(page).toHaveTitle('Software Testing');
//     const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
//     await expect(logo).toBeVisible();
//     await logo.isVisible();
// })

//3. test.fail() - marks a test as expected to fail.
test.fail('Fail Test',async({page,browserName})=>{  // jira-1234
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).not.toBeVisible();
    await logo.isVisible();
})

test('Firefox Issue Test',async({page,browserName})=>{
    test.fail(browserName === 'firefox','Known firefox issue')    // conditional fail
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).not.toBeVisible();
    await logo.isVisible();
})

//4 test.fixme() - skips the test because it is broken or not yet implemented.
test.fixme('Fifth Test',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await logo.isVisible();
})

//5. test.slow() - triplets the timeout of a test
// default timeout = 30 seconds ===> After slow() ===> 90 seconds

test('Sixth Test',async({page})=>{
    test.slow()
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await logo.isVisible();
})

test('Seventh Test',async({page,browserName})=>{
    test.slow(browserName === 'firefox')
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await page.waitForTimeout(27000)
    await logo.isVisible();
})
// [7/25, 9:49 AM] Ravi Utkarsha Academy Traing Center: 

test.describe("Dashboard Module",()=>{
test('Sixth Test',async({page})=>{
    test.slow()
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await logo.isVisible();
})

test('Seventh Test',async({page,browserName})=>{
    test.slow(browserName === 'firefox')
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").first();
    await expect(logo).toBeVisible();
    await page.waitForTimeout(27000)
    await logo.isVisible();
})

})
// test.describe() - Groups related test cases.
test.describe("Login Module",()=>{
    test.describe.configure({
        mode: 'default',
        timeout : 90000
    })
    test("valid Login",async({page})=>{
        console.log(test.info().title)
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("input[name='username']").fill("Admin")
        await page.locator("input[name='password']").fill("admin123")
        await page.locator("button.orangehrm-login-button").click();
        await page.waitForTimeout(5000)
        await expect(page.locator("h6.oxd-topbar-header-breadcrumb-module")).toBeVisible();
        console.log(test.info().status)
    })
     test("Invalid Login",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("input[name='username']").fill("ravib")
        await page.locator("input[name='password']").fill("admin123")
        await page.locator("button.orangehrm-login-button").click();
        await expect(page.locator("div.oxd-alert-content--error")).toBeVisible();
    })
})


