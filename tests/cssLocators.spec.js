import{test, expect} from '@playwright/test'

// 1. Tag Name
test('CSS Locator test using Tagname', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input').nth(1).fill('Admin');
    await page.locator('input').nth(2).fill('admin123');
    await page.locator('button').click();
    await expect(page).toHaveTitle('OrangeHRM');
    await page.waitForTimeout(5000);

    // 2. Locate by ID [use # before id name]
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').fill('Vikram M Wakde');
    // await page.locator('#alertbtn').click();
    // await page.waitForTimeout(5000);

    // 3. Locate by class [use dot(.) before class name]
    await page.locator('.form-control').nth(1).fill("admin@gmail.com");

    // 4. locate by other attribute [use square brackets [] and attribute name]
    await page.locator("input[placeholder='Enter Phone']").fill("9423111564")    

    // 5. Combine Multiple Attributes    
    await page.locator("input[type='text'][placeholder='Enter Phone']").clear();
    await page.locator(".form-control#phone").fill("8830158607")

    // 6. parent-child (>) [use > between parent and child]
    await page.locator("div.form-group>textarea").fill("At post Lokhandi Sawargaon");   
  //  await page.waitForTimeout(5000);


    // 7. descendent selector [use space between parent and child]
    await page.locator("div.post-body.entry-content input#male").click();    

    // 8. Direct Sibling (+)
    await page.locator("input + label[for='female']").click();   

    // 9. General Sibling (~)
    await page.locator("input ~ label[for='sunday']").check();  
    await page.locator("select#colors>option ~ option[value='blue']").click()  
    await page.locator("option[value='red'] ~ option[value='yellow']").click()


    // 10. First child
    await page.locator("#colors>option:first-child").click();  
    // 11. Last child      
    await page.locator("#colors>option:last-child").click(); 
    // 12. Nth child    
    await page.locator("#colors>option:nth-child(2)").click(); 

    // 13. starts with attribute(^=)
    await page.locator("[id^='mon']").check();
// 14. Ends with attribute ($=) 
    await page.locator("[id$='rday']").check();
// 15. contains Attribute (*=)
    await page.locator("[id*='dnes']").check();

 //   await page.waitForTimeout(5000);


})