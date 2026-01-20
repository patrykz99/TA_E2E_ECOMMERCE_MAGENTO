import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly pageHeading: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly globalAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTitle('Email', { exact: false });
        this.passwordInput = page.getByTitle('Password', { exact: false });
        this.loginButton = page.getByRole('button', { name: /Sign In|Login/i });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
        // Assuming h1 is the main heading
        this.pageHeading = page.getByRole('heading', { level: 1 });
        
        // Error messages
        this.emailError = page.locator('#email-error, .text-red-600, .mage-error').first();
        this.passwordError = page.locator('#pass-error, .text-red-600, .mage-error').first();
        this.globalAlert = page.getByRole('alert').first();
    }

    async goto() {
        await this.page.goto('/customer/account/login/');
    }

    async login(email: string, pass: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickForgotPassword() {
        this.forgotPasswordLink.click();
    }

    async verifyOnLoginPage() {
        await expect(this.page).toHaveTitle(/Login|Customer/);
    }

    async verifyGlobalErrorMessage(message: string) {
        await expect(this.globalAlert).toContainText(message);
    }

    async verifyFieldValidationErrors() {
        await expect(this.page).toHaveURL('/customer/account/login/');
    }
}
