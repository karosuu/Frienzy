import { Page,expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) { 
        this.page = page;
    }   

    async loginForm(email: string, password: string) {
        // Fill credential
         
        await expect(this.page.getByRole('heading')).toContainText('Welcome to Frienzy');
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign In' }).nth(1).click();          
    }
    
} 