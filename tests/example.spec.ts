import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://tecbizsolutions.com/');  // replace with to pass https://playwright.dev
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});