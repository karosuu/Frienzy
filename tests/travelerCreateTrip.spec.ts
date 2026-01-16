import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { DashboardPage } from '../page-objects/dashboardPage';
import { TripsPage } from '../page-objects/tripsPage';



test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

})



test('Create a trip as a Traveler', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const tripsPage = new TripsPage(page);

  await loginPage.loginForm('carlos.pineda.qa@gmail.com', 'Qatest1234')

  // Wait 3 seconds as 
  await page.waitForTimeout(3000);

  // Assert the dashboard name is visible in the UI
  await expect(page.locator('h2')).toContainText('Trips');

  await page.getByRole('button', { name: 'Create Trip' }).click();
  await expect(page).toHaveURL('/trip-method-selection');
  await expect(page.getByRole('heading', { name: 'Create New Trip' })).toBeVisible();

  //fill trips details
  await tripsPage.fillNewTripDetails();


  // Log out and assert login page
  await dashboardPage.lougOutNavBar();

});