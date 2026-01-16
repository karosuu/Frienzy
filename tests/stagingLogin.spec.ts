import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { DashboardPage } from '../page-objects/dashboardPage';



test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

})



test('Login as Business Account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.loginForm('app-71.paint@icloud.com', 'Test123123')

  // Wait 3 seconds as 
  await page.waitForTimeout(3000);

  // Assert the business name is visible in the UI
  await expect(page.getByLabel('open profile').getByRole('heading')).toContainText('A test business');
  await page.getByRole('img', { name: 'Avatar' }).click();

  // Log out and assert login page
  await dashboardPage.lougOutSideBar();
});

test('Login as Traveler', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.loginForm('carlos.pineda.qa@gmail.com', 'Qatest1234')

// Wait 3 seconds as 
  await page.waitForTimeout(3000);

  // Assert the dashboard name is visible in the UI
  await expect(page.locator('h2')).toContainText('Trips');

  // Log out and assert login page
  await dashboardPage.lougOutNavBar();

});
