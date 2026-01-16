import { test, expect } from '@playwright/test';

test.describe('Auth', () => {
  test('Test case 1: Login', async ({ page }) => {
    const url = 'https://frienzy-2-0-admin-staging.vercel.app/auth';
    await page.goto(url);

    // Fill credentials
    await page.fill('input[type="email"]', 'app-71.paint@icloud.com');
    await page.fill('input[type="password"]', 'Test123123');

    // Click the Sign in button (case-insensitive match)
    await page.getByRole('button', { name: /Sign In/i }).click();

    // Wait 2 seconds as requested
    await page.waitForTimeout(2000);

    // Assert the business name is visible in the UI
    const business = page.getByText('A Test Business', { exact: true });
    await expect(business).toBeVisible({ timeout: 5000 });
  });
});
