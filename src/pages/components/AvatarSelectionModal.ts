import { Page } from "@playwright/test";

export class AvatarSelectionModal {
  constructor(private page: Page) {}

  async clickSkip() {
    await this.page.locator("#modalnewavatar-button-skip").click();
  }
}
