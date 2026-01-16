import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { DashboardPage } from '../page-objects/dashboardPage';
import { argosScreenshot } from "@argos-ci/playwright";


test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

})



test('Verify Subscription Tab Navigation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.loginForm('carlos.pineda.qa@gmail.com', 'Qatest1234')

  // Wait 3 seconds as 
  await page.waitForTimeout(3000);

  // Assert the dashboard name is visible in the UI
  await expect(page.locator('h2')).toContainText('Trips');
  await page.getByRole('link').nth(2).click();
  await expect(page.locator('h2')).toBeVisible();
  await page.getByRole('tab', { name: 'subscription' }).click();
  await dashboardPage.membershipAssert();
  


  // Log out and assert login page
  await dashboardPage.lougOutNavBar();

});