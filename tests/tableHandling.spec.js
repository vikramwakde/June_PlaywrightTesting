import{ test, expect} from '@playwright/test'

test('Static table test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator("table[name='BookTable']");
    const rowCount = await table.locator(' tr').count();
    const columnCount = await table.locator('tr th').count();
    console.log("Total number of rows in the table are: "+rowCount);
    console.log("Total number of columns in the table are: "+columnCount);
    const headings = await table.locator('tr th').allTextContents();
    console.log("Table Heading are as follows: " +headings);

    const expectedHeadings = ['BookName', 'Author', 'Subject', 'Price'];
    await expect(headings).toEqual(expectedHeadings);

    const bookName = await table.locator('tr td:nth-child(1)').allTextContents();
    console.log("Book Names are as follows: "+bookName);

    const rowData = await table.locator('tr').allTextContents();
    // console.log("Row data is as follows: "+rowData);

    const columnData = await table.locator('tr td').allTextContents();

   // console.log("First Book of the table is: "+ columnData[5]+" and its Price is: "+columnData[3]);

    // for(let i=1;i<rowCount;i++){
    //     const rowData = await table.locator('tr').nth(i).locator('td').allTextContents();
    //     console.log("Row "+i+" data is: "+rowData);
    //     const columnData = await table.locator('tr').nth(i).locator('td').count();
    //     for(let j=0;j<columnData;j++){
    //         const cellData = await table.locator('tr').nth(i).locator('td').nth(j).textContent();
    //         console.log("Row "+i+" Column "+j+" data is: "+cellData);
    //     }
    // }   

})

test('Pagination Table Test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const pTable= await page.locator('#productTable');
    await expect(pTable).toBeVisible();

    const pTableRows = await pTable.locator('tr').count();
    console.log("Total rows in the table are: "+pTableRows);

    const tableButtons = await page.locator("#pagination a");
    const pagecount = await tableButtons.count();
    console.log("Total pages: " + pagecount);
    const searchProduct = "Digital Camera";
    
    let productFound = false;

for (let pageNum = 0; pageNum < pagecount; pageNum++) {
    const currentPageButton = await tableButtons.nth(pageNum);
    await currentPageButton.click();

    // Wait for the table to refresh
    
    for (let rowIndex = 1; rowIndex < pTableRows; rowIndex++) {
        const rowData = await pTable
            .locator('tr')
            .nth(rowIndex)
            .locator('td')
            .allTextContents();

        if (rowData.includes(searchProduct)) {
            productFound = true;
            console.log(`Product "${searchProduct}" found on page ${pageNum + 1}, row ${rowIndex}.`);
            break;
        }
    }

    if (productFound) {
        break;
    }
}

// console.log(productFound ? "Product found" : "Product not found");

    if (!productFound) {
        console.log(`Product "${searchProduct}" not found in the table.`);
    }   
    
})

