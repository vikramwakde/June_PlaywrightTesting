import{test,expect} from '@playwright/test'

test('Test for get by placeholder locator',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByPlaceholder("Enter your full name").fill("Vikram M Wakde");
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9922911948")
    await page.getByPlaceholder("Type your message here...").fill("Welcome");
    await page.getByPlaceholder("Search products...").fill("Apple IPhone 17");
    await page.getByText("Search",{exact:true}).click();
    await page.waitForTimeout(5000);
    
    })

    test('Test for get by placeholder locator for Flipkart',async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.getByText("✕").click();
    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("Apple Iphone 17");

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("Apple Iphone 17");
    
})

