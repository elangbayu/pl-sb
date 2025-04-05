import { Page, expect } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://stockbit.com");
    const stockbitHeroLandingText = await this.page.locator(
      "xpath=//h1[.='Investasi Saham Bersama']"
    );
    expect(stockbitHeroLandingText).toBeVisible();
  }

  async clickLogin() {
    await this.page
      .locator("xpath=//a[@data-cy='landing-login-button']")
      .click();
  }
}
