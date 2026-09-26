test("Static Dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // await page.locator("#country").selectOption("germany"); // value
  // await page.locator("#country").selectOption({label: "India"}); // label
  //await page.locator("#country").selectOption({index: 3})

await page.locator('#country').click();

await page.locator('#country option[value="uk"]').click();
//  await page.locator("#country>option[value='uk']").click();
  await page.waitForTimeout(5000);
  const country = await page.locator("#country>option");
  console.log(await country.count());
  expect(await country).toHaveCount(10);
  await page.locator("#colors").selectOption(['red','green','blue'])
  const selectedValues = await page.locator("#colors").inputValue();
  console.log(await selectedValues);
    await page.waitForTimeout(5000);
})

test('Dynamic dropdown',async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
  await page.getByPlaceholder("Select an item").click();
  await page.locator("div#dropdown>div").nth(9).click();
  await page.waitForTimeout(5000);
})

test('Auto Suggest Drop down',async({page})=>{
  await page.goto("https://www.amazon.in/")
  await page.locator("input#twotabsearchtextbox").fill("laptop");
  await page.locator(".two-pane-results-container div[role='row']").nth(2).click();
  await page.waitForTimeout(5000);
})
