import { Page, expect } from '@playwright/test';

export class DashboardPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async lougOutNavBar() {
        // Log out from the nav bar  
        await expect(this.page.getByText('Login successful!')).toBeHidden();
        await this.page.getByRole('button', { name: 'open profile' }).click();
        await this.page.getByRole('button', { name: 'logout Logout' }).click();
        await expect(this.page.getByRole('heading', { name: 'Welcome to Frienzy' })).toBeVisible(); ('Welcome to Frienzy')
    }

    async lougOutSideBar() {
        // Log out from the side bar
        await expect(this.page.getByText('Login successful!')).toBeHidden();
        await this.page.getByRole('menuitem', { name: 'Logout' }).click();
        await expect(this.page.getByRole('heading', { name: 'Welcome to Frienzy' })).toBeVisible(); ('Welcome to Frienzy')
    }

    async membershipAssert() {
        // Assert membership page contents
        await expect(this.page.getByRole('main')).toContainText('$0/month');
        await expect(this.page.getByRole('main')).toContainText('$9/month');
        await expect(this.page.getByRole('main')).toContainText('Custom/Contact Sales');
    }
} 