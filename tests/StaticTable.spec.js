import{test,expect} from '@playwright/test'
import { table } from 'node:console'

test('Static Table test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const table = await page.locator("table[name='BookTable']")
  //  const table = await page.getByRole('table', { name: 'BookTable' })
    await expect(await table).toBeVisible(); 
    const rows = table.locator("tbody tr");
    await (expect(rows).toHaveCount(7));

    const price = await rows.locator("td:nth-child(4)");
    const BookName = await rows.locator("td:nth-child(1)");
    console.log(await price.allTextContents());
    console.log(await BookName.allTextContents());
    const FirstBookName = await BookName.nth(0).textContent();
    const FirstPrice = await price.nth(0).textContent();
    const FourthPrice = await price.nth(3).textContent();
    expect(FourthPrice).toEqual('3000')
    expect(FirstPrice).toEqual("300");
    expect(FirstBookName).toEqual("Learn Selenium");
})

