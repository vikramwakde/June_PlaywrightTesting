import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('shoes');
  await page.getByRole('link', { name: 'shoes for men in Men\'s' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  const page1 = await page1Promise;
//   await page1.getByRole('link', { name: 'Visit brand store' }).click();
  await page1.getByRole('link', { name: 'Home' }).click();
  await page1.getByRole('button', { name: '✕' }).click();
  await page1.getByRole('img', { name: 'Image' }).nth(1).click();
  await expect(page1.getByRole('link', { name: 'For You', exact: true })).toBeVisible();
});