import { expect, Locator, Page } from "@playwright/test";
import { AvatarSelectionModal } from "../components/AvatarSelectionModal";

export class StreamPage {
  readonly avatarSelectionPopup: AvatarSelectionModal;
  private streamWidgetNavigation: Locator;

  constructor(private page: Page) {
    this.avatarSelectionPopup = new AvatarSelectionModal(page);
    this.streamWidgetNavigation = page.locator(
      "xpath=//div[@data-cy='stream-widget-navigation']"
    );
  }

  async clickSkipAvatarSelectionPopup() {
    await this.avatarSelectionPopup.clickSkip();
  }

  async assertStreamLoaded() {
    expect(this.streamWidgetNavigation).toBeVisible();
  }
}
