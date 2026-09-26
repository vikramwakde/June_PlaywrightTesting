// Auto wait (default wait) - click(), fill(), check, uncheck, selectOption,etc....
// Locator wait (waitFor()) - dynamic wait
// explicit wait (page.waitForTimeout())
// wait for load state
// wait for url
// wait for response
// wait for request
// wait for event
// assertion wait - expect() - default wait 5000

import{test,expect} from '@playwright/test'

test('waiting mechanism playwright',async({page})=>{
  test.setTimeout(120000)
  
  page.on('dialog', async dialog =>{ 
    console.log(dialog.message());  
     console.log(dialog.type())
     if(dialog.type()==='prompt'){
     await dialog.accept("Utkarshaa Academy");
     }
     if(dialog.type()==='confirm'){
      await dialog.dismiss();
     }
  })

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForURL('**/login',{timeout:40000})
  // Auto Wait - default wait
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //  Locator wait (waitFor())
  await page.waitForURL('**/index',{timeout:30000})
  await page.waitForLoadState('load');
  const Dashboard = await page.locator("//h6[text()='Dashboard']");
  expect(await Dashboard).toBeVisible({timeout:10000});
  await page.locator("//h6[text()='Dashboard']").waitFor({state: 'visible',timeout:5000})
  await page.goto("https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html")
  await page.locator("input#input2").first().waitFor({state: 'hidden',timeout:5000})
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
  //await page.locator("#alertBtn").click()

 await page.locator("#confirmBtn").click()
 await page.locator("#promptBtn").click();
  
})


