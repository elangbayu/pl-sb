import { Locator } from "@playwright/test";
import { Page } from "@browserbasehq/stagehand";

export class ProfilePage {
  private username: Locator;

  constructor(private page: Page) {
    this.username = page.locator("xpath=(//h1)[1]");
  }

  async isUsernameDisplayed() {
    return await this.username.isVisible();
  }
}
