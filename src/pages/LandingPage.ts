import { Locator, Page, expect } from "@playwright/test";

export class LandingPage {
  private stockbitHeroLandingText: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.stockbitHeroLandingText = page.locator(
      "xpath=//h1[.='Investasi Saham Bersama']"
    );
    this.loginButton = page.locator(
      "xpath=//a[@data-cy='landing-login-button']"
    );
  }

  async goto() {
    await this.page.goto("https://stockbit.com");
    expect(this.stockbitHeroLandingText).toBeVisible();
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}
