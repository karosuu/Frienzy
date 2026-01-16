import { Page,expect } from '@playwright/test';

export class TripsPage {

    readonly page: Page;

    constructor(page: Page) { 
        this.page = page;
    }   

    async fillNewTripDetails() {
        // Fill trip details
         await this.page.getByText('Input ManuallyCreate your').click();
  await expect(this.page.getByRole('button', { name: 'Continue to Trip Details' })).toBeVisible();
  await this.page.getByRole('button', { name: 'Continue to Trip Details' }).click();
  await expect(this.page.getByRole('heading', { name: 'Trip Details' })).toBeVisible();
  await this.page.getByRole('textbox', { name: 'Trip Title *' }).click();
  await this.page.getByRole('textbox', { name: 'Trip Title *' }).fill('Automated Trip test');
  await this.page.getByRole('textbox', { name: 'Description' }).click();
  await this.page.getByRole('textbox', { name: 'Description' }).fill('Automated trip');
  
  await this.page.getByRole('textbox', { name: 'MM/DD/YYYY' }).first().click();
  await this.page.getByRole('button', { name: 'Open calendar' }).nth(1).click();
  await this.page.getByRole('combobox', { name: 'Search for a location' }).click();
  await this.page.getByRole('combobox', { name: 'Search for a location' }).fill('panam');
  await this.page.getByRole('option', { name: 'Panama City Beach, FL, USA' }).click();
  await this.page.getByRole('button', { name: 'Start Planning' }).click();
  await expect(this.page.getByRole('heading', { name: 'Automated Trip test' })).toBeVisible();
  await this.page.getByRole('button', { name: 'Actions' }).click();
  await this.page.getByRole('menuitem', { name: 'Delete Trip' }).click();
  await expect(this.page.getByRole('heading', { name: 'Are you sure?' })).toBeVisible();
  await this.page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await expect(this.page).toHaveURL('/trips');
                
    }
    
} 