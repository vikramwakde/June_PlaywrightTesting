 // Hooks - to avoid the duplicate code.
// 4 types 
// beforeAll() - runs once before all tests
// afterAll() - runs once after all test
// beforeEach() - runs before every test
// afterEach() - runs after every test

import{test,expect, chromium} from '@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks'

test.beforeAll(async ({})=>{

        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        console.log("Establish DB connection setup")
        console.log("Application Launch")
       
})

test.beforeEach(async({page})=>{
        console.log("Before Each code get executed")
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("input[name='username']").fill("Admin")
        await page.locator("input[name='password']").fill("admin123")
        await page.locator("button.orangehrm-login-button").click();
        await page.waitForTimeout(5000)
})
test.afterAll(async()=>{
    console.log("closing the application")
    console.log("Terminate DB connection")
})
test('validate dashboard Test',async({page})=>{
        console.log("Validate Dashboard")
        await expect(page.locator("h6.oxd-topbar-header-breadcrumb-module")).toBeVisible();
        console.log(test.info().status)
})
test('Admin Test',async({page})=>{
    console.log("Validate Admin")
    await page.getByText("Admin").first().click();
    await expect(page.locator("h6.oxd-topbar-header-breadcrumb-module")).toContainText('Admin');
    console.log(test.info().status)
    await page.waitForTimeout(5000)
})

test.afterEach('Logout Test',async({page})=>{
    await page.locator("p.oxd-userdropdown-name").click();
    await page.getByText("Logout").first().click();
    console.log("After Each code get executed")
    await page.waitForTimeout(5000)
})

// beforeAll
// beforeEach
// test
// afterEach
// afterAll