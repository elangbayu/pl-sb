import { expect, Page } from "@playwright/test";
import { AvatarSelectionModal } from "./components/AvatarSelectionModal";

export class StreamPage {
  readonly avatarSelectionPopup: AvatarSelectionModal;

  constructor(private page: Page) {
    this.avatarSelectionPopup = new AvatarSelectionModal(page);
  }

  async clickSkipAvatarSelectionPopup() {
    await this.avatarSelectionPopup.clickSkip();
  }

  async assertStreamLoaded() {
    expect(
      this.page.locator("xpath=//div[@data-cy='stream-widget-navigation']")
    ).toBeVisible();
  }
}
