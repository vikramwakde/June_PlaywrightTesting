// [8/1, 10:37 AM] Ravi Utkarsha Academy Traing Center: username,password
// admin,admin123
// student,student123
// guest,guest123
// admin1,admin123
// admin2,admin123
// admin3,admin123
// admin4,admin123
// admin5,admin123
// [8/1, 10:38 AM] Ravi Utkarsha Academy Traing Center: const fs = require('fs');

function readCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (!content) return [];

  const [headerLine, ...rows] = content.split(/\r?\n/);
  const headers = headerLine.split(',').map(h => h.trim());

  return rows.map(row => {
    const values = row.split(',').map(v => v.trim());
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index] ?? '';
      return obj;
    }, {});
  });
}

module.exports = { readCSV };
[8/1, 10:38 AM] Ravi Utkarsha Academy Traing Center: const { test, expect } = require('@playwright/test');
const { readCSV } = require('../utils/csvReader');

const testData = readCSV('./testdata/usertest.csv');
//const testData = readCSV('./testdata/usertest.csv');
// test.beforeAll(async () => {
//     testData = await readCSV('./testdata/usertest.csv');
// });


test.beforeEach(async ({ page }) => {
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})
for (const data of testData) {
test(`Login test with data from CSV file ${data.username}`, async ({ page }) => {
 //   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
    await page.getByRole('button', { name: 'Login' }).click();
    // await expect.soft(page.getByRole('heading')).toContainText('Dashboard');
    // await page.locator('.oxd-userdropdown-name').click();
    // await page.getByRole('menuitem', { name: 'Logout' }).click();
  });
}