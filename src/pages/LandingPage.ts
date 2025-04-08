import { Locator } from "@playwright/test";
import { Page } from "@browserbasehq/stagehand";

export class LandingPage {
  private loginButton: Locator;

  constructor(private page: Page) {
    this.loginButton = page.locator(
      "xpath=//a[@data-cy='landing-login-button']"
    );
  }

  async goto() {
    await this.page.goto("https://stockbit.com");
  }

  async clickLogin() {
    await this.page.waitForLoadState("networkidle");
    await this.loginButton.click();
  }
}
