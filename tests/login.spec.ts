import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Logowanie do sklepu Hyva Demo', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyOnLoginPage();
  });

  test('Poprawne logowanie do konta', async ({ page }) => {
    const email = process.env.USER_NAME || 'valid.user@example.com';
    const password = process.env.PASSWORD || 'ValidPassword123';
    
    await loginPage.emailInput.fill(email);
    await loginPage.passwordInput.fill(password);
    await loginPage.clickLoginButton();

    await expect(page).toHaveURL(/customer\/account/);
    await expect(page.getByRole('heading', { name: 'My Account', level: 1 })).toBeVisible();
  });

  test.describe('Próba logowania z niepoprawnymi danymi', () => {
    const testData = [
      { email: 'wrong@example.com', password: 'wrongpass' },
      { email: 'user@example.com', password: 'wrongpass' },
      { email: 'invalid-email-format', password: 'password123' },
    ];


    testData.forEach(({ email, password }) => {
      test(`E-mail: ${email}, Hasło: ${password}`, async ({page}) => {
      await loginPage.emailInput.fill(email);
      await loginPage.passwordInput.fill(password);
      await loginPage.clickLoginButton();

      if (email.includes('@')){
        await loginPage.verifyGlobalErrorMessage('The account sign-in was incorrect');
      }else{
        await expect(page).toHaveURL(/customer\/account\/login/);
      }
      
      });
    });
  });

  test('Walidacja pustych pól formularza', async () => {
    await loginPage.clickLoginButton();
    await loginPage.verifyFieldValidationErrors();
  });

  test('Nawigacja do odzyskiwania hasła', async ({ page }) => {
    await loginPage.clickForgotPassword();
    
    await expect(page).toHaveURL(/customer\/account\/forgotpassword/);
    await expect(page.getByRole('heading', { name: /Forgot Your Password|Odzyskiwanie hasła/i })).toBeVisible();
  });
});
