import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#email-login-button");
  }

  async inputUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async inputPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.page.waitForTimeout(1000);
    await this.loginButton.click();
  }
}
