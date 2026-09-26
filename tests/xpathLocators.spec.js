import{ test, expect} from '@playwright/test'
// xpath - xml(extensible markup language) path 
test('xpath Locator test', async({page})=>{
    test.slow();


    await page.goto('https://testautomationpractice.blogspot.com', {waitUntil:'domcontentloaded', timeout: 60000});

    // locate element using attribute
    await page.locator("//input[@placeholder='Enter Name']").fill("Ravi Nangare"); // xpath - Relative Xpath

    await page.locator("//input[@id='name']").fill("Vikram M Wakde");
    
    // locate element using text
    await page.locator("//button[text()='START']").click();
 //   await page.waitForTimeout(1000)

    await page.locator("//button[text()='STOP']").click();
    // contains text
//    await page.waitForTimeout(1000)
    await page.locator("//button[contains(text(),'STA')]").click()

    // contains with attribute
    await page.locator("//input[contains(@placeholder, 'Enter EM')]").fill("vikrraamm.wakde@gmail.com");

    // starts with attribute
    await page.locator("//input[starts-with(@placeholder,'Enter P')]").fill("9423111564")

    // multiple attribute using and
    await page.locator("//input[@type='text' and @id='phone']").clear();

    // multiple attribute using OR
    await page.locator("//input[@type='text1' or @id='phone']").fill("8830158607");

    // parent to child  
    await page.locator("//div[@class='form-group']//textarea").fill("Sinhgad Road, Pune");

    // child to parent :: scope resolution operator
    await page.locator("//label[text()='Male']/parent::div").click()

    // preceding sibling 
    await page.locator("//label[text()='Female']/preceding-sibling::input").click()
    // following-sibling
    await page.locator("//input[@id='female']/following-sibling::label").click()

    await page.locator("//input[@type='checkbox']/following-sibling::label[@for='saturday']").click()
    await page.waitForTimeout(5000)

    

})