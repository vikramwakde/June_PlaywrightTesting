 
import{test,expect} from '@playwright/test'
import loginData from '../tests/testdata/user.json'
import users from '../tests/testdata/users.json'


test('Read data from json',{tag: ['@smoke','@regression']}, async ({ page }) => {
  await page.goto(loginData.url);
  await page.getByRole('textbox', { name: 'Username' }).fill(loginData.username);
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill(loginData.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.waitForTimeout(5000)

  const employess = await page.locator("div[class='oxd-table-cell oxd-padding-cell'][role='cell'] div").filter({hasNot: page.getByText("Admin")})
  const emp_count = await employess.count();
  console.log(emp_count);
  for(let i = 0; i<emp_count;i++){
    console.log(await employess.nth(i).textContent());
  }
  await page.getByRole('cell', { name: 'Admin' }).first().click();
});

users.forEach(user =>{
test(`Read data from json ${user.username}`,{tag: ['@smoke','@regression']}, async ({ page }) => {
  await page.goto(loginData.url);
  await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.waitForTimeout(5000)

  const employess = await page.locator("div[class='oxd-table-cell oxd-padding-cell'][role='cell'] div").filter({hasNot: page.getByText("Admin")})
  const emp_count = await employess.count();
  console.log(emp_count);
  for(let i = 0; i<emp_count;i++){
    console.log(await employess.nth(i).textContent());
  }
  await page.getByRole('cell', { name: 'Admin' }).first().click();
});

})
