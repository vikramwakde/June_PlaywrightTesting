import{ test, expect} from '@playwright/test';

test('Test getByLabel', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
// await page.waitForTimeout(80000);
const username = await page.getByLabel('username');
await username.type('utkarshaa academy');
await expect(username).toHaveValue('utkarshaa academy');

const email = await page.getByLabel('Email Address:');
await email.fill('vikram.wakde@gmail.com');
await expect(email).toHaveValue('vikram.wakde@gmail.com');

const password = await page.getByLabel('password');
await password.type('123456');
await expect(password).toHaveValue('123456');

const Age= await page.getByLabel('Age');
await Age.pressSequentially('42', {delay: 100});
await expect(Age).toHaveValue('42');

    const StandardRedioBtn = await page.getByLabel("Standard");
    await StandardRedioBtn.click();

     await page.waitForTimeout(2000);

    const ExpressRedioBtn = await page.getByLabel("Express");
    await ExpressRedioBtn.click();

   

    await page.goto("https://testautomationpractice.blogspot.com/");
    const male = await page.getByLabel("Male",{exact:true});
    await male.click()


})