import { Locator } from "@playwright/test";
import { Page } from "@browserbasehq/stagehand";

export class AvatarSelectionModal {
  private skipButton: Locator;

  constructor(private page: Page) {
    this.skipButton = page.locator("#modalnewavatar-button-skip");
  }

  async clickSkip() {
    await this.skipButton.click();
  }
}
