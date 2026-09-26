import{test, expect} from '@playwright/test'


test("Dynamic Table",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
  const table = await page.locator("#taskTable");
  await expect(table).toBeVisible();

  const chromerow = await table.locator(" tr",{hasText: "Chrome"});
  console.log(await chromerow.count());

  const firefoxrow = await table.locator(" tr",{hasText: "Firefox"});
  console.log(await firefoxrow.count());

  const cpuLoadChrome = await chromerow.locator("td",{hasText:"%"}).textContent()
  console.log(cpuLoadChrome);

  const NetworkSpeed = await chromerow.locator("td",{hasText: "Mbps"}).textContent()
  console.log(NetworkSpeed)

  const MemorySize = await firefoxrow.locator("td",{hasText:/\d+\s*MB$/}).textContent();
  console.log(MemorySize)

  const DiskSpace = await firefoxrow.locator("td",{hasText: /MB\/s$/}).textContent();
  console.log(DiskSpace);

  const ChromeCpu = await page.locator("strong.chrome-cpu").textContent();
  expect(ChromeCpu).toEqual(cpuLoadChrome);

  const ChromeNetwork = await page.locator("strong.chrome-network").textContent();
  expect(ChromeNetwork).toEqual(NetworkSpeed);

  const FirefoxMemorySize = await page.locator("strong.firefox-memory").textContent();
  expect(FirefoxMemorySize).toEqual(MemorySize);

  const FirefoxDiskSpace = await page.locator("strong.firefox-disk").textContent();
  expect(FirefoxDiskSpace).toEqual(DiskSpace);
  
  await page.waitForTimeout(10000);
})

test("Pagination Table",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
  const table = await page.locator("#productTable");
  await expect(table).toBeVisible();

  const tableButtons = await page.locator("#pagination a")
  const pagecount = await tableButtons.count();
  console.log("Total pages: " + pagecount);


  const allProducts = [];
  const searchProduct = "Wireless Mouse 20";
  let productFound = false;
  for(let pageNum = 1; pageNum <= pagecount; pageNum++){

    console.log("----Reading Page------" +pageNum);
    const activeButton = page.locator("ul.pagination a[class='active']")
    await expect(activeButton).toHaveText(`${pageNum}`);
    const rows = await table.locator("tbody>tr")
    const rowcount = await rows.count();
    console.log("Rows on page " +pageNum+ " row count for " +rowcount);

    // Extract data from each row.
    for(let i = 0; i<rowcount;i++){
      const idcolumn = await rows.nth(i).locator("td").nth(0).textContent()
      const productName = await rows.nth(i).locator("td").nth(1).textContent()
      if(productName.includes(searchProduct)){
        productFound = true;
        console.log(productFound);
        const productprice = await rows.nth(i).locator("td").nth(2).textContent()
        console.log(productprice);
      }
      const price = await rows.nth(i).locator("td").nth(2).textContent()
      const checkbox = await rows.nth(i).locator("td").nth(3).locator("input");
      await checkbox.check();

      const product = {
        id : idcolumn.trim(),
        product : productName.trim(),
        price : price.trim()
      };
      allProducts.push(product);
      console.log(`Product id: ${product.id}   product Name : ${product.product}  product price ${product.price}`)
    }
    if(pageNum < pagecount){
    const nextbtn = page.locator("#pagination a",{hasText: `${pageNum + 1}`})
    await nextbtn.click();

    await page.waitForLoadState('networkidle')
    }
  }
  console.log(allProducts.length);
  expect(allProducts.length).toEqual(20);
  await page.waitForTimeout(5000);
})

