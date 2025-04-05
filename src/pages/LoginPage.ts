import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async inputUsername(username: string) {
    await this.page.locator("#username").fill(username);
  }

  async inputPassword(password: string) {
    await this.page.locator("#password").fill(password);
  }

  async clickLogin() {
    await this.page.waitForTimeout(1000);
    await this.page.locator("#email-login-button").click();
  }
}
